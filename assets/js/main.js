document.addEventListener('DOMContentLoaded', () => {

  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
    mainNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mainNav.classList.remove('open'));
    });
  }

  const langToggle = document.querySelector('.lang-toggle');
  let currentLang = localStorage.getItem('pw-lang') || 'fa';

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-fa]').forEach(el => {
      const val = el.getAttribute(`data-${lang}`);
      if (val) el.textContent = val;
    });
    if (langToggle) langToggle.textContent = lang === 'fa' ? 'EN' : 'FA';
    localStorage.setItem('pw-lang', lang);
    currentLang = lang;
  }
  
  if (currentLang === 'en') applyLang('en');
  
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      applyLang(currentLang === 'fa' ? 'en' : 'fa');
    });
  }

  // این بخش باعث میشه کارت‌های صفحه اصلی (reveal) دیده بشن
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }
});
