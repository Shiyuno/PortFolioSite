const filterButtons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
filterButtons.forEach((button) => button.addEventListener('click', () => {
  filterButtons.forEach((item) => { item.classList.remove('active'); item.setAttribute('aria-pressed', 'false'); });
  button.classList.add('active'); button.setAttribute('aria-pressed', 'true');
  const filter = button.dataset.filter;
  cards.forEach((card) => { card.hidden = filter !== 'all' && !card.dataset.category.split(' ').includes(filter); });
}));
