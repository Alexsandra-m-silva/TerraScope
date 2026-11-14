# TerraScope

TerraScope is an environmental-intelligence project concept for the NASA Space Apps Challenge.
It brings Earth observation and local context together to explore land degradation, a proposed
Food Vulnerability Index, and restoration opportunities. The site also links to research
prototypes for flood change, vegetation trends, and dryland monitoring.

The working static site is in [`web/`](web/); [`docs/`](docs/) is its GitHub Pages copy.

## Local preview

```bash
python -m http.server 8000 --directory web
```

Open `http://localhost:8000`. Preview the branch-publishable copy by using `docs` instead of `web`.

## GitHub Pages

In repository settings, choose **Pages > Build and deployment > Source: Deploy from a branch**,
then select branch **main** and folder **/docs**, and save. GitHub Pages publishes the contents
of `docs/` directly; keep it in sync with `web/` when updating the site.