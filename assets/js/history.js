document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('historyGrid');
  const overlay = document.getElementById('detailOverlay');
  const closeBtn = document.getElementById('detailClose');

  const allEras = [
    {
      id: "elam", name_fa: "عیلام", years_fa: "۳۲۰۰ – ۵۳۹ ق.م", capital_fa: "شوش", flag: "elam.svg", map: "elam.jpg",
      description_fa: `عیلام یکی از کهن‌ترین تمدن‌های فلات ایران بود.<br><br><b>دستاوردها:</b> زیگورات چغازنبیل، خط میخی.<br><br><b>زوال:</b> فتح توسط کوروش بزرگ.`
    },
    {
      id: "media", name_fa: "مادها", years_fa: "۶۷۸ – ۵۵۰ ق.م", capital_fa: "هگمتانه", flag: "media.svg", map: "media.jpg",
      description_fa: `مادها اولین حکومت آریایی یکپارچه بودند.<br><br><b>دستاوردها:</b> سرنگونی آشور، ساخت کاخ هگمتانه.<br><br><b>زوال:</b> شکست از کوروش بزرگ.`
    },
    {
      id: "achaemenid", name_fa: "هخامنشیان", years_fa: "۵۵۰ – ۳۳۰ ق.م", capital_fa: "تخت جمشید", flag: "achaemenid.svg", map: "achaemenid.jpg",
      description_fa: `بزرگ‌ترین امپراتوری تاریخ ایران.<br><br><b>دستاوردها:</b> منشور کوروش، راه شاهی، سیستم ساتراپی.<br><br><b>زوال:</b> حمله اسکندر مقدونی.`
    },
    {
      id: "seleucid", name_fa: "سلوکیان", years_fa: "۳۳۰ – ۲۴۷ ق.م", capital_fa: "سلوکیه", flag: "seleucid.svg", map: "seleucid.jpg",
      description_fa: `جانشینان اسکندر مقدونی در ایران.<br><br><b>ویژگی:</b> ترویج فرهنگ یونانی (هلنیسم).<br><br><b>زوال:</b> شکست از اشکانیان.`
    },
    {
      id: "parthian", name_fa: "اشکانیان", years_fa: "۲۴۷ ق.م – ۲۲۴ م", capital_fa: "تیسفون", flag: "parthian.svg", map: "parthian.jpg",
      description_fa: `حکومت پنج قرنه ایرانیان.<br><br><b>دستاوردها:</b> شکست رومیان در نبرد حران، رونق جاده ابریشم.<br><br><b>زوال:</b> سرنگونی توسط اردشیر بابکان.`
    },
    {
      id: "sasanian", name_fa: "ساسانیان", years_fa: "۲۲۴ – ۶۵۱ م", capital_fa: "تیسفون", flag: "sasanian.svg", map: "sasanian.jpg",
      description_fa: `آخرین امپراتوری ایران باستان.<br><br><b>دستاوردها:</b> طاق کسری، دانشگاه جندی‌شاپور.<br><br><b>زوال:</b> حملات اعراب مسلمان.`
    },
    {
      id: "rashidun", name_fa: "خلافت راشدین", years_fa: "۶۳۲ – ۶۶۱ م", capital_fa: "مدینه، کوفه", flag: "rashidun.svg", map: "rashidun.jpg",
      description_fa: `اولین نظام حکومتی اسلامی.<br><br><b>رویدادها:</b> نبرد قادسیه و نهاوند و ورود اسلام به ایران.<br><br><b>زوال:</b> شورش‌های داخلی و ظهور امویان.`
    },
    {
      id: "umayyad", name_fa: "خلافت اموی", years_fa: "۶۶۱ – ۷۵۰ م", capital_fa: "دمشق", flag: "umayyad.svg", map: "umayyad.jpg",
      description_fa: `اولین سلسله موروثی خلافت.<br><br><b>سیاست:</b> تبعیض علیه غیرعرب‌ها (موالی).<br><br><b>زوال:</b> قیام ابومسلم خراسانی.`
    },
    {
      id: "abbasid", name_fa: "خلافت عباسی", years_fa: "۷۵۰ – ۱۲۵۸ م", capital_fa: "بغداد", flag: "abbasid.svg", map: "abbasid.jpg",
      description_fa: `دوره شکوفایی علمی و فرهنگی.<br><br><b>دستاوردها:</b> بیت‌الحکمه، ترجمه آثار پهلوی.<br><br><b>زوال:</b> حمله مغول به بغداد.`
    },
    {
      id: "tahirid", name_fa: "طاهریان", years_fa: "۸۲۱ – ۸۷۳ م", capital_fa: "نیشابور", flag: "tahirid.svg", map: "tahirid.jpg",
      description_fa: `اولین سلسله نیمه‌مستقل ایرانی.<br><br><b>دستاوردها:</b> عمران خراسان.<br><br><b>زوال:</b> سرنگونی توسط صفاریان.`
    },
    {
      id: "saffarid", name_fa: "صفاریان", years_fa: "۸۶۱ – ۱۰۰۳ م", capital_fa: "زرنج", flag: "saffarid.svg", map: "saffarid.jpg",
      description_fa: `بنیان‌گذاری توسط یعقوب لیث.<br><br><b>دستاوردها:</b> احیای زبان فارسی.<br><br><b>زوال:</b> به حاشیه رانده شدن توسط سامانیان.`
    },
    {
      id: "samanid", name_fa: "سامانیان", years_fa: "۸۱۹ – ۹۹۹ م", capital_fa: "بخارا", flag: "samanid.svg", map: "samanid.jpg",
      description_fa: `دوره درخشان فرهنگ و ادب فارسی.<br><br><b>دستاوردها:</b> پرورش رودکی، رسمی شدن فارسی دری.<br><br><b>زوال:</b> حمله ترکان قراخانی.`
    },
    {
      id: "alavid", name_fa: "علویان طبرستان", years_fa: "۸۶۴ – ۹۲۸ م", capital_fa: "آمل", flag: "alavid.svg", map: "alavid.jpg",
      description_fa: `اولین حکومت شیعی در ایران.<br><br><b>دستاوردها:</b> گسترش تشیع در شمال ایران.<br><br><b>زوال:</b> سرنگونی توسط سامانیان.`
    },
    {
      id: "ziyarid", name_fa: "زیاریان", years_fa: "۹۳۰ – ۱۰۹۰ م", capital_fa: "گرگان", flag: "ziyarid.svg", map: "ziyarid.jpg",
      description_fa: `حکومت مرداویج زیاری.<br><br><b>ویژگی:</b> حامیان ادب فارسی.<br><br><b>زوال:</b> انقراض توسط سلجوقیان.`
    },
    {
      id: "buyid", name_fa: "آل بویه", years_fa: "۹۳۴ – ۱۰۶۲ م", capital_fa: "شیراز، بغداد", flag: "buyid.svg", map: "buyid.jpg",
      description_fa: `حکومت شیعی دیلمیان.<br><br><b>دستاوردها:</b> تأسیس بیمارستان‌ها و مراکز علمی.<br><br><b>زوال:</b> سرنگونی توسط سلجوقیان.`
    },
    {
      id: "ghaznavid", name_fa: "غزنویان", years_fa: "۹۷۷ – ۱۱۸۶ م", capital_fa: "غزنه", flag: "ghaznavid.svg", map: "ghaznavid.jpg",
      description_fa: `حکومت ترک‌تبار محمود غزنوی.<br><br><b>دستاوردها:</b> گسترش زبان فارسی در هند.<br><br><b>زوال:</b> شکست از غوریان.`
    },
        {
      id: "seljuk", name_fa: "سلجوقیان", years_fa: "۱۰۳۷ – ۱۱۹۴ م", capital_fa: "اصفهان", flag: "seljuk.svg", map: "seljuk.jpg",
      description_fa: `حکومت ترک‌تباران سلجوقی.<br><br><b>دستاوردها:</b> مدارس نظامیه، مسجد جامع اصفهان.<br><br><b>زوال:</b> شکست از خوارزمشاهیان.`
    },
    {
      id: "khwarazmian", name_fa: "خوارزمشاهیان", years_fa: "۱۰۷۷ – ۱۲۳۱ م", capital_fa: "گرگانج", flag: "khwarazmian.svg", map: "khwarazmian.jpg",
      description_fa: `حکومت ترک‌تبار در آسیای مرکزی.<br><br><b>رویدادها:</b> آغاز حمله مغول به ایران.<br><br><b>زوال:</b> شکست از چنگیزخان.`
    },
    {
      id: "ilkhanate", name_fa: "ایلخانان مغول", years_fa: "۱۲۵۶ – ۱۳۳۵ م", capital_fa: "تبریز", flag: "ilkhanate.svg", map: "ilkhanate.jpg",
      description_fa: `حکومت هولاکوخان در ایران.<br><br><b>دستاوردها:</b> رصدخانه مراغه، گنبد سلطانیه.<br><br><b>زوال:</b> فروپاشی پس از مرگ ابوسعید.`
    },
    {
      id: "chobanid", name_fa: "چوپانیان", years_fa: "۱۳۳۵ – ۱۳۵۷ م", capital_fa: "تبریز", flag: "chobanid.svg", map: "chobanid.jpg",
      description_fa: `از امرای مغول پس از ایلخانان.<br><br><b>ویژگی:</b> حکومت محلی در شمال غرب.<br><br><b>زوال:</b> سرنگونی توسط جلایریان.`
    },
    {
      id: "jalayirid", name_fa: "جلایریان", years_fa: "۱۳۳۵ – ۱۴۳۲ م", capital_fa: "بغداد", flag: "jalayirid.svg", map: "jalayirid.jpg",
      description_fa: `سلسله مغول‌تبار در عراق و آذربایجان.<br><br><b>ویژگی:</b> حامیان هنر و ادب.<br><br><b>زوال:</b> حمله تیمور.`
    },
    {
      id: "muzaffarid", name_fa: "مظفریان", years_fa: "۱۳۱۴ – ۱۳۹۳ م", capital_fa: "یزد", flag: "muzaffarid.svg", map: "muzaffarid.jpg",
      description_fa: `سلسله محلی در مرکز ایران.<br><br><b>ویژگی:</b> ساخت مساجد زیبا در یزد.<br><br><b>زوال:</b> سرنگونی توسط تیمور.`
    },
    {
      id: "sarbadar", name_fa: "سربداران", years_fa: "۱۳۳۷ – ۱۳۸۱ م", capital_fa: "سبزوار", flag: "sarbadar.svg", map: "sarbadar.jpg",
      description_fa: `قیام مردمی و شیعی علیه مغولان.<br><br><b>شعار:</b> سر بر دار می‌دهیم اما تن به ذلت نمی‌دهیم.<br><br><b>زوال:</b> سرکوب توسط تیمور.`
    },
    {
      id: "timurid", name_fa: "تیموریان", years_fa: "۱۳۷۰ – ۱۵۰۷ م", capital_fa: "سمرقند", flag: "timurid.svg", map: "timurid.jpg",
      description_fa: `امپراتوری تیمور گورکانی.<br><br><b>دستاوردها:</b> مکتب هنری هرات، رصدخانه سمرقند.<br><br><b>زوال:</b> سرنگونی توسط شیبانیان و صفویان.`
    },
    {
      id: "qaraqoyunlu", name_fa: "قراقویونلو", years_fa: "۱۳۷۴ – ۱۴۶۸ م", capital_fa: "تبریز", flag: "qaraqoyunlu.svg", map: "qaraqoyunlu.jpg",
      description_fa: `اتحادیه قبایل ترکمان.<br><br><b>ویژگی:</b> حامیان شعر فارسی.<br><br><b>زوال:</b> شکست از آق‌قویونلوها.`
    },
    {
      id: "aqqoyunlu", name_fa: "آق‌قویونلو", years_fa: "۱۳۷۸ – ۱۵۰۱ م", capital_fa: "تبریز", flag: "aqqoyunlu.svg", map: "aqqoyunlu.jpg",
      description_fa: `اتحادیه دیگر قبایل ترکمان.<br><br><b>رویدادها:</b> اتحاد اوزون حسن با ونیز علیه عثمانی.<br><br><b>زوال:</b> سرنگونی توسط صفویان.`
    },
    {
      id: "marashian", name_fa: "مرعشیان", years_fa: "۱۳۵۹ – ۱۵۸۲ م", capital_fa: "آمل", flag: "marashian.svg", map: "marashian.jpg",
      description_fa: `سلسله محلی شیعی در مازندران.<br><br><b>ویژگی:</b> مقاومت در برابر تیموریان.<br><br><b>زوال:</b> انقراض توسط صفویان.`
    },
    {
      id: "safavid", name_fa: "صفویان", years_fa: "۱۵۰۱ – ۱۷۳۶ م", capital_fa: "اصفهان", flag: "safavid.svg", map: "safavid.jpg",
      description_fa: `بنیان‌گذاری توسط شاه اسماعیل.<br><br><b>دستاوردها:</b> رسمی شدن تشیع، میدان نقش جهان.<br><br><b>زوال:</b> سرنگونی توسط نادرشاه.`
    },
    {
      id: "afsharid", name_fa: "افشاریان", years_fa: "۱۷۳۶ – ۱۷۹۶ م", capital_fa: "مشهد", flag: "afsharid.svg", map: "afsharid.jpg",
      description_fa: `حکومت نادرشاه افشار.<br><br><b>دستاوردها:</b> فتح دهلی، قدرت نظامی ایران.<br><br><b>زوال:</b> فروپاشی پس از مرگ نادر.`
    },
    {
      id: "zand", name_fa: "زندیان", years_fa: "۱۷۵۱ – ۱۷۹۴ م", capital_fa: "شیراز", flag: "zand.svg", map: "zand.jpg",
      description_fa: `حکومت کریم‌خان زند (وکیل‌الرعایا).<br><br><b>دستاوردها:</b> آرامش، ارگ کریم‌خان و مسجد وکیل.<br><br><b>زوال:</b> سرنگونی توسط قاجار.`
    },
    {
      id: "qajar", name_fa: "قاجاریان", years_fa: "۱۷۸۹ – ۱۹۲۵ م", capital_fa: "تهران", flag: "qajar.svg", map: "qajar.jpg",
      description_fa: `حکومت آقامحمدخان قاجار.<br><br><b>رویدادها:</b> انقلاب مشروطه، جنگ‌های ایران و روس.<br><br><b>زوال:</b> سرنگونی توسط رضاشاه.`
    },
    {
      id: "pahlavi", name_fa: "پهلویان", years_fa: "۱۹۲۵ – ۱۹۷۹ م", capital_fa: "تهران", flag: "pahlavi.svg", map: "pahlavi.jpg",
      description_fa: `دوره نوسازی و مدرن‌سازی ایران.<br><br><b>دستاوردها:</b> راه‌آهن سراسری، دانشگاه تهران، صنعتی شدن.<br><br><b>زوال:</b> انقلاب اسلامی ۱۹۷۹.`
    },
    {
      id: "islamic-republic", name_fa: "جمهوری اسلامی", years_fa: "۱۹۷۹ – امروز", capital_fa: "تهران", flag: "islamic-republic.svg", map: "islamic-republic.jpg",
      description_fa: `نظام سیاسی پس از انقلاب ۱۳۵۷.<br><br><b>رویدادها:</b> جنگ هشت ساله، تحریم‌ها.<br><br><b>پیشرفت‌ها:</b> دستاوردهای علمی و پزشکی.`
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
