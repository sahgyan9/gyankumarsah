// Hamburger menu toggle — iOS Safari compatible
const burger = document.getElementById('nav-burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
  function toggleMenu(e) {
    // preventDefault stops iOS from firing a ghost click after touchend
    e.preventDefault();
    burger.classList.toggle('is-open');
    navLinks.classList.toggle('is-open');
  }

  function closeMenu() {
    burger.classList.remove('is-open');
    navLinks.classList.remove('is-open');
  }

  // touchend handles iPhone; click handles desktop
  burger.addEventListener('touchend', toggleMenu, { passive: false });
  burger.addEventListener('click', toggleMenu);

  // Close when a nav link is tapped/clicked
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('touchend', closeMenu);
    a.addEventListener('click', closeMenu);
  });

  // Close when tapping/clicking outside the nav on iOS and desktop
  document.addEventListener('touchend', (e) => {
    if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
      closeMenu();
    }
  });
  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
      closeMenu();
    }
  });
}
