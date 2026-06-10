from __future__ import annotations

import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
VENDOR_DIR = SCRIPT_DIR / "vendor"
if VENDOR_DIR.exists():
    sys.path.insert(0, str(VENDOR_DIR))

from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build


SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]
TOKEN_PATH = SCRIPT_DIR / "token.json"


def load_credentials() -> Credentials:
    if not TOKEN_PATH.exists():
        raise FileNotFoundError(
            f"Arquivo nao encontrado: {TOKEN_PATH}. "
            "Execute auth_search_console.py antes de consultar dados."
        )

    creds = Credentials.from_authorized_user_file(str(TOKEN_PATH), SCOPES)
    if not creds.valid:
        raise RuntimeError(
            "token.json esta ausente, expirado ou sem refresh valido. "
            "Execute auth_search_console.py novamente."
        )
    return creds


def build_search_console_service():
    creds = load_credentials()
    return build("searchconsole", "v1", credentials=creds, cache_discovery=False)
