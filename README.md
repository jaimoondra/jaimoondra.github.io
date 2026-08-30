# Quarto prototype site

A prototype academic website with LaTeX math (KaTeX), an interactive
Observable JS blog post, and a professional theme — built to publish free on
GitHub Pages.

## Preview locally

1. Install Quarto: https://quarto.org/docs/get-started/ (free, one installer;
   on macOS: `brew install quarto`)
2. From this folder run:

   ```
   quarto preview
   ```

   This opens the site in your browser with live reload as you edit.

## Publish to GitHub Pages (free)

Publishing is automatic. Every push to `main` runs the GitHub Actions
workflow in `.github/workflows/publish.yml`, which installs Quarto, runs
`quarto render`, and deploys the resulting `_site/` folder to
https://jaimoondra.github.io. Rendered HTML is never committed — `_site/`
is in `.gitignore`.

One-time setup (already done if the site is live): in the GitHub repo go to
**Settings → Pages → Build and deployment** and set **Source** to
**GitHub Actions**.

To check on a deploy, open the **Actions** tab and look for the
"Publish site" run. To redeploy without changing anything, open that
workflow and use **Run workflow**.

The workflow pins the Quarto version (`version:` under "Set up Quarto").
When you upgrade Quarto locally, update that line to match so the site
renders the same way in CI as in `quarto preview`.

## Where things live

- `_quarto.yml` — site config: navbar, theme, math renderer (KaTeX)
- `.github/workflows/publish.yml` — the auto-build-and-deploy workflow
- `assets/custom.scss` — your custom styling (colors, fonts, widget boxes)
- `index.qmd`, `publications.qmd`, `cv.qmd` — pages (Markdown + LaTeX)
- `blog.qmd` — auto-generated listing of everything in `posts/`
- `posts/interactive-demo/index.qmd` — the interactive post; the sliders and
  live plot are the `{ojs}` code blocks inside it

## Publication topic tags

On `publications.qmd`, topic tags are clickable filters. Each paper's tag line
is written as bracketed spans:

```
<br>[Discrete Optimization]{.pub-tag} [Algorithmic Fairness]{.pub-tag}
```

Spell a tag exactly as it appears in the `**Topics:**` bar at the top of the
page — matching is by tag text. To add a brand-new topic, add it to that bar
too. The filtering (and the `?topic=...` URL, so a filtered view can be
shared) is done by `assets/pub-filter.js`; pill styling is at the bottom of
`assets/custom.scss`. Counts next to each topic are computed automatically.

## Adding a new interactive post

Copy `posts/interactive-demo/` to a new folder, edit the `.qmd`, and re-render.
Anything you can compute in a few lines of JavaScript can become a
slider-driven figure. Observable JS docs: https://quarto.org/docs/interactive/ojs/
