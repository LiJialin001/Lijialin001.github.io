import { readFileSync, writeFileSync } from "node:fs";

const root = new URL("./", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");
const write = (path, value) => writeFileSync(new URL(path, root), value);
const publications = JSON.parse(read("data/publications.json"));
const results = JSON.parse(read("data/ot-bridge-results.json"));
const h = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const authors = (paper) => paper.authors.map((name) => name === "Jialin Li" ? `<strong>${h(name)}</strong>` : h(name)).join(", ");

// Only regenerate marked blocks; the surrounding editorial HTML remains hand-editable.
function replaceBlock(html, name, content) {
  const start = `<!-- ${name}:start -->`;
  const end = `<!-- ${name}:end -->`;
  const from = html.indexOf(start);
  const to = html.indexOf(end, from + start.length);
  if (from < 0 || to < 0) throw new Error(`Missing block: ${name}`);
  return html.slice(0, from + start.length) + "\n" + content + "\n      " + html.slice(to);
}

const entries = publications.map((paper) => {
  const url = paper.project || paper.links[0].url;
  const art = paper.image
    ? `<a class="publication-art" href="${h(url)}" aria-label="${h(paper.shortTitle)}"><img src="${h(paper.image)}" alt="${h(paper.imageAlt)}" loading="lazy"></a>`
    : `<a class="publication-art type-art" href="${h(url)}" aria-label="${h(paper.shortTitle)}"><strong>${h(paper.shortTitle)}</strong><span>${h(paper.topic)}</span></a>`;
  const links = paper.links.map((link) => `<a href="${h(link.url)}">${h(link.label)} <span aria-hidden="true">↗</span></a>`).join("");
  return `<article class="publication${paper.project ? " featured" : ""}" id="${h(paper.id)}">
        ${art}
        <div class="publication-body"><div class="pub-meta"><span class="venue">${h(paper.venue)} ${paper.year}</span><span>${h(paper.role)}</span><span>${h(paper.topic)}</span></div>
        <h3><a href="${h(url)}">${h(paper.title)}</a></h3><p class="authors">${authors(paper)}</p><p class="pub-summary">${h(paper.summary)}</p>
        <div class="pub-links">${paper.project ? `<a class="project-link" href="${h(paper.project)}">Project page <span aria-hidden="true">→</span></a>` : ""}${links}</div></div>
      </article>`;
}).join("\n");
write("index.html", replaceBlock(read("index.html"), "publications", entries));

const paper = publications.find((entry) => entry.id === "ot-bridge-editor");
let project = read("projects/ot-bridge-editor/index.html");
project = replaceBlock(project, "paper-head", `<title>${h(paper.shortTitle)} | ${h(paper.venue)} ${paper.year}</title>\n  <meta property="og:title" content="${h(paper.title)}">`);
project = replaceBlock(project, "paper-header", `<p class="eyebrow">${h(paper.venue)} ${paper.year} / Research project</p><h1>${h(paper.shortTitle)}</h1><p class="paper-title">${h(paper.title)}</p><p class="authors">${authors(paper)}</p><p class="affiliation">${h(paper.affiliation)}</p>`);

function formatMetric(values) {
  return `${values[0].toFixed(3)} <span class="std">± ${values[1].toFixed(3)}</span>`;
}
const panels = Object.entries(results.datasets).map(([key, dataset]) => {
  const rows = dataset.rows.map((row, index) => {
    const classes = [row.training === "Real+Synth" ? "highlight-row" : "", index % 3 === 0 ? "group-start" : ""].filter(Boolean).join(" ");
    return `<tr class="${classes}" data-detector="${h(row.detector)}"><th scope="row">${h(row.detector)}</th><td>${h(row.training)}</td><td>${formatMetric(row.map)}</td><td>${formatMetric(row.f1)}</td></tr>`;
  }).join("\n");
  return `<div class="result-panel" data-dataset="${h(key)}"><h3>${h(dataset.label)}</h3><p class="result-description">${h(dataset.description)}</p><div class="table-scroll" tabindex="0" role="region" aria-label="${h(dataset.label)} detection results"><table><caption>${h(dataset.label)} · Downstream stenosis detection · Higher is better</caption><thead><tr><th scope="col">Detector</th><th scope="col">Training data</th><th scope="col">mAP@0.5 ↑</th><th scope="col">F1 ↑</th></tr></thead><tbody>${rows}</tbody></table></div></div>`;
}).join("\n");
project = replaceBlock(project, "results", panels);
project = replaceBlock(project, "citation", `<pre><code id="bibtex">${h(paper.citation)}</code></pre>`);
write("projects/ot-bridge-editor/index.html", project);
const csv = ["dataset,detector,training,map50_mean,map50_std,f1_mean,f1_std"];
for (const dataset of Object.values(results.datasets)) {
  for (const row of dataset.rows) csv.push([dataset.label, row.detector, row.training, ...row.map, ...row.f1].join(","));
}
write("projects/ot-bridge-editor/results.csv", csv.join("\n") + "\n");
console.log(`Built ${publications.length} publication entries and OT-Bridge Editor with ${csv.length - 1} experimental rows.`);
