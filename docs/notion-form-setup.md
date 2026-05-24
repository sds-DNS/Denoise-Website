# Connecting the consultation form to Notion

The consultation form posts to a Vercel serverless function
([`api/consultation.ts`](../api/consultation.ts)) which creates a row in a Notion
database. This doc covers the one-time setup. No code changes are needed.

## Flow

```
Browser form  →  POST /api/consultation  (Vercel function)  →  Notion API  →  new DB row
```

The Notion token lives only on the server (Vercel env var), never in the browser.

## 1. Create the Notion database

In Notion, create a database (table) with these **exact** property names and types:

| Property      | Type      | Required |
| ------------- | --------- | -------- |
| Name          | Title     | yes      |
| Email         | Email     | yes      |
| Position      | Rich text | yes      |
| Company       | Rich text | yes      |
| Company Size  | Rich text | no       |
| Challenge     | Rich text | yes      |
| Submitted At  | Date      | no       |

> Property names are case-sensitive and must match. If you rename one, update the
> matching key in `api/consultation.ts`.

## 2. Create an integration and get the token

1. Go to https://www.notion.so/my-integrations → **New integration**.
2. Give it a name (e.g. "DENOISE Website Form"), pick the workspace, **Internal** type.
3. Copy the **Internal Integration Secret** (starts with `ntn_` or `secret_`).
   This is `NOTION_TOKEN`.

## 3. Share the database with the integration

Open the database in Notion → top-right **•••** menu → **Connections** (or "Add
connections") → select your integration. **Without this step the API returns 404.**

## 4. Get the database id

Open the database as a full page. The id is the 32-character string in the URL:

```
https://www.notion.so/<workspace>/<DATABASE_ID>?v=<view_id>
                                  ^^^^^^^^^^^^^^
```

This is `NOTION_DATABASE_ID`.

## 5. Set the environment variables in Vercel

In the Vercel project → **Settings → Environment Variables**, add (for Production,
Preview, and Development):

- `NOTION_TOKEN` = the integration secret
- `NOTION_DATABASE_ID` = the database id

Redeploy after adding them.

## 6. Local development (optional)

Copy `.env.example` to `.env.local`, fill in the two values, then run the form
against the function with the Vercel CLI:

```bash
pnpm dlx vercel dev
```

(Plain `pnpm dev` runs only the Vite frontend — the `/api` function needs the
Vercel runtime, which `vercel dev` provides.)

## Troubleshooting

- **404 from Notion** → the database isn't shared with the integration (step 3),
  or the database id is wrong.
- **"Server is not configured"** → env vars missing in Vercel (step 5).
- **400 validation error** → a required field was empty or the email was invalid.
- **Property-name errors** → a column name in Notion doesn't match the keys in
  `api/consultation.ts`.
