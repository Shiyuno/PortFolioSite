const socialMenus = [...document.querySelectorAll('details.header-socials')];

document.addEventListener('pointerdown', (event) => {
  socialMenus.forEach((menu) => {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  socialMenus.forEach((menu) => {
    if (!menu.open) return;
    menu.open = false;
    menu.querySelector('summary')?.focus();
  });
});
