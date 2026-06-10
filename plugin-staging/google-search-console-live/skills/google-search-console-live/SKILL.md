---
name: google-search-console-live
description: Use when Codex needs live Google Search Console data through a local OAuth client flow. Authenticate once, reuse token.json, validate site access and query search performance with practical SEO takeaways in Portuguese.
---

# Google Search Console Live

## When to use
Use this skill whenever the user asks for:
- live Search Console data
- site access validation for Search Console
- top queries, pages, CTR, clicks or impressions
- performance reports by query, page, country or device
- troubleshooting OAuth or permission issues in Search Console

## Important auth note
- A simple Google API key is usually not enough for Search Console reporting.
- Prefer an OAuth client with `client_secret.json`.
- The authenticated Google user must already have access to the target Search Console property.

## Plugin location
Use this plugin folder:

`C:\Users\Felipe.Sannino\plugins\google-search-console-live`

## Expected files
Before running reports, confirm these files exist in the plugin `scripts` folder:
- `client_secret.json`
- `token.json` (created after first auth)

## Commands
Run commands from:

`C:\Users\Felipe.Sannino\plugins\google-search-console-live\scripts`

### 1. Authenticate or refresh token
`python -s auth_search_console.py`

### 2. Validate Search Console access
`python -s check_access.py --site-url sc-domain:sermst.com.br`

### 3. Query performance
`python -s query_performance.py --site-url sc-domain:sermst.com.br --start-date 2026-04-24 --end-date 2026-05-22 --dimensions query,page --row-limit 25`

## Execution rules
- Use `functions.shell_command`.
- Set the working directory to the plugin `scripts` directory.
- If `token.json` is missing or invalid, run `auth_search_console.py` first.
- If a report fails, run `check_access.py` to confirm the Google account and property permissions.
- Summarize results in Portuguese with practical SEO takeaways instead of dumping raw output.
- When useful, call out:
  - top queries
  - top pages
  - CTR opportunities
  - pages with high impressions and low clicks
  - permission or scope errors

## Output style
Keep the answer short and useful:
- what ran
- what the numbers say
- what matters
- next recommended action
