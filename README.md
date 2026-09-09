# CHIQUI_78 website v1

Static, dependency-free portfolio for https://chiqui78.es.

## Included
- Professional bilingual EN/ES profile
- Research focus and methodology
- HackerOne and Intigriti links
- Curated security intelligence feed
- Responsible-disclosure section
- Contact identities for the new domain
- `.well-known/security.txt`
- SEO basics, sitemap, robots and favicon

## Before publishing
1. Confirm `francisco@chiqui78.es`, `security@chiqui78.es`, and `research@chiqui78.es` are active.
2. Generate a PGP key locally and replace the PGP placeholder. Never publish the private key.
3. Add public write-ups only after coordinated disclosure permits publication.
4. If you later have a public production Intigriti profile, replace the current PWN profile URL.

## Updating the security reports
Edit `data/reports.js`. The page renders the cards automatically.

## Deployment
This is a static site. Upload the contents of this folder to a web root, or deploy it to a static host and point `chiqui78.es` to it.
