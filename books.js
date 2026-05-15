document.addEventListener('DOMContentLoaded', () => {
  const btnPick1 = document.getElementById('btn-pick-1');
  const btnPick2 = document.getElementById('btn-pick-2');
  const bookUntethered = document.getElementById('book-untethered-soul');
  const bookMonk = document.getElementById('book-monk');

  function removeHighlights() {
    bookUntethered.classList.remove('highlighted-book');
    bookMonk.classList.remove('highlighted-book');
  }

  function highlightBook(bookEl) {
    removeHighlights();
    bookEl.classList.add('highlighted-book');
    bookEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  if (btnPick1) {
    btnPick1.addEventListener('click', (e) => {
      e.stopPropagation();
      highlightBook(bookUntethered);
      btnPick1.classList.add('clicked');
      if (btnPick2) {
        btnPick2.classList.remove('hidden');
      }
    });
  }

  if (btnPick2) {
    btnPick2.addEventListener('click', (e) => {
      e.stopPropagation();
      highlightBook(bookMonk);
    });
  }

  // Remove highlight when clicking anywhere else
  document.addEventListener('click', (e) => {
    // If the click is not on the buttons, remove highlights
    if (
      !e.target.closest('#btn-pick-1') && 
      !e.target.closest('#btn-pick-2')
    ) {
      removeHighlights();
    }
  });
});