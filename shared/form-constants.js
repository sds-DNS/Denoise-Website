// Single source of truth for form option values shared by the React form
// (src/components/sections/Consultation.jsx) and the API validator
// (api/consultation.ts). Keep these in sync with the Notion database
// Select options.

export const COMPANY_SIZES = [
  "Solo Founder",
  "2–10 Employees",
  "11–25 Employees",
  "26–50 Employees",
  "51–100 Employees",
  "101–250 Employees",
  "251–500 Employees",
  "500 Employees & Above",
];

export const PACKAGES = ["Entry Engagement", "Scale Engagement"];

// Public/free email providers we reject for business consultation requests.
export const BLOCKED_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.uk",
  "ymail.com",
  "rocketmail.com",
  "hotmail.com",
  "hotmail.co.uk",
  "outlook.com",
  "live.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "protonmail.com",
  "proton.me",
  "pm.me",
  "zoho.com",
  "gmx.com",
  "gmx.de",
  "gmx.net",
  "mail.com",
  "yandex.com",
  "yandex.ru",
  "tutanota.com",
  "fastmail.com",
  "fastmail.fm",
  "inbox.com",
  "qq.com",
  "163.com",
  "126.com",
]);

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
