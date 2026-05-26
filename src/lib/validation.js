import {
  COMPANY_SIZES,
  PACKAGES,
  BLOCKED_EMAIL_DOMAINS,
  EMAIL_REGEX,
} from "../../shared/form-constants.js";

function emailDomain(email) {
  const at = email.lastIndexOf("@");
  return at >= 0 ? email.slice(at + 1).toLowerCase() : "";
}

// Mirrors api/consultation.ts so users get immediate feedback and the server
// still has the final say. Returns a map of field -> message; empty when valid.
export function validateConsultationForm(form) {
  const errors = {};
  const trimmed = Object.fromEntries(
    Object.entries(form).map(([k, v]) => [k, typeof v === "string" ? v.trim() : ""])
  );

  if (!trimmed.name) errors.name = "Name is required.";
  if (!trimmed.position) errors.position = "Position is required.";
  if (!trimmed.company) errors.company = "Company is required.";
  if (!trimmed.challenge) errors.challenge = "Please describe your current operational challenge.";

  if (!trimmed.email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_REGEX.test(trimmed.email)) {
    errors.email = "Please enter a valid email address.";
  } else if (BLOCKED_EMAIL_DOMAINS.has(emailDomain(trimmed.email))) {
    errors.email = "Please use your work email (free providers aren't accepted).";
  }

  if (!trimmed.companySize) {
    errors.companySize = "Please select your company size.";
  } else if (!COMPANY_SIZES.includes(trimmed.companySize)) {
    errors.companySize = "Please choose a valid company size.";
  }

  if (!trimmed.selectedPackage) {
    errors.selectedPackage = "Please select a package.";
  } else if (!PACKAGES.includes(trimmed.selectedPackage)) {
    errors.selectedPackage = "Please choose a valid package.";
  }

  return errors;
}
