const workflowTabs = [...document.querySelectorAll('[data-workflow]')];
const workflowPanels = [...document.querySelectorAll('[data-workflow-panel]')];

function selectWorkflow(selectedTab) {
  const target = selectedTab.dataset.workflow;
  workflowTabs.forEach((tab) => {
    const active = tab === selectedTab;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  workflowPanels.forEach((panel) => {
    panel.hidden = panel.dataset.workflowPanel !== target;
  });
}

workflowTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectWorkflow(tab));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === 'ArrowRight'
      ? (index + 1) % workflowTabs.length
      : (index - 1 + workflowTabs.length) % workflowTabs.length;
    workflowTabs[nextIndex].focus();
    selectWorkflow(workflowTabs[nextIndex]);
  });
});

const pricingTabs = [...document.querySelectorAll('[data-pricing]')];
const pricingPanels = [...document.querySelectorAll('[data-pricing-panel]')];

function selectPricing(selectedTab) {
  const target = selectedTab.dataset.pricing;
  pricingTabs.forEach((tab) => {
    const active = tab === selectedTab;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  pricingPanels.forEach((panel) => {
    panel.hidden = panel.dataset.pricingPanel !== target;
  });
}

pricingTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectPricing(tab));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === 'ArrowRight'
      ? (index + 1) % pricingTabs.length
      : (index - 1 + pricingTabs.length) % pricingTabs.length;
    pricingTabs[nextIndex].focus();
    selectPricing(pricingTabs[nextIndex]);
  });
});
