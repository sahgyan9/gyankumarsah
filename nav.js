const burger = document.getElementById('nav-burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
  function toggleMenu(e) {
    e.preventDefault(); // Stop anchor tag from jumping to top
    e.stopPropagation(); // Stop click from reaching document immediately
    burger.classList.toggle('is-open');
    navLinks.classList.toggle('is-open');
  }

  function closeMenu() {
    burger.classList.remove('is-open');
    navLinks.classList.remove('is-open');
  }

  // Modern mobile browsers don't have click delays if viewport meta is set.
  // Using pure 'click' is much more reliable than mixing touchend and click.
  burger.addEventListener('click', toggleMenu);

  // Close when a nav link is clicked
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  // Close when clicking outside the nav
  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
      closeMenu();
    }
  });
}
