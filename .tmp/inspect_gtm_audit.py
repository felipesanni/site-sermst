from __future__ import annotations

import json
import re
import sys

PLUGIN_SCRIPTS = r"C:\Users\Felipe.Sannino\plugins\google-tag-manager-live\scripts"
sys.path.insert(0, PLUGIN_SCRIPTS)

from gtm_client import build_service  # noqa: E402


ACCOUNT_ID = "6254330191"
CONTAINER_ID = "198036322"
WORKSPACE_ID = "36"
CONTAINER_PATH = f"accounts/{ACCOUNT_ID}/containers/{CONTAINER_ID}"
WORKSPACE_PATH = f"{CONTAINER_PATH}/workspaces/{WORKSPACE_ID}"


def main() -> None:
    service = build_service()
    workspaces = service.accounts().containers().workspaces()

    workspace_tags = workspaces.tags().list(parent=WORKSPACE_PATH).execute().get("tag", [])
    triggers = workspaces.triggers().list(parent=WORKSPACE_PATH).execute().get("trigger", [])
    templates = workspaces.templates().list(parent=WORKSPACE_PATH).execute().get("template", [])
    status = workspaces.getStatus(path=WORKSPACE_PATH).execute()
    live = service.accounts().containers().versions().live(parent=CONTAINER_PATH).execute()
    live_tags = live.get("tag", [])
    live_templates = live.get("customTemplate", [])

    live_by_id = {tag.get("tagId"): tag for tag in live_tags}
    workspace_by_id = {tag.get("tagId"): tag for tag in workspace_tags}

    changed = []
    for tag_id in sorted(set(live_by_id) | set(workspace_by_id), key=lambda value: int(value)):
        before = live_by_id.get(tag_id)
        after = workspace_by_id.get(tag_id)
        if before is None or after is None or before.get("fingerprint") != after.get("fingerprint"):
            changed.append({"tagId": tag_id, "live": before, "workspace": after})

    def summarize_template(template: dict) -> dict:
        data = template.get("templateData", "")
        urls = sorted(set(re.findall(r"https://[^\s'\"\\)]+", data)))
        gallery = template.get("galleryReference", {})
        return {
            "templateId": template.get("templateId"),
            "name": template.get("name"),
            "fingerprint": template.get("fingerprint"),
            "gallery": {
                "host": gallery.get("host"),
                "owner": gallery.get("owner"),
                "repository": gallery.get("repository"),
                "version": gallery.get("version"),
                "galleryTemplateId": gallery.get("galleryTemplateId"),
            },
            "externalUrls": urls,
        }

    workspace_template_summaries = [summarize_template(item) for item in templates]
    live_template_summaries = [summarize_template(item) for item in live_templates]
    live_template_by_id = {item.get("templateId"): item for item in live_template_summaries}
    workspace_template_by_id = {item.get("templateId"): item for item in workspace_template_summaries}
    changed_templates = []
    for template_id in sorted(set(live_template_by_id) | set(workspace_template_by_id)):
        before = live_template_by_id.get(template_id)
        after = workspace_template_by_id.get(template_id)
        if before != after:
            changed_templates.append({"templateId": template_id, "live": before, "workspace": after})

    output = {
        "container": {
            "accountId": ACCOUNT_ID,
            "containerId": CONTAINER_ID,
            "publicId": "GTM-N7NL2D9B",
            "workspaceId": WORKSPACE_ID,
            "liveVersionId": live.get("containerVersionId"),
        },
        "changedTags": changed,
        "changedTemplates": changed_templates,
        "workspaceTemplates": workspace_template_summaries,
        "workspaceStatus": status,
        "tagSummary": [
            {
                "tagId": tag.get("tagId"),
                "name": tag.get("name"),
                "type": tag.get("type"),
                "paused": tag.get("paused"),
                "firingTriggerId": tag.get("firingTriggerId", []),
            }
            for tag in workspace_tags
        ],
        "triggerSummary": [
            {
                "triggerId": trigger.get("triggerId"),
                "name": trigger.get("name"),
                "type": trigger.get("type"),
            }
            for trigger in triggers
        ],
    }
    if "--concise" in sys.argv:
        concise = {
            "container": output["container"],
            "workspaceChangeCount": sum(
                len(status.get(key, []))
                for key in (
                    "workspaceChange",
                    "mergeConflict",
                )
            ),
            "liveTagCount": len(live_tags),
            "liveTagsPaused": [
                tag.get("name") for tag in live_tags if tag.get("paused") is True
            ],
            "liveTemplates": [item.get("name") for item in live_templates],
            "suspiciousTemplateUrls": [
                url
                for item in live_template_summaries
                for url in item.get("externalUrls", [])
                if "capi-automation" in url or "clientParamBuilder" in url
            ],
        }
        print(json.dumps(concise, ensure_ascii=False, indent=2))
        return
    print(json.dumps(output, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
