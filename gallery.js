document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel-container');

  carousels.forEach(container => {
    // Scope to direct children so nested carousels (a card that slides between
    // topics, each topic having its own image carousel) don't control each other.
    const track = container.querySelector(':scope > .carousel-track');
    if (!track) return;
    const slides = Array.from(track.children);
    const nextButton = container.querySelector(':scope > .next-btn');
    const prevButton = container.querySelector(':scope > .prev-btn');
    const instaLink = container.parentElement.querySelector('#dynamic-insta-link');

    let currentSlideIndex = 0;

    const updateSlidePosition = () => {
      track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

      // Pause all videos when sliding
      slides.forEach(slide => {
        const video = slide.querySelector('video');
        if (video) {
          video.pause();
        }
      });

      // Update the Instagram link if it exists for this specific card
      if (instaLink && slides[currentSlideIndex].dataset.link) {
        instaLink.href = slides[currentSlideIndex].dataset.link;
      }
    };

    const goNext = () => {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      updateSlidePosition();
    };
    const goPrev = () => {
      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      updateSlidePosition();
    };

    // ── Autoplay ──
    // Every multi-slide carousel auto-advances. Videos get a longer dwell time,
    // and the whole-card (topic) switch is slower than the images inside it.
    const autoplayEnabled = slides.length > 1;
    const isOuterCard = container.classList.contains('card-carousel');
    const hasVideo = slides.some(slide => slide.querySelector('video'));
    const interval = isOuterCard ? 8000 : (hasVideo ? 6000 : 3500);
    let timer = null;
    let hovered = false;
    let videoPlaying = false;

    const stopAutoplay = () => {
      if (timer) { clearInterval(timer); timer = null; }
    };
    const startAutoplay = () => {
      if (!autoplayEnabled) return;
      stopAutoplay();
      timer = setInterval(() => {
        if (!hovered && !videoPlaying && !document.hidden) goNext();
      }, interval);
    };

    if (nextButton) {
      nextButton.addEventListener('click', () => { goNext(); startAutoplay(); });
    }
    if (prevButton) {
      prevButton.addEventListener('click', () => { goPrev(); startAutoplay(); });
    }

    // Pause while hovering (so a viewer can read/look), resume on leave.
    container.addEventListener('mouseenter', () => { hovered = true; });
    container.addEventListener('mouseleave', () => { hovered = false; });

    // Pause while a video inside this carousel is actively playing.
    slides.forEach(slide => {
      const video = slide.querySelector('video');
      if (video) {
        video.addEventListener('play', () => { videoPlaying = true; });
        video.addEventListener('pause', () => { videoPlaying = false; });
        video.addEventListener('ended', () => { videoPlaying = false; });
      }
    });

    startAutoplay();
  });
});
