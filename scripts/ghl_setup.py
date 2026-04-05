#!/usr/bin/env python3
"""BrokerScale AI - GHL Setup (GitHub Actions CI/CD)
Env vars: GHL_TOKEN, GHL_LOCATION_ID
"""
import os, sys, json, time, ssl, urllib.request, urllib.error, argparse

LOCATION_ID = os.environ.get("GHL_LOCATION_ID", "hYUddktSCkA5suERzeRD")
API_BASE    = "https://services.leadconnectorhq.com"
TOKEN       = os.environ.get("GHL_TOKEN", "")
if not TOKEN:
    sys.exit("ERROR: GHL_TOKEN not set")

_SSL = ssl.create_default_context()
HEADERS = {
    "Authorization": f"Bearer {TOKEN}",
    "Version":       "2021-07-28",
    "Content-Type":  "application/json",
    "User-Agent":    "Mozilla/5.0 (compatible; GHL-Setup/1.0)",
    "Accept":        "application/json",
}


def api(method, path, body=None):
    url  = f"{API_BASE}{path}"
    data = json.dumps(body).encode() if body else None
    req  = urllib.request.Request(url, data=data, headers=HEADERS, method=method)
    try:
        with urllib.request.urlopen(req, timeout=30, context=_SSL) as r:
            return json.loads(r.read())
    except urllib.error.HTTPError as e:
        print(f"  ERROR {e.code} {method} {path}: {e.read().decode()[:200]}")
        return None


def section(title):
    print(f"\n{'='*60}\n  {title}\n{'='*60}")


PIPELINES = [
    {
        "name": "BrokerScale Lead Pipeline",
        "stages": [
            {"name": "New Lead",        "position": 0},
            {"name": "AI Engaged",      "position": 1},
            {"name": "AI Qualified",    "position": 2},
            {"name": "Agent Follow-Up", "position": 3},
            {"name": "Appointment Set", "position": 4},
            {"name": "Showing",         "position": 5},
            {"name": "Under Contract",  "position": 6},
            {"name": "Closed Won",      "position": 7},
            {"name": "Closed Lost",     "position": 8},
            {"name": "Referral",        "position": 9},
        ],
    },
    {
        "name": "Seller Leads Pipeline",
        "stages": [
            {"name": "New Seller Lead",      "position": 0},
            {"name": "CMA Requested",        "position": 1},
            {"name": "Listing Appointment",  "position": 2},
            {"name": "Listed",               "position": 3},
            {"name": "Under Contract",       "position": 4},
            {"name": "Closed",               "position": 5},
            {"name": "Referral",             "position": 6},
        ],
    },
    {
        "name": "Past Clients Pipeline",
        "stages": [
            {"name": "Past Client",           "position": 0},
            {"name": "Re-Engaged",            "position": 1},
            {"name": "Referral Opportunity",  "position": 2},
            {"name": "Active",                "position": 3},
            {"name": "Closed",                "position": 4},
        ],
    },
]

SMS_TEMPLATES = [
    {
        "name":    "Speed-to-Lead Initial Contact",
        "message": "Hi {{contact.first_name}}! Thanks for reaching out to BrokerScale AI. "
                   "Are you looking to buy, sell, or invest? Reply YES to get started!",
    },
    {
        "name":    "AI Follow-Up Day 1",
        "message": "Hi {{contact.first_name}}, following up from BrokerScale AI. "
                   "Still interested in real estate? I can match you with perfect properties. Reply YES!",
    },
    {
        "name":    "Appointment Confirmation",
        "message": "Confirmed! Your appointment with {{user.first_name}} is set. "
                   "Reply CONFIRM to lock it in or RESCHEDULE if needed.",
    },
    {
        "name":    "Review Request",
        "message": "Hi {{contact.first_name}}! We loved working with you. "
                   "Could you leave a quick review? {{review_link}}",
    },
    {
        "name":    "Human Escalation Alert",
        "message": "Hi {{contact.first_name}}, connecting you with one of our expert agents now. "
                   "They will reach out within 15 minutes!",
    },
]


def create_pipelines():
    section("Creating Pipelines (3)")
    for p in PIPELINES:
        print(f"  {p['name']}")
        payload = {"name": p["name"], "locationId": LOCATION_ID, "stages": p["stages"]}
        r = api("POST", "/opportunities/pipelines", payload)
        if r:
            pid = r.get("id") or (r.get("pipeline") or {}).get("id")
            if pid:
                print(f"    [OK] id={pid}")
            else:
                print(f"    Response: {str(r)[:100]}")
        time.sleep(0.5)


def create_sms_templates():
    section("Creating SMS Templates (5)")
    for t in SMS_TEMPLATES:
        print(f"  {t['name']}")
        payload = {
            "name":       t["name"],
            "type":       "sms",
            "message":    t["message"],
            "locationId": LOCATION_ID,
        }
        # Try primary endpoint, then fallback
        r = api("POST", "/conversations/messages/templates", payload)
        if not r or not r.get("id"):
            r = api("POST", f"/locations/{LOCATION_ID}/sms-templates", payload)
        if r and r.get("id"):
            print(f"    [OK] id={r['id']}")
        elif r:
            print(f"    Response: {str(r)[:80]}")
        time.sleep(0.3)


def verify():
    section("Verification")
    checks = [
        ("Custom Fields", f"/locations/{LOCATION_ID}/customFields", "customFields"),
        ("Tags",          f"/locations/{LOCATION_ID}/tags",          "tags"),
        ("Pipelines",     f"/opportunities/pipelines?locationId={LOCATION_ID}", "pipelines"),
    ]
    for label, path, key in checks:
        r = api("GET", path)
        n = len(r.get(key, [])) if r else 0
        print(f"  {'[OK]' if n else '[EMPTY]'} {label}: {n}")


def main():
    parser = argparse.ArgumentParser(description="BrokerScale AI GHL Setup")
    parser.add_argument("--step", default="all",
                        choices=["all", "pipelines", "templates", "verify"])
    args = parser.parse_args()

    print(f"BrokerScale AI GHL Setup")
    print(f"  Location : {LOCATION_ID}")
    print(f"  Token    : {TOKEN[:12]}...")
    print(f"  Step     : {args.step}")

    if args.step in ("all", "pipelines"):
        create_pipelines()
    if args.step in ("all", "templates"):
        create_sms_templates()
    if args.step in ("all", "verify"):
        verify()

    print("\n[DONE]")


if __name__ == "__main__":
    main()
