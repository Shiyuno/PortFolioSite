const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  document.documentElement.classList.add('motion-ready');

  const revealGroups = [
    '.section-head',
    '.work-card',
    '.service-grid article',
    '.conditions',
    '.workflow-tabs',
    '.workflow-panel',
    '.pricing-tabs',
    '.pricing-panel',
    '.about > *',
    '.faq details',
    '.contact > *'
  ];

  const revealItems = [...document.querySelectorAll(revealGroups.join(','))];
  revealItems.forEach((item, index) => {
    item.classList.add('reveal-item');
    item.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });

  revealItems.forEach((item) => observer.observe(item));
}

const header = document.querySelector('.site-header');
const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
