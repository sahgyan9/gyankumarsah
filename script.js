// Subtle scroll effects — nothing flashy

// Nav shadow on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Fade-in sections as they enter the viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.work-card, .project-row, .about-right p').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Add visible class in CSS-compatible way
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  </style>
`);

// Hide "Edit with Lovable" badge
const hideLovableBadge = () => {
  document.querySelectorAll('a, button, div').forEach(el => {
    if (el.innerText && el.innerText.trim() === 'Edit with Lovable') {
      const target = el.closest('a') || el.closest('button') || el;
      target.style.setProperty('display', 'none', 'important');
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  hideLovableBadge();
  // Check again after a delay in case it's injected asynchronously
  setTimeout(hideLovableBadge, 1000);
  setTimeout(hideLovableBadge, 2500);
});

// Also use a MutationObserver for dynamically injected badges
const badgeObserver = new MutationObserver(hideLovableBadge);
badgeObserver.observe(document.documentElement, { childList: true, subtree: true });
