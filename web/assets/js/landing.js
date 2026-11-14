import { cases } from "./cases.js";

const tabs = document.querySelectorAll(".signal-tab");
const fields = {
  index: document.querySelector("#case-index"),
  source: document.querySelector("#case-source"),
  kicker: document.querySelector("#case-kicker"),
  title: document.querySelector("#case-title"),
  description: document.querySelector("#case-description"),
  stat: document.querySelector("#case-stat"),
  statLabel: document.querySelector("#case-stat-label"),
  image: document.querySelector("#case-image"),
  link: document.querySelector("#case-link"),
};

function showCase(name) {
  const selectedCase = cases[name];
  if (!selectedCase) return;

  tabs.forEach((tab) => {
    const active = tab.dataset.case === name;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-pressed", String(active));
  });

  fields.index.textContent = selectedCase.index;
  fields.source.textContent = selectedCase.source;
  fields.kicker.textContent = selectedCase.kicker;
  fields.title.textContent = selectedCase.title;
  fields.description.textContent = selectedCase.description;
  fields.stat.replaceChildren(
    document.createTextNode(`${selectedCase.stat} `),
    Object.assign(document.createElement("small"), { textContent: selectedCase.unit }),
  );
  fields.statLabel.innerHTML = selectedCase.statLabel;
  fields.image.src = selectedCase.image;
  fields.image.alt = selectedCase.alt;
  fields.link.href = selectedCase.link;
  fields.link.firstChild.textContent = `${selectedCase.linkLabel} `;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => showCase(tab.dataset.case));
});
