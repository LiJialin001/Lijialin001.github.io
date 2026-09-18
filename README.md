# Jialin Li Research Homepage

This is a static GitHub Pages personal research homepage for `LiJialin001.github.io`.

## Build and Deploy

```bash
node build.mjs
# Review and commit the generated HTML along with the source changes.
git push origin master
```

After pushing, GitHub Pages should publish the site at:

```text
https://wonderland.plus
```

## Edit Content

- Shared paper titles, authors, venues and links: `data/publications.json`
- Reported OT-Bridge detection results: `data/ot-bridge-results.json`
- Main page and biography: `index.html`
- Project narrative: `projects/ot-bridge-editor/index.html`
- Styles: `styles.css`
- Navigation, figures, experiment filters and citation copy: `script.js`
- Figures and previews: `assets/`

Run `node build.mjs` after editing paper metadata or experiment data. The build
updates only marked HTML blocks and exports `projects/ot-bridge-editor/results.csv`.
Keep editorial changes outside these marked blocks. No dependencies are required.
All pages are pre-rendered HTML; without JavaScript, all result tables and figures
remain readable. Open `index.html` directly for a local preview.

The project page is published at `https://wonderland.plus/projects/ot-bridge-editor/`.
Figures come from the author's manuscripts. The BibTeX block identifies the arXiv
version explicitly; the conference acceptance is separate metadata.

The public page intentionally uses email and academic profile links, but omits phone number for privacy.

This version includes a `CNAME` file for `wonderland.plus`.
