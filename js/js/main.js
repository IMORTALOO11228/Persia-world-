document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (toggle && nav) toggle.addEventListener("click", () => nav.classList.toggle("open"));

  const categoryGrid = document.getElementById("categoryGrid");
  if (categoryGrid && window.categories) {
    categoryGrid.innerHTML = categories.map((c, i) => `
      <a class="category-card" href="${c.url}">
        <span class="card-number">۰${i+1}</span><span class="category-icon">${c.icon}</span>
        <h3>${c.title}</h3><p>${c.desc}</p><span class="card-arrow">←</span>
      </a>`).join("");
  }

  const timelineList = document.getElementById("timelineList");
  if (timelineList) {
    const search = document.getElementById("timelineSearch");
    const era = document.getElementById("timelineEra");
    const render = () => {
      const q = search.value.trim().toLowerCase();
      const filtered = timelineData.filter(x => (era.value === "all" || x.era === era.value) && (x.name.toLowerCase().includes(q) || x.note.toLowerCase().includes(q)));
      timelineList.innerHTML = filtered.map((x, i) => `
        <article class="timeline-item"><div class="timeline-dot"></div><div class="timeline-card">
          <span class="timeline-date">${x.date}</span><h3>${x.name}</h3><p>${x.note}</p>
          <a href="dynasties.html" class="small-link">رفتن به بخش حکومت‌ها ←</a>
        </div></article>`).join("") || '<p class="empty-state">موردی با این عبارت پیدا نشد.</p>';
    };
    search.addEventListener("input", render); era.addEventListener("change", render); render();
  }

  const entryGrid = document.getElementById("entryGrid");
  if (entryGrid) {
    const key = entryGrid.dataset.section;
    const search = document.getElementById("itemSearch");
    const count = document.getElementById("itemCount");
    const list = (window.entries && entries[key]) ? entries[key] : [];
    const render = () => {
      const q = search.value.trim().toLowerCase();
      const filtered = list.filter(x => (x.title + " " + x.subtitle + " " + x.desc).toLowerCase().includes(q));
      count.textContent = `${filtered.length} مدخل`;
      entryGrid.innerHTML = filtered.map(x => `
        <article class="entry-card"><span class="entry-tag">${x.tag}</span><h2>${x.title}</h2><strong>${x.subtitle}</strong><p>${x.desc}</p>
        <a href="${x.source}" target="_blank" rel="noopener" class="source-link">بررسی در ویکی‌پدیای فارسی ↗</a></article>
      `).join("") || '<p class="empty-state">هنوز مدخلی در این بخش ثبت نشده است؛ این قسمت در مرحله‌ی پژوهش تکمیل می‌شود.</p>';
    };
    search.addEventListener("input", render); render();
  }
});
