import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Client } from "@notionhq/client";
import {
  COMPANY_SIZES,
  PACKAGES,
  BLOCKED_EMAIL_DOMAINS,
  EMAIL_REGEX,
} from "../shared/form-constants.js";

/**
 * Receives a consultation form submission and creates a row in a Notion database.
 *
 * Required environment variables (set in Vercel project settings):
 *   - NOTION_TOKEN        Internal integration secret (starts with "ntn_" or "secret_")
 *   - NOTION_DATABASE_ID  The target database id
 *
 * Notion database properties (names must match exactly):
 *   - Name                   (Title)
 *   - Email                  (Email)
 *   - Position               (Rich text)
 *   - Company                (Rich text)
 *   - Company Size           (Select)        options in shared/form-constants.js
 *   - Selected Package       (Select)        options in shared/form-constants.js
 *   - Current Ops Challenge  (Rich text)
 *   - Source                 (Select)        always set to "Website Form" here
 *   - Submitted At           (Date)          [optional]
 */

type ConsultationPayload = {
  name?: string;
  email?: string;
  position?: string;
  company?: string;
  companySize?: string;
  selectedPackage?: string;
  challenge?: string;
};

type FieldErrors = Partial<Record<keyof ConsultationPayload, string>>;

const MAX_LEN = 5000;
const SOURCE = "Website Form";

function asText(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, MAX_LEN) : "";
}

function emailDomain(email: string): string {
  const at = email.lastIndexOf("@");
  return at >= 0 ? email.slice(at + 1).toLowerCase() : "";
}

function validate(p: Required<ConsultationPayload>): FieldErrors {
  const errors: FieldErrors = {};

  if (!p.name) errors.name = "Name is required.";
  if (!p.position) errors.position = "Position is required.";
  if (!p.company) errors.company = "Company is required.";
  if (!p.challenge) errors.challenge = "Please describe your current operational challenge.";

  if (!p.email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_REGEX.test(p.email)) {
    errors.email = "Please enter a valid email address.";
  } else if (BLOCKED_EMAIL_DOMAINS.has(emailDomain(p.email))) {
    errors.email = "Please use your work email (free providers aren't accepted).";
  }

  if (!p.companySize) {
    errors.companySize = "Please select your company size.";
  } else if (!COMPANY_SIZES.includes(p.companySize)) {
    errors.companySize = "Please choose a valid company size.";
  }

  if (!p.selectedPackage) {
    errors.selectedPackage = "Please select a package.";
  } else if (!PACKAGES.includes(p.selectedPackage)) {
    errors.selectedPackage = "Please choose a valid package.";
  }

  return errors;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!token || !databaseId) {
    console.error("Missing NOTION_TOKEN or NOTION_DATABASE_ID env var.");
    return res.status(500).json({ error: "Server is not configured." });
  }

  const body = (req.body ?? {}) as ConsultationPayload;
  const fields = {
    name: asText(body.name),
    email: asText(body.email).toLowerCase(),
    position: asText(body.position),
    company: asText(body.company),
    companySize: asText(body.companySize),
    selectedPackage: asText(body.selectedPackage),
    challenge: asText(body.challenge),
  };

  const fieldErrors = validate(fields);
  if (Object.keys(fieldErrors).length > 0) {
    return res.status(400).json({
      error: "Please fix the highlighted fields.",
      fieldErrors,
    });
  }

  const notion = new Client({ auth: token });

  try {
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: { title: [{ text: { content: fields.name } }] },
        Email: { email: fields.email },
        Position: { rich_text: [{ text: { content: fields.position } }] },
        Company: { rich_text: [{ text: { content: fields.company } }] },
        "Company Size": { select: { name: fields.companySize } },
        "Selected Package": { select: { name: fields.selectedPackage } },
        "Current Ops Challenge": { rich_text: [{ text: { content: fields.challenge } }] },
        Source: { select: { name: SOURCE } },
        "Submitted At": { date: { start: new Date().toISOString() } },
      },
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Notion create page failed:", error);
    return res.status(502).json({ error: "Could not submit your request. Please try again." });
  }
}
