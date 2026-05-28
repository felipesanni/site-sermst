from __future__ import annotations

import argparse
import json

from search_console_client import build_search_console_service


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Consulta desempenho no Google Search Console.")
    parser.add_argument("--site-url", required=True)
    parser.add_argument("--start-date", required=True, help="Formato YYYY-MM-DD")
    parser.add_argument("--end-date", required=True, help="Formato YYYY-MM-DD")
    parser.add_argument(
        "--dimensions",
        default="query",
        help="Lista separada por virgula: query,page,country,device,date",
    )
    parser.add_argument("--row-limit", type=int, default=25)
    parser.add_argument("--search-type", default="web", choices=["web", "image", "video", "news", "discover", "googleNews"])
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    service = build_search_console_service()

    dimensions = [item.strip() for item in args.dimensions.split(",") if item.strip()]
    request = {
        "startDate": args.start_date,
        "endDate": args.end_date,
        "dimensions": dimensions,
        "rowLimit": args.row_limit,
        "searchType": args.search_type,
    }

    response = service.searchanalytics().query(siteUrl=args.site_url, body=request).execute()
    rows = response.get("rows", [])

    formatted_rows = []
    for row in rows:
        formatted_rows.append(
            {
                "keys": row.get("keys", []),
                "clicks": row.get("clicks", 0),
                "impressions": row.get("impressions", 0),
                "ctr": row.get("ctr", 0),
                "position": row.get("position", 0),
            }
        )

    payload = {
        "status": "ok",
        "site_url": args.site_url,
        "start_date": args.start_date,
        "end_date": args.end_date,
        "dimensions": dimensions,
        "row_count": len(formatted_rows),
        "rows": formatted_rows,
    }
    print(json.dumps(payload, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
