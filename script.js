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

/* ── FALLBACK: JS badge hider (commented out — CSS #lovable-badge approach is active) ──
// The badge is a Shadow DOM web component injected by Lovable's hosting script.
// Uncomment this block if the CSS approach stops working.

const LOVABLE_PATTERNS = ['lovable-badge', 'lovable-tagger', 'gpt-badge', 'lv-badge'];

const hideLovableBadge = () => {
  document.querySelectorAll('*').forEach(el => {
    try {
      const tag = el.tagName.toLowerCase();

      // 1. Hide by custom-element tag name matching known Lovable badge names
      if (LOVABLE_PATTERNS.some(p => tag.includes(p))) {
        el.style.setProperty('display', 'none', 'important');
        if (el.parentElement && el.parentElement !== document.body) {
          el.parentElement.style.setProperty('display', 'none', 'important');
        }
        return;
      }

      // 2. Inject a kill-switch style into any open shadow root that has lovable links
      if (el.shadowRoot) {
        const shadowLink = el.shadowRoot.querySelector('a[href*="lovable"]');
        if (shadowLink) {
          el.style.setProperty('display', 'none', 'important');
          if (el.parentElement && el.parentElement !== document.body) {
            el.parentElement.style.setProperty('display', 'none', 'important');
          }
          if (!el.shadowRoot.querySelector('style[data-hider]')) {
            const s = document.createElement('style');
            s.setAttribute('data-hider', '1');
            s.textContent = '* { display: none !important; }';
            el.shadowRoot.appendChild(s);
          }
          return;
        }
      }

      // 3. Catch plain links/elements referencing the lovable-badge UTM param
      const href = el.getAttribute('href') || '';
      const src  = el.getAttribute('src')  || '';
      if (
        href.includes('utm_source=lovable-badge') ||
        href.includes('lovable.dev/projects') ||
        src.includes('lovable')
      ) {
        el.style.setProperty('display', 'none', 'important');
        let p = el.parentElement;
        while (p && p !== document.body) {
          if (['fixed', 'absolute'].includes(getComputedStyle(p).position)) {
            p.style.setProperty('display', 'none', 'important');
            break;
          }
          p = p.parentElement;
        }
      }

      // 4. Text-content fallback
      const text = (el.innerText || el.textContent || '').trim();
      if (text === 'Edit with Lovable' || text.includes('Edit with \u2764')) {
        el.style.setProperty('display', 'none', 'important');
      }

    } catch (e) {}
  });
};

hideLovableBadge();
document.addEventListener('DOMContentLoaded', () => {
  hideLovableBadge();
  [300, 800, 1500, 3000].forEach(t => setTimeout(hideLovableBadge, t));
});
window.addEventListener('load', () => {
  hideLovableBadge();
  setTimeout(hideLovableBadge, 1000);
});

const badgeObserver = new MutationObserver(hideLovableBadge);
badgeObserver.observe(document.documentElement, { childList: true, subtree: true });
── END FALLBACK ──────────────────────────────────────────────────────────── */
