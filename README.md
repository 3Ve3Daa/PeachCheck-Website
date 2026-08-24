# PeachCheck Website

Static website for [PeachCheck](https://github.com/PeachMine/PeachCheck) — Windows & Minecraft Forensic Scanner.

## Deploy to GitHub Pages

1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` / `master`
4. Folder: `/website`
5. Save

The site will be available at `https://<username>.github.io/<repo>/`

## Local Development

```powershell
# Using Python
cd website
python -m http.server 8080

# Or use the provided script
.\scripts\serve-website.ps1
```

Open http://localhost:8080

## Structure

```
website/
├── index.html              # Homepage
├── download.html           # Download page
├── scanner.html            # Scanner features
├── detection.html          # Detection engine
├── minecraft.html          # Minecraft detection
├── windows.html            # Windows forensics
├── artifacts.html          # Artifacts list
├── changelog.html          # Changelog
├── faq.html                # FAQ
├── privacy.html            # Privacy policy
├── docs.html               # Documentation index
├── docs-*.html             # Documentation pages
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   ├── js/lucide.min.js
│   ├── images/
│   │   ├── Logo.png
│   │   ├── og.svg
│   │   └── favicon.svg
│   └── partials/
│       ├── header.html
│       └── footer.html
├── robots.txt
├── sitemap.xml
└── _config.yml
```

## Features

- Dark premium glassmorphism design
- Responsive layout
- Russian language
- SEO optimized
- No external dependencies (except Google Fonts)
- Lucide icons (self-hosted)

## License

MIT
