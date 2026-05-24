import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Client } from "@notionhq/client";

/**
 * Receives a consultation form submission and creates a row in a Notion database.
 *
 * Required environment variables (set in Vercel project settings):
 *   - NOTION_TOKEN        Internal integration secret (starts with "ntn_" or "secret_")
 *   - NOTION_DATABASE_ID  The target database id
 *
 * The Notion database must have these properties (type in parentheses):
 *   - Name           (Title)
 *   - Email          (Email)
 *   - Position       (Rich text)
 *   - Company        (Rich text)
 *   - Company Size   (Rich text)
 *   - Challenge      (Rich text)
 *   - Submitted At   (Date)        [optional]
 */

type ConsultationPayload = {
  name?: string;
  email?: string;
  position?: string;
  company?: string;
  companySize?: string;
  challenge?: string;
};

const MAX_LEN = 5000;

function asText(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, MAX_LEN) : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
  const name = asText(body.name);
  const email = asText(body.email);
  const position = asText(body.position);
  const company = asText(body.company);
  const companySize = asText(body.companySize);
  const challenge = asText(body.challenge);

  // Required-field validation (mirrors the form's `required` attributes).
  if (!name || !email || !position || !company || !challenge) {
    return res.status(400).json({ error: "Please fill in all required fields." });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  const notion = new Client({ auth: token });

  try {
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: { title: [{ text: { content: name } }] },
        Email: { email },
        Position: { rich_text: [{ text: { content: position } }] },
        Company: { rich_text: [{ text: { content: company } }] },
        "Company Size": { rich_text: [{ text: { content: companySize } }] },
        Challenge: { rich_text: [{ text: { content: challenge } }] },
        "Submitted At": { date: { start: new Date().toISOString() } },
      },
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Notion create page failed:", error);
    return res.status(502).json({ error: "Could not submit your request. Please try again." });
  }
}
