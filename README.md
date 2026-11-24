# Harborpoint Bank: consent and privacy test site

A small, fictional bank website for testing Securiti Cookie Consent, Privacy Notice and
DSR forms in a demo tenant. It is plain HTML, so it hosts for free on any static host.

## What is on it

| Page | Use it for |
|---|---|
| `index.html` | Home page with a third-party video embed (third-party cookies) |
| `accounts.html` | Second page with a third-party map embed (a second vendor) |
| `privacy.html` | Placeholder for the Securiti privacy notice (embed or hosted link) |
| `privacy-rights.html` | Placeholder for the Securiti DSR forms (Domestic, International, ADMT) |
| `cookies.html` | Cookie inspector: shows which scripts ran, every cookie, local/session storage and the GPC signal |

Every page loads three demo scripts, one per category, so blocking is easy to show:

| Script | Category to assign in Securiti | Sets |
|---|---|---|
| `js/site.js` | Strictly necessary | `hp_demo_essential` |
| `js/functional-demo.js` | Functional / preferences | `hp_demo_lang`, localStorage `hp_demo_theme` |
| `js/analytics-demo.js` | Analytics / performance | `hp_demo_vid`, `hp_demo_session`, sessionStorage `hp_demo_pageviews` |
| `js/advertising-demo.js` | Advertising / targeting | `hp_demo_ad_campaign`, `hp_demo_ad_audience`, localStorage `hp_demo_ad_seen`, a 1x1 pixel |

## 1. Host it for free (pick one)

**Netlify Drop (no Git needed, about 2 minutes)**
1. Create a free Netlify account (so the site does not expire).
2. Go to https://app.netlify.com/drop and drag this whole folder onto the page.
3. You get an address like `https://<random-name>.netlify.app`. Rename it in Site settings if you like.
4. To update the site later, open the site, go to Deploys and drag the folder in again.

**GitHub Pages**
1. Create a public repository and upload these files (Add file, Upload files).
2. Settings, Pages, Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. The site appears at `https://<your-user>.github.io/<repo>/`.

**Cloudflare Pages**
1. Workers & Pages, Create, Pages, "Upload assets".
2. Upload this folder. The site appears at `https://<project>.pages.dev`.

Tip: to demo multiple domains (Wells Fargo has 8 to 10), deploy the same folder twice as two
sites, for example `harborpoint-demo` and `harborpoint-cards`, and add both in Securiti.

After hosting, replace `YOUR-SITE-ADDRESS` in `robots.txt` and `sitemap.xml` with your address.
The site must be public: Securiti's scanner reaches it over the internet.

## 2. Add the banner

1. In the demo tenant, add the site address as a domain and run a scan.
2. Categorize the `hp_demo_*` cookies as in the table above, publish, and copy the consent code.
3. In each of the five `.html` files, paste the code between the
   `SECURITI CONSENT CODE: START` and `END` comments at the top of `<head>`
   (auto-blocking script first, then the banner script). Re-upload the folder.

## 3. Add the privacy notice and DSR forms

- `privacy.html`: paste the notice embed code at `PRIVACY NOTICE EMBED`, or put the hosted link on the button.
- `privacy-rights.html`: paste a DSR form embed at `DSR FORM EMBED`, or put each form's hosted link on its button.

## 4. Test script (5 minutes)

1. Open the site in a private window. The banner appears; nothing but `hp_demo_essential` is set yet (opt-in regions).
2. Open **Cookie inspector**: Functional, Analytics and Advertising show "Blocked / not run".
3. Accept all: they show "Ran" and their cookies appear.
4. Clear with the button, reload, choose Analytics only: only the analytics script runs.
5. Test GPC: use a browser that sends it (for example Firefox with GPC turned on, Brave, or the
   OptMeowt extension). The inspector shows `globalPrivacyControl = true`.
6. Test regions: use the banner preview or location settings in the tenant (or a VPN) to show the EU opt-in and US opt-out experiences.

The site is marked `noindex` so search engines do not list it.
