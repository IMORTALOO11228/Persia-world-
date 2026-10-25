document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('historyGrid');
  const overlay = document.getElementById('detailOverlay');
  const closeBtn = document.getElementById('detailClose');

  // فقط ۳ سلسله برای تست
  const allEras = [
    {
      id: "elam", name_fa: "عیلام", years_fa: "۳۲۰۰ – ۵۳۹ ق.م", capital_fa: "شوش", flag: "elam.svg", map: "elam.jpg",
      description_fa: "عیلام یکی از کهن‌ترین تمدن‌های فلات ایران بود. <br><br><b>دستاوردها:</b> زیگورات چغازنبیل. <br><br><b>زوال:</b> فتح توسط کوروش بزرگ."
    },
    {
      id: "media", name_fa: "مادها", years_fa: "۶۷۸ – ۵۵۰ ق.م", capital_fa: "هگمتانه", flag: "media.svg", map: "media.jpg",
      description_fa: "مادها اولین حکومت آریایی یکپارچه بودند. <br><br><b>دستاوردها:</b> سرنگونی آشور. <br><br><b>زوال:</b> شکست از کوروش بزرگ."
    },
    {
      id: "achaemenid", name_fa: "هخامنشیان", years_fa: "۵۵۰ – ۳۳۰ ق.م", capital_fa: "تخت جمشید", flag: "achaemenid.svg", map: "achaemenid.jpg",
      description_fa: "بزرگ‌ترین امپراتوری تاریخ ایران. <br><br><b>دستاوردها:</b> منشور کوروش، راه شاهی. <br><br><b>زوال:</b> حمله اسکندر مقدونی."
    }
  ];

  function renderGrid() {
    if(!grid) return;
    grid.innerHTML = '';
    allEras.forEach(era => {
      const card = document.createElement('div');
      card.className = 'history-card';
      card.innerHTML = `
        <img class="card-flag" src="../assets/images/flags/${era.flag}" alt="${era.name_fa}" onerror="this.style.display='none'">
        <h3>${era.name_fa}</h3>
        <span class="card-years">${era.years_fa}</span>
        <button class="card-view-btn">مشاهده جزئیات ←</button>
      `;
      card.addEventListener('click', () => openDetail(era));
      grid.appendChild(card);
    });
  }

  function openDetail(era) {
    document.getElementById('detailName').textContent = era.name_fa;
    document.getElementById('detailYears').textContent = era.years_fa;
    document.getElementById('detailCapital').textContent = 'پایتخت: ' + (era.capital_fa || '—');
    document.getElementById('detailBody').innerHTML = `<p style="line-height: 2.2; text-align: justify;">${era.description_fa}</p>`;

    const flagImg = document.getElementById('detailFlag');
    flagImg.src = `../assets/images/flags/${era.flag}`;
    flagImg.style.display = 'block';
    flagImg.onerror = function() { this.style.display = 'none'; };

    const mapImg = document.getElementById('detailMap');
    mapImg.src = `../assets/images/maps/${era.map}`;
    mapImg.onerror = function() { this.src = ''; };

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden'; 
  }

  function closeDetail() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if(closeBtn) closeBtn.addEventListener('click', closeDetail);
  if(overlay) overlay.addEventListener('click', (e) => {
    if (e.target.id === 'detailOverlay') closeDetail();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDetail();
  });

  renderGrid();
});
