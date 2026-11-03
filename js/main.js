// =====================================================
//  BOARD DATA — All exam boards, PMT links, topics
// =====================================================
const NOTES_URL = "https://ojezler-git.github.io/savemyexams-helper/";
const NOTES_LABEL = "Complete Study Notes";

const boards = {
  aqa: {
    name: "AQA",
    combined: { title: "AQA Combined Science: Trilogy", code: "8464" },
    triple:   { title: "AQA Separate Sciences", code: "8461 / 8462 / 8463" },
    pmt: "aqa",
    topics: {
      bio: [
        "B1 — Cell Biology",
        "B2 — Organisation",
        "B3 — Infection & Response",
        "B4 — Bioenergetics",
        "B5 — Homeostasis & Response",
        "B6 — Inheritance, Variation & Evolution",
        "B7 — Ecology"
      ],
      chem: [
        "C1 — Atomic Structure & the Periodic Table",
        "C2 — Bonding, Structure & Properties of Matter",
        "C3 — Quantitative Chemistry",
        "C4 — Chemical Changes",
        "C5 — Energy Changes",
        "C6 — The Rate & Extent of Chemical Change",
        "C7 — Organic Chemistry",
        "C8 — Chemical Analysis",
        "C9 — Chemistry of the Atmosphere",
        "C10 — Using Resources"
      ],
      phys: [
        "P1 — Energy",
        "P2 — Electricity",
        "P3 — Particle Model of Matter",
        "P4 — Atomic Structure",
        "P5 — Forces",
        "P6 — Waves",
        "P7 — Magnetism & Electromagnetism"
      ]
    }
  },

  edexcel: {
    name: "Edexcel",
    combined: { title: "Edexcel Combined Science", code: "1SC0" },
    triple:   { title: "Edexcel Separate Sciences", code: "1BI0 / 1CH0 / 1PH0" },
    pmt: "edexcel",
    topics: {
      bio: [
        "B1 — Key Concepts in Biology",
        "B2 — Cells & Control",
        "B3 — Genetics",
        "B4 — Natural Selection & Genetic Modification",
        "B5 — Health, Disease & Development of Medicines",
        "B6 — Plant Structures & Their Functions",
        "B7 — Animal Coordination, Control & Homeostasis",
        "B8 — Exchange & Transport in Animals",
        "B9 — Ecosystems & Material Cycles"
      ],
      chem: [
        "C1 — Key Concepts in Chemistry",
        "C2 — States of Matter & Mixtures",
        "C3 — Chemical Changes",
        "C4 — Extracting Metals & Equilibria",
        "C5 — Separate Chemistry 1",
        "C6 — Groups in the Periodic Table",
        "C7 — Rates of Reaction & Energy Changes",
        "C8 — Fuels & Earth Science",
        "C9 — Separate Chemistry 2"
      ],
      phys: [
        "P1 — Key Concepts of Physics",
        "P2 — Motion & Forces",
        "P3 — Conservation of Energy",
        "P4 — Waves",
        "P5 — Light & the Electromagnetic Spectrum",
        "P6 — Radioactivity",
        "P7 — Astronomy",
        "P8 — Energy & Forces Doing Work",
        "P9 — Electricity & Circuits",
        "P10 — Static Electricity",
        "P11 — Magnetism & the Motor Effect",
        "P12 — Electromagnetic Induction",
        "P13 — Particle Model & Matter",
        "P14 — Forces & Matter",
        "P15 — Energy Transfer"
      ]
    }
  },

  "ocr-a": {
    name: "OCR Gateway A",
    combined: { title: "OCR Gateway A Combined Science", code: "J250" },
    triple:   { title: "OCR Gateway A Separate Sciences", code: "J257 / J258 / J259" },
    pmt: "ocr-a",
    topics: {
      bio: [
        "B1 — Cell Level Systems",
        "B2 — Organism Level Systems",
        "B3 — Community Level Systems",
        "B4 — Genome Level Systems",
        "B5 — Environment Level Systems",
        "B6 — Plant Biology"
      ],
      chem: [
        "C1 — Particles",
        "C2 — Elements, Compounds & Mixtures",
        "C3 — Chemical Reactions",
        "C4 — Predicting & Identifying Reactions",
        "C5 — Monitoring & Controlling Reactions",
        "C6 — Global Challenges",
        "C7 — Organic Chemistry"
      ],
      phys: [
        "P1 — Matter",
        "P2 — Forces",
        "P3 — Electricity",
        "P4 — Magnetism & Magnetic Fields",
        "P5 — Waves in Matter",
        "P6 — Radiation",
        "P7 — Astronomy"
      ]
    }
  },

  "ocr-b": {
    name: "OCR 21st Century B",
    combined: { title: "OCR 21st Century B Combined Science", code: "J260" },
    triple:   { title: "OCR 21st Century B Separate Sciences", code: "J261 / J262 / J263" },
    pmt: "ocr-b",
    topics: {
      bio: [
        "B1 — You and Your Genes",
        "B2 — Keeping Healthy",
        "B3 — Living Together: Food & Ecosystems",
        "B4 — Using Biological Resources",
        "B5 — The Human Body: Staying Alive",
        "B6 — Beyond the Microscope"
      ],
      chem: [
        "C1 — Air & Water",
        "C2 — Chemical Patterns",
        "C3 — Chemicals of the Natural Environment",
        "C4 — Material Choices",
        "C5 — Chemical Analysis",
        "C6 — Making Useful Chemicals",
        "C7 — Ideas About Science"
      ],
      phys: [
        "P1 — Radiation & Life",
        "P2 — Sustainable Energy",
        "P3 — The Earth & Beyond",
        "P4 — Explaining Motion",
        "P5 — Electric Circuits",
        "P6 — Waves & Matter",
        "P7 — Ideas About Science"
      ]
    }
  },

  eduqas: {
    name: "Eduqas / WJEC",
    combined: { title: "Eduqas Combined Science", code: "C850" },
    triple:   { title: "Eduqas Separate Sciences", code: "C840 / C850 / C860" },
    pmt: "eduqas",
    topics: {
      bio: [
        "B1 — Cells",
        "B2 — Organ Systems",
        "B3 — Plant Systems",
        "B4 — Disease & Defence",
        "B5 — Response & Regulation",
        "B6 — Genetics & Evolution",
        "B7 — Ecology"
      ],
      chem: [
        "C1 — Substances & Reactions",
        "C2 — Bonding & Structure",
        "C3 — Quantitative Chemistry",
        "C4 — Chemical Changes & Energy",
        "C5 — Organic Chemistry",
        "C6 — Rates & Equilibrium",
        "C7 — Chemical Analysis",
        "C8 — Earth & Atmosphere"
      ],
      phys: [
        "P1 — Energy & Energy Resources",
        "P2 — Electricity",
        "P3 — Particle Model",
        "P4 — Nuclear Physics",
        "P5 — Forces & Motion",
        "P6 — Waves",
        "P7 — Magnetism & Electromagnetism"
      ]
    }
  },

  ccea: {
    name: "CCEA",
    combined: { title: "CCEA Double Award Science", code: "CCEA DA" },
    triple:   { title: "CCEA Separate Sciences", code: "CCEA" },
    pmt: null, // PMT doesn't have CCEA
    cceaLinks: {
      bio: "https://www.ccea.org.uk/qualifications/gcse/biology-2017",
      chem: "https://www.ccea.org.uk/qualifications/gcse/chemistry-2017",
      phys: "https://www.ccea.org.uk/qualifications/gcse/physics-2017"
    },
    topics: {
      bio: [
        "B1 — Cells",
        "B2 — Organisms",
        "B3 — Genetics & Evolution",
        "B4 — Ecology",
        "B5 — Human Health"
      ],
      chem: [
        "C1 — Structures & Bonding",
        "C2 — Chemical Reactions",
        "C3 — Organic Chemistry",
        "C4 — Quantitative Chemistry",
        "C5 — Earth Chemistry"
      ],
      phys: [
        "P1 — Forces & Energy",
        "P2 — Waves",
        "P3 — Electricity",
        "P4 — Electromagnetism",
        "P5 — Nuclear Physics"
      ]
    }
  }
};


// =====================================================
//  PAGE RENDERER (for board.html)
// =====================================================
function renderBoardPage() {
  const params = new URLSearchParams(window.location.search);
  const type  = params.get("type");   // "combined" or "triple"
  const board = params.get("board");  // "aqa", "edexcel", etc.

  if (!type || !board || !boards[board]) {
    document.getElementById("pageTitle").textContent = "Page Not Found";
    return;
  }

  const data = boards[board];
  const info = data[type];

  // Set page title & back link
  document.title = `${info.title} — GCSE Science Hub`;
  document.getElementById("pageTitle").textContent = info.title;
  const backPage = type === "combined" ? "combined.html" : "triple.html";
  document.getElementById("pageBack").innerHTML = `<a href="${backPage}">← Back to boards</a>`;

  // ---- PAST PAPERS ----
  const papersEl = document.getElementById("papers");
  const isCCEA = board === "ccea";
  const pmtSlug = data.pmt;

  let papersHTML = "";

  if (isCCEA) {
    papersHTML += `<div class="info-box">ℹ️ PMT does not host CCEA papers. Links below go to the <strong>official CCEA website</strong>.</div>`;
  } else {
    papersHTML += `<div class="info-box">ℹ️ Past papers are hosted by <strong><a href="https://www.physicsandmathstutor.com" target="_blank">Physics & Maths Tutor</a></strong>. Combined & Triple students use the same papers — check your spec for which paper numbers you sit.</div>`;
  }

  const subjects = [
    { key: "bio",  icon: "🧬", label: "Biology",   cssClass: "bio"  },
    { key: "chem", icon: "⚗️", label: "Chemistry",  cssClass: "chem" },
    { key: "phys", icon: "⚡", label: "Physics",    cssClass: "phys" }
  ];

  subjects.forEach(sub => {
    let link, linkLabel;
    if (isCCEA) {
      link = data.cceaLinks[sub.key];
      linkLabel = "Open on CCEA ↗";
    } else {
      link = `https://www.physicsandmathstutor.com/past-papers/gcse-${sub.key === "bio" ? "biology" : sub.key === "chem" ? "chemistry" : "physics"}/${pmtSlug}/`;
      linkLabel = "Open on PMT ↗";
    }

    papersHTML += `
      <div class="subject-block">
        <h2 class="subject-heading ${sub.cssClass}">${sub.icon} ${sub.label}</h2>
        <div class="pmt-link-card">
          <div class="pmt-link-info">
            <h3>${data.name} GCSE ${sub.label} Past Papers</h3>
            <p>Higher & Foundation · Mark schemes included</p>
          </div>
          <a href="${link}" target="_blank" class="pmt-btn">${linkLabel}</a>
        </div>
      </div>`;
  });

  papersEl.innerHTML = papersHTML;

  // ---- REVISION NOTES ----
  const notesEl = document.getElementById("notes");
  let notesHTML = `<div class="info-box">ℹ️ Click below to access detailed, specification-aligned revision notes for every topic.</div>`;

  // Big CTA button to the notes site (disguised name)
  notesHTML += `
    <div class="notes-cta">
      <div class="notes-cta-text">
        <h3>📚 ${NOTES_LABEL}</h3>
        <p>Comprehensive, topic-by-topic notes covering the full ${data.name} ${type === "combined" ? "Combined Science" : "Separate Sciences"} specification. Includes diagrams, key definitions, and worked examples.</p>
      </div>
      <a href="${NOTES_URL}" target="_blank" class="pmt-btn notes-btn">Open Full Notes ↗</a>
    </div>`;

  // Topic overview lists per subject
  subjects.forEach(sub => {
    const topics = data.topics[sub.key];
    notesHTML += `
      <div class="subject-block">
        <h2 class="subject-heading ${sub.cssClass}">${sub.icon} ${sub.label} — Topic Checklist</h2>
        <div class="notes-grid">`;
    topics.forEach(topic => {
      notesHTML += `
          <details class="note-card">
            <summary><strong>${topic}</strong></summary>
            <div class="note-body">
              <p class="note-placeholder">✏️ Full notes for this topic are available in the study notes portal above.</p>
              <a href="${NOTES_URL}" target="_blank" class="inline-note-link">View detailed notes →</a>
            </div>
          </details>`;
    });
    notesHTML += `</div></div>`;
  });

  notesEl.innerHTML = notesHTML;
}


// =====================================================
//  DARK / LIGHT MODE
// =====================================================
const toggle = document.getElementById("themeToggle");
const html = document.documentElement;

const saved = localStorage.getItem("theme");
if (saved) {
  html.setAttribute("data-theme", saved);
  if (toggle) toggle.textContent = saved === "dark" ? "☀️" : "🌙";
}

if (toggle) {
  toggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    toggle.textContent = next === "dark" ? "☀️" : "🌙";
  });
}


// =====================================================
//  TABS
// =====================================================
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const container = btn.closest(".container");
    container.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    container.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    const target = document.getElementById(btn.dataset.tab);
    if (target) target.classList.add("active");
  });
});


// =====================================================
//  SEARCH
// 
