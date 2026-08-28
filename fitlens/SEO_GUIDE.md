# Fit Lens — How to rank on Google

Your target searches: **fit lens, fitlens, fit lens ai, fit lens android download,
fit lens download, free calorie scanner.**

This guide is split into two parts: **(A)** what's already built into the site,
and **(B)** what *you* must do off the page — because ranking on Google is roughly
30% on-page (done) and 70% authority + distribution (not done, can't be faked).

---

## Part A — What the site already has (on-page SEO)

| Item | What it does |
|---|---|
| Keyword-rich `<title>` & meta description | Tells Google you are a free AI calorie scanner for Android |
| `canonical` link | Prevents duplicate-content confusion once you host it |
| `<h1>` brand + `<h2>` sections | Clean heading structure Google can parse |
| **SoftwareApplication** JSON-LD | Rich-result data: app name, category, OS, **price 0**, version, file size |
| **FAQPage** JSON-LD | Eligible for "People also ask" / FAQ rich snippets (uses your exact questions) |
| **Organization + WebSite** JSON-LD | Brand/entity recognition |
| `robots.txt` + `sitemap.xml` | Lets crawlers index you and find your pages |
| `site.webmanifest` + icons | Installable/PWA signals, correct Android home-screen icon |
| Open Graph + Twitter tags + share image | Good previews when shared (drives clicks) |
| Mobile-first, fast, self-contained | Ranks better on mobile (Core Web Vitals) |
| Real keyword content | Features + FAQ sections using "calorie scanner", "download", "android", "free" |

---

## Part B — What you must do (in order of impact)

### 1. Buy a domain and host it (prerequisite — everything depends on this)
SEO does not work on `*.e2b.app` / `github.io` preview URLs. Buy a short,
matchable domain. Recommended, best to worst:
- **fitlens.app** / **fitlens.ai** / **getfitlens.com** / **fitlensapp.com**

Host on Netlify, Vercel, Cloudflare Pages, or GitHub Pages — all free.
Then **find-and-replace `https://fitlens.app`** in these files with your real URL:
`index.html` (canonical, og:url, JSON-LD), `robots.txt`, `sitemap.xml`.

### 2. Add the real APK and real VirusTotal link
- Replace `download/fitlens-1.0.0.apk` with the actual APK.
- Scan it on virustotal.com, then update the SHA-256 hash in:
  the JSON-LD / terminal / footer links / `sitemap`. A real scan = trust signal.

### 3. Google Search Console + Bing Webmaster (free, 10 minutes)
- Go to [search.google.com/search-console](https://search.google.com/search-console),
  add your domain, verify it (DNS TXT record is easiest).
- Submit `sitemap.xml`. Use **URL Inspection → Request Indexing** on your homepage.
- Do the same on [Bing Webmaster Tools](https://www.bing.com/webmasters).
- This is literally how you "tell Google you exist." Without it, you may not
  get crawled for weeks.

### 4. Publish on the Google Play Store (single biggest move for download keywords)
Searches like **"fit lens android download"** and **"fit lens download"** are
dominated by Play Store listings, and the Play Store itself ranks on Google.
A Play listing (even free, $25 one-time developer fee) gives you:
- A high-authority page at `play.google.com/store/apps/details?id=...`
- App-install rich results
- Far more trust than a raw APK download

Link your site ↔ Play listing both ways (put the Play link on the site; put the
website URL in the Play listing). Keep the **direct APK download** too for people
who sideload.

### 5. Win "free calorie scanner" with content (long-tail strategy)
Your brand keywords (fit lens) rank fast once indexed because no one competes
for them. The generic term **"free calorie scanner"** is competitive — win it
with content. Add a small `/blog` and write 4–6 genuinely useful articles:
- "Best free calorie scanner app for Android in 2026" (mention Fit Lens naturally)
- "How to count calories from a photo (no manual logging)"
- "Calorie counting vs. photo scanning: which is more accurate?"
- "How accurate are AI food scanners?"
Each article links back to the Download section. More indexed, keyword-relevant
pages = more surface area on Google.

### 6. Build authority signals (this is what makes you "pop")
Google ranks trusted entities. Create consistent profiles that all link to the site:
- **YouTube**: a 20–40s demo ("Fit Lens — scan any food, see calories instantly").
  YouTube videos rank on Google directly. Link the site in the description.
- **Reddit / X / Instagram / TikTok**: post the demo, link in bio/profile.
- **Product Hunt** launch (free) — strong backlink and launch traffic.
- **AlternativeTo**, **Slant**, **app-directory sites** (e.g. beta list, app directories).
- Answer relevant Reddit/Quora questions ("is there a free app that scans
  calories?") with a helpful answer + your link (don't spam).

### 7. Add analytics (privacy-friendly, no cookie banner needed)
- **Plausible** or **Google Analytics** — track what keywords/pages convert.
- Plausible even shows referrers. Add the one-line script to `<head>`.

### 8. Local/entity signals
Because you're "Fit Lens AI Corporation," consistent Name/URL across every
profile (Play Store, GitHub, YouTube, LinkedIn company page) reinforces the
brand entity so Google associates all those searches with *you*.

---

## Keyword cheat-sheet (use these exact phrases naturally)

| Keyword | Where it's already placed |
|---|---|
| fit lens | title, h1, JSON-LD, body |
| fitlens | keywords meta, download URL, alt text |
| fit lens ai | Organization/SoftwareApplication schema, tagline "AI Calorie Scanner" |
| fit lens android download | download button, FAQ "How do I download…on Android", Play Store listing |
| fit lens download | canonical/URLs, manifest `start_url`, buttons |
| free calorie scanner | meta description, features, title, content/blog |

**Don't** stuff these — Google penalizes that. They're already woven in. Keep
adding them via real content (Step 5) and listings (Step 4/6).

---

## Realistic timeline
- **Days 1–3:** domain + host + Search Console → site gets **crawled**.
- **Weeks 1–3:** brand terms ("fit lens", "fitlens", "fit lens ai") start showing up.
- **Month 1–2:** Play Store listing + a few backlinks → download keywords appear.
- **Month 3+:** content + consistency → "free calorie scanner" starts moving.

Be patient and consistent: a site that updates, earns links, and gets real
installs/engagement climbs. A one-page static site with no backlinks ranks
slowly no matter how clean the on-page SEO is.

---

## Launch checklist
- [ ] Replace `https://fitlens.app` with real domain in index.html, robots.txt, sitemap.xml
- [ ] Upload real APK to `download/`
- [ ] Scan APK on VirusTotal, update SHA-256 hash everywhere
- [ ] Deploy to host (Netlify/Vercel/Cloudflare)
- [ ] Add site to Google Search Console + submit sitemap
- [ ] Publish on Google Play Store and link both ways
- [ ] Post demo video on YouTube + share on social
- [ ] Add analytics
