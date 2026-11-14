# TerraScope

Climate Guardian is the NASA Space Apps Challenge landing page and satellite-data showcase in
[`web/`](web/). The static site includes interactive flood, vegetation, and dryland views.
[`docs/`](docs/) is the publishable copy for GitHub Pages branch deployment.

## Local preview

```bash
python -m http.server 8000 --directory web
```

Open `http://localhost:8000`. Preview the branch-publishable copy by using `docs` instead of `web`.

## GitHub Pages

In repository settings, choose **Pages > Build and deployment > Source: Deploy from a branch**,
then select branch **main** and folder **/docs**, and save. GitHub Pages publishes the contents
of `docs/` directly; keep it in sync with `web/` when updating the site.