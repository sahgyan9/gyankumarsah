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

// Dynamic quotes switcher
const heroQuoteEl = document.querySelector('.hero-quote');
const quoteTextEl = heroQuoteEl ? heroQuoteEl.querySelector('.quote-text') : null;
const quoteAuthorEl = heroQuoteEl ? heroQuoteEl.querySelector('.quote-author') : null;

if (quoteTextEl && quoteAuthorEl) {
  const quotes = [
    {
      text: '"Believe in Power of Compounding"',
      author: '— Gyan',
      typewriter: true
    },
    {
      text: '"When you want something, all the universe conspires in helping you to achieve it."',
      author: '— Paulo Coelho, The Alchemist',
      typewriter: true
    }
  ];

  let currentIndex = 0;

  function rotateQuote() {
    quoteTextEl.classList.add('fade-out');
    quoteAuthorEl.classList.add('fade-out');

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % quotes.length;
      const currentQuote = quotes[currentIndex];

      if (currentQuote.typewriter) {
        quoteTextEl.textContent = '';
        quoteAuthorEl.textContent = '';
        quoteTextEl.classList.remove('fade-out');

        let charIndex = 0;
        function type() {
          if (charIndex < currentQuote.text.length) {
            quoteTextEl.textContent += currentQuote.text.charAt(charIndex);
            charIndex++;
            setTimeout(type, 50); // 50ms per character typing speed
          } else {
            // Typing finished, fade in the author
            quoteAuthorEl.textContent = currentQuote.author;
            quoteAuthorEl.classList.remove('fade-out');
            // Wait 3 seconds before rotating to the next quote
            setTimeout(rotateQuote, 3000);
          }
        }
        type();
      } else {
        quoteTextEl.textContent = currentQuote.text;
        quoteAuthorEl.textContent = currentQuote.author;
        
        quoteTextEl.classList.remove('fade-out');
        quoteAuthorEl.classList.remove('fade-out');
        
        // Wait 6 seconds before rotating to the next quote
        setTimeout(rotateQuote, 3000);
      }
    }, 500); // match CSS fade-out duration (0.5s)
  }

  // Start the rotation loop after 6 seconds
  setTimeout(rotateQuote, 3000);
}

// Scroll-triggered dynamic quotes
const scrollQuotes = document.querySelectorAll('.scroll-quote');

if (scrollQuotes.length > 0) {
  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const quoteEl = entry.target;
        const textEl = quoteEl.querySelector('.quote-text');
        const authorEl = quoteEl.querySelector('.quote-author');

        if (textEl) {
          const fullText = textEl.textContent.trim();
          textEl.textContent = '';
          textEl.style.opacity = '1';
          
          if (authorEl) {
            authorEl.style.opacity = '0';
          }

          let charIndex = 0;
          function type() {
            if (charIndex < fullText.length) {
              textEl.textContent += fullText.charAt(charIndex);
              charIndex++;
              setTimeout(type, 40); // 40ms per character typing speed (slightly faster for longer quotes)
            } else if (authorEl) {
              authorEl.style.opacity = '1';
            }
          }
          type();
        }

        // Unobserve after animating once
        observer.unobserve(quoteEl);
      }
    });
  }, { threshold: 0.15 });

  scrollQuotes.forEach(quote => {
    // Initial prep: hide text and author before typing starts
    const textEl = quote.querySelector('.quote-text');
    const authorEl = quote.querySelector('.quote-author');
    if (textEl) {
      textEl.style.opacity = '0';
    }
    if (authorEl) {
      authorEl.style.opacity = '0';
    }
    scrollObserver.observe(quote);
  });
}
