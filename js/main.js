// ========== DARK / LIGHT MODE ==========
const toggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved preference
const saved = localStorage.getItem('theme');
if (saved) {
  html.setAttribute('data-theme', saved);
  toggle.textContent = saved === 'dark' ? '☀️' : '🌙';
}

toggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  toggle.textContent = next === 'dark' ? '☀️' : '🌙';
});

// ========== TABS ==========
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Deactivate all
    btn.closest('.container').querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.closest('.container').querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    // Activate clicked
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// ========== SEARCH ==========
const searchData = [
  { title: 'AQA Combined Science', url: 'aqa-combined.html', tags: 'aqa combined trilogy biology chemistry physics' },
  { title: 'Edexcel Combined Science', url: '#', tags: 'edexcel pearson combined' },
  { title: 'OCR Gateway Combined', url: '#', tags: 'ocr gateway combined' },
  { title: 'OCR 21st Century Combined', url: '#', tags: 'ocr 21st century combined' },
  { title: 'Eduqas Combined Science', url: '#', tags: 'eduqas wjec combined' },
  { title: 'CCEA Combined Science', url: '#', tags: 'ccea combined double award' },
  { title: 'Cell Biology', url: 'aqa-combined.html#notes', tags: 'cells mitosis meiosis biology' },
  { title: 'Bonding & Structure', url: 'aqa-combined.html#notes', tags: 'ionic covalent metallic chemistry' },
  { title: 'Forces & Motion', url: 'aqa-combined.html#notes', tags: 'forces newton physics' },
  { title: 'Energy', url: 'aqa-combined.html#notes', tags: 'energy kinetic potential physics' },
  // Add more entries as you build pages!
];

const searchBar = document.getElementById('searchBar');
const searchResults = document.getElementById('searchResults');

if (searchBar) {
  searchBar.addEventListener('input', () => {
    const q = searchBar.value.toLowerCase().trim();
    if (q.length < 2) { searchResults.style.display = 'none'; return; }

    const matches = searchData.filter(item =>
      item.title.toLowerCase().includes(q) || item.tags.includes(q)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = '<a href="#">No results found</a>';
    } else {
      searchResults.innerHTML = matches
        .map(m => `<a href="${m.url}">${m.title}</a>`)
        .join('');
    }
    searchResults.style.display = 'block';
  });

  // Close on click outside
  document.addEventListener('click', e => {
    if (!e.target.closest('.search-container')) searchResults.style.display = 'none';
  });
}
