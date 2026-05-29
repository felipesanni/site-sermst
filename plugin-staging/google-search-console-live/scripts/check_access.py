from __future__ import annotations

import argparse
import json

from search_console_client import build_search_console_service


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Valida acesso do usuario ao Google Search Console.")
    parser.add_argument(
        "--site-url",
        help="Propriedade esperada, por exemplo sc-domain:sermst.com.br ou https://www.sermst.com.br/",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    service = build_search_console_service()
    response = service.sites().list().execute()
    entries = response.get("siteEntry", [])

    site_urls = [entry.get("siteUrl") for entry in entries if entry.get("siteUrl")]
    has_access = args.site_url in site_urls if args.site_url else None

    payload = {
        "status": "ok",
        "site_count": len(site_urls),
        "requested_site": args.site_url,
        "has_access": has_access,
        "sites": site_urls,
    }
    print(json.dumps(payload, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
