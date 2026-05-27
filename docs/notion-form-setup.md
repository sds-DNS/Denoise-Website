# Connecting the consultation form to Notion

The consultation form posts to a Vercel serverless function
([`api/consultation.ts`](../api/consultation.ts)) which creates a row in a Notion
database. This doc covers the one-time setup. No code changes are needed for
day-to-day use.

## Flow

```
Browser form  →  POST /api/consultation  (Vercel function)  →  Notion API  →  new DB row
```

The Notion token lives only on the server (Vercel env var), never in the browser.

## 1. Create the Notion database

Create a Notion database (table) with these **exact** property names and types
— Notion's API is case- and spelling-sensitive:

| Property                | Type      | Notes                                              |
| ----------------------- | --------- | -------------------------------------------------- |
| Name                    | Title     | required                                           |
| Email                   | Email     | required                                           |
| Position                | Rich text | required                                           |
| Company                 | Rich text | required                                           |
| Company Size            | Select    | options below                                      |
| Selected Package        | Select    | options below                                      |
| Current Ops Challenge   | Rich text | required                                           |
| Source                  | Select    | option `Website Form` (more sources can be added)  |
| Submitted At            | Date      | optional, set automatically                        |

### Select options

**Company Size** (must match exactly — the API rejects anything else):

- Solo Founder
- 2–10 Employees
- 11–25 Employees
- 26–50 Employees
- 51–100 Employees
- 101–250 Employees
- 251–500 Employees
- 500 Employees & Above

> Note: the "–" between the numbers is an en-dash (U+2013), not a hyphen.

**Selected Package:**

- Entry Engagement
- Scale Engagement

**Source:**

- Website Form

> If you ever change these option values or add a Company Size / Package, also
> update `shared/form-constants.js` so the form dropdown and the API validator
> stay in sync with Notion.

## 2. Create an integration and get the token

1. Go to https://www.notion.so/my-integrations → **New integration**.
2. Give it a name (e.g. "DENOISE Website Form"), pick the workspace, **Internal** type.
3. Copy the **Internal Integration Secret** (starts with `ntn_` or `secret_`).
   This is `NOTION_TOKEN`.

## 3. Share the database with the integration

Open the database in Notion → top-right **•••** menu → **Connections** (or
"Add connections") → select your integration. **Without this step the API
returns 404.**

## 4. Get the database id

Open the database as a full page. The id is the 32-character string in the URL:

```
https://www.notion.so/<workspace>/<DATABASE_ID>?v=<view_id>
                                  ^^^^^^^^^^^^^^
```

This is `NOTION_DATABASE_ID`.

## 5. Set the environment variables in Vercel

In the Vercel project → **Settings → Environment Variables**, add (for
Production, Preview, and Development):

- `NOTION_TOKEN` = the integration secret
- `NOTION_DATABASE_ID` = the database id

Redeploy after adding them.

## 6. Local development

Copy `.env.example` to `.env` (or `.env.local`), fill in `NOTION_TOKEN` and
`NOTION_DATABASE_ID`, then:

```bash
pnpm dev:full     # → http://localhost:3000  (frontend + API)
```

This runs Vercel's local runtime, which serves the Vite frontend AND the
`/api/consultation` function from the same origin (so the form's relative
`fetch("/api/consultation")` call works as it does in production).

Plain `pnpm dev` runs only the Vite frontend on port 5173 — fine for UI work,
but the form will get 404 from `/api/consultation`.

## Validation behaviour

The form validates on the client first, and the server validates again on every
submission (so neither side can be bypassed):

- **All fields are required** — empty fields show an inline error pointing at
  the offending field.
- **Email** must be syntactically valid, and **public/free providers are
  blocked** (gmail, yahoo, hotmail, outlook, icloud, proton, aol, etc. — full
  list in `shared/form-constants.js`).
- **Company Size** and **Selected Package** must match one of the option values
  above.
- **Source** is always set to `Website Form` server-side, regardless of payload.

## Troubleshooting

- **404 from Notion** → the database isn't shared with the integration (step 3),
  or the database id is wrong.
- **"Server is not configured"** → env vars missing in Vercel (step 5).
- **"select option ... does not exist"** → a Select option in Notion doesn't
  exactly match what the form sent. Check spelling/dashes against the lists
  above and against `shared/form-constants.js`.
- **400 validation error** → a required field was empty, or the email failed
  the public-provider check.
- **Property-name errors** → a column name in Notion doesn't match the keys in
  `api/consultation.ts`.
