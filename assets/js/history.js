alert("فایل جی‌اس لود شد!");

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('historyGrid');
  if(grid) {
      grid.innerHTML = '<h2 style="color:white; text-align:center; padding: 50px;">تست موفق بود! دکمه‌ها میان.</h2>';
  }
});
