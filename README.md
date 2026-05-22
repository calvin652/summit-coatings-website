# Summit Coatings LLC — Website

Static marketing website for Summit Coatings LLC, a licensed, bonded, and insured
painting and finishing contractor based in Pocatello, Idaho, serving residential
and commercial customers in the Pocatello area.

**Live domain (when deployed):** summitcoatingsllc.com

## Stack

- Plain HTML, CSS, and vanilla JavaScript. No frameworks, no build step.
- Mobile-responsive with a working mobile menu.
- Industrial / commercial design — navy, graphite, and gold palette.

## Pages

| File             | Purpose                                                  |
|------------------|----------------------------------------------------------|
| `index.html`     | Home — hero, service overview, why us, Idaho climate, CTA |
| `services.html`  | All six services with detail sections and climate notes  |
| `portfolio.html` | Portfolio — Commercial Work + Residential Work          |
| `contact.html`   | Contact — tap-to-call and mailto, business info, areas   |

## Structure

```
summit-coatings-website/
├── index.html
├── services.html
├── portfolio.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
    ├── logo.svg            (replace with real logo)
    ├── README.txt          (full filename list — drop photos here)
    ├── hero-bg.jpg         (you save this)
    ├── service-*.jpg       (one per service — you save these)
    ├── commercial-*.jpg    (Commercial Work portfolio)
    └── residential-*.jpg   (Residential Work portfolio)
```

## Photos

Drop real photos into `/images/` using the exact filenames listed in
`images/README.txt`. The HTML already points to those names — no code edits
needed. Until a file is in place, that slot shows a labeled "PLACEHOLDER" tile.

## Important content rules

The site is built with these constraints in place:

- Credentials are stated as "licensed, bonded, and insured." NOTE: do not take
  the site live until all three are actually true.
- No prices, rates, or dollar figures appear on the site.
- No contact form — all contact is via tap-to-call (`tel:`) and `mailto:` links.
- License placeholder is in the footer of every page, clearly commented, ready
  for the Idaho contractor license number when issued. Search for
  `LICENSE PLACEHOLDER` in the HTML.

## Local preview

Open `index.html` directly in a browser, or run any static server (e.g.
`python -m http.server` from the project folder).

## Hosting

Hosted on Cloudflare Pages (free). Deployment instructions are in the conversation
where this site was built.
