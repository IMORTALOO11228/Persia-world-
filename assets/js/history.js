document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('historyGrid');
  if (grid) {
    grid.innerHTML = `
      <div style="color: white; text-align: center; padding: 50px; width: 100%;">
        <h2 style="color: gold;">تست موفق بود! فایل جاوااسکریپت لود شد.</h2>
      </div>
    `;
  } else {
    alert("خطا: تگ historyGrid در فایل HTML پیدا نشد!");
  }
});
