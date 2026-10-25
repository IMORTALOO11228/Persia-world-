document.addEventListener('DOMContentLoaded', () => {

  const grid = document.getElementById('historyGrid');
  const overlay = document.getElementById('detailOverlay');
  const closeBtn = document.getElementById('detailClose');

  let allEras = [];

  /* بارگذاری داده‌ها از فایل JSON */
  fetch('../data/history.json')
    .then(r => r.json())
    .then(data => {
      allEras = data.eras || [];
      renderGrid();
    })
    .catch(err => {
      console.warn('خطا در بارگذاری تاریخ:', err);
      grid.innerHTML = '<p style="color:var(--text-muted);text-align:center;grid-column:1/-1;padding:60px;">دیتای تاریخی هنوز آماده نیست.</p>';
    });

  /* ساخت کارت‌های تایم‌لاین */
  function renderGrid() {
    grid.innerHTML = '';
    allEras.forEach(era => {
      const card = document.createElement('div');
      card.className = 'history-card';
      card.innerHTML = `
        <img class="card-flag" src="../assets/images/flags/${era.flag}" alt="پرچم ${era.name_fa}" onerror="this.style.display='none'">
        <h3>${era.name_fa}</h3>
        <span class="card-years">${era.years_fa}</span>
        <button class="card-view-btn">مشاهده جزئیات ←</button>
      `;
      
      // با کلیک روی کل کارت، مودال باز می‌شود
      card.addEventListener('click', () => openDetail(era));
      
      grid.appendChild(card);
    });
  }

  /* باز کردن پنجره جزئیات */
  function openDetail(era) {
    document.getElementById('detailName').textContent = era.name_fa;
    document.getElementById('detailYears').textContent = era.years_fa;
    document.getElementById('detailCapital').textContent = 'پایتخت: ' + (era.capital_fa || '—');
    document.getElementById('detailBody').innerHTML = `<p>${era.description_fa}</p>`;

    // پرچم بزرگ
    const flagImg = document.getElementById('detailFlag');
    flagImg.src = `../assets/images/flags/${era.flag}`;
    flagImg.alt = 'پرچم ' + era.name_fa;
    flagImg.style.display = 'block';
    flagImg.onerror = function() { this.style.display = 'none'; };

    // نقشه قلمرو
    const mapImg = document.getElementById('detailMap');
    mapImg.src = `../assets/images/maps/${era.map}`;
    mapImg.alt = 'نقشه قلمرو ' + era.name_fa;
    mapImg.onerror = function() { this.src = ''; this.alt = 'نقشه موجود نیست'; };

    // باز کردن مودال
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden'; // جلوگیری از اسکرول پس‌زمینه
  }

  /* بستن پنجره جزئیات */
  function closeDetail() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeDetail);
  overlay.addEventListener('click', (e) => {
    if (e.target.id === 'detailOverlay') closeDetail();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDetail();
  });

});
