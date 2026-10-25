document.addEventListener('DOMContentLoaded', () => {

  const grid = document.getElementById('historyGrid');
  const overlay = document.getElementById('detailOverlay');
  const closeBtn = document.getElementById('detailClose');

  // دیتای ۵ سلسله برای تست، مستقیماً اینجا قرار گرفته تا هیچ خطای لود فایلی رخ ندهد
  const allEras = [
    {
      "id": "elam",
      "name_fa": "عیلام",
      "years_fa": "۳۲۰۰ – ۵۳۹ ق.م",
      "capital_fa": "شوش",
      "flag": "elam.svg",
      "map": "elam.jpg",
      "description_fa": "عیلام یکی از کهن‌ترین و پایدارترین تمدن‌های فلات ایران بود که در جنوب غربی ایران (خوزستان امروزی) شکل گرفت و بیش از دو هزار سال در کنار بین‌النهرین دوام آورد. شهر شوش، پایتخت اصلی آن، به یکی از مهم‌ترین مراکز تمدنی جهان باستان تبدیل شد. عیلامی‌ها خط میخی مخصوص به خود را داشتند و در معماری پیشرفت چشمگیری کردند. شاهکار معماری آنان، زیگورات چغازنبیل است که در حدود ۱۲۵۰ پیش از میلاد به دستور اونتاش گال ساخته شد و از نخستین بناهای مذهبی چندطبقه جهان به شمار می‌رود."
    },
    {
      "id": "media",
      "name_fa": "مادها",
      "years_fa": "۶۷۸ – ۵۵۰ ق.م",
      "capital_fa": "هگمتانه (همدان)",
      "flag": "media.svg",
      "map": "media.jpg",
      "description_fa": "مادها اولین حکومت آریایی یکپارچه در ایران بودند که در غرب و شمال غرب فلات ایران قدرت گرفتند. آنها با اتحاد قبایل مختلف، پادشاهی ماد را بنیان گذاشتند و پایتخت خود را هگمتانه (همدان امروزی) قرار دادند. مادها در اتحاد با بابل، امپراتوری آشور را سرنگون کردند و قلمرو خود را تا آسیای صغیر گسترش دادند. سرانجام در سال ۵۵۰ پیش از میلاد، کوروش بزرگ با شکست آستیاگ (آخرین پادشاه ماد)، حکومت ماد را برچید."
    },
    {
      "id": "achaemenid",
      "name_fa": "هخامنشیان",
      "years_fa": "۵۵۰ – ۳۳۰ ق.م",
      "capital_fa": "پاسارگاد، تخت جمشید، شوش",
      "flag": "achaemenid.svg",
      "map": "achaemenid.jpg",
      "description_fa": "امپراتوری هخامنشی، بزرگ‌ترین و باشکوه‌ترین امپراتوری تاریخ ایران باستان، توسط کوروش بزرگ بنیان گذاشته شد. این امپراتوری در اوج قدرت خود از دره سند در هند تا دریای اژه و مصر گسترده بود. کوروش با فتح بابل در ۵۳۹ ق.م، منشور معروف خود را صادر کرد که به عنوان نخستین اعلامیه حقوق بشر شناخته می‌شود. داریوش بزرگ با ایجاد سیستم ساتراپی، راه شاهی و ضرب سکه، امپراتوری را به یک ماشین اداری بی‌نظیر تبدیل کرد. این امپراتوری سرانجام در سال ۳۳۰ پیش از میلاد توسط اسکندر مقدونی فتح شد."
    },
    {
      "id": "sasanian",
      "name_fa": "ساسانیان",
      "years_fa": "۲۲۴ – ۶۵۱ م",
      "capital_fa": "تیسفون",
      "flag": "sasanian.svg",
      "map": "sasanian.jpg",
      "description_fa": "ساسانیان، آخرین امپراتوری ایران باستان، توسط اردشیر بابکان بنیان گذاشته شد و به مدت بیش از چهار قرن بر ایران و بخش‌های وسیعی از خاورمیانه حکومت کرد. این دوره شاهد شکوفایی هنر، معماری (طاق کسری)، و ادبیات بود. ساسانیان دین زرتشتی را به عنوان دین رسمی ترویج کردند و در برابر امپراتوری روم و سپس بیزانس جنگ‌های طولانی داشتند. شاپور یکم امپراتور والرین روم را اسیر کرد. سرانجام، حملات اعراب مسلمان در سال ۶۵۱ میلادی به فروپاشی این امپراتوری منجر شد."
    },
    {
      "id": "safavid",
      "name_fa": "صفویان",
      "years_fa": "۱۵۰۱ – ۱۷۳۶ م",
      "capital_fa": "تبریز، قزوین، اصفهان",
      "flag": "safavid.svg",
      "map": "safavid.jpg",
      "description_fa": "صفویان، یکی از مهم‌ترین سلسله‌های تاریخ ایران، توسط شاه اسماعیل یکم در سال ۱۵۰۱ میلادی بنیان گذاشته شد. آنها تشیع دوازده‌امامی را به عنوان مذهب رسمی ایران اعلام کردند. شاه عباس یکم (کبیر) پایتخت را به اصفهان منتقل کرد و این شهر را به یکی از زیباترین شهرهای جهان تبدیل کرد (میدان نقش جهان). صفویان در برابر عثمانی‌ها و ازبک‌ها جنگیدند و مرزهای ایران را تثبیت کردند. این سلسله در سال ۱۷۳۶ م توسط نادرشاه افشار سرنگون شد."
    }
  ];

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

    const flagImg = document.getElementById('detailFlag');
    flagImg.src = `../assets/images/flags/${era.flag}`;
    flagImg.alt = 'پرچم ' + era.name_fa;
    flagImg.style.display = 'block';
    flagImg.onerror = function() { this.style.display = 'none'; };

    const mapImg = document.getElementById('detailMap');
    mapImg.src = `../assets/images/maps/${era.map}`;
    mapImg.alt = 'نقشه قلمرو ' + era.name_fa;
    mapImg.onerror = function() { this.src = ''; this.alt = 'نقشه موجود نیست'; };

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden'; 
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

  // اجرای اولیه برای ساخت کارت‌ها
  renderGrid();

});
