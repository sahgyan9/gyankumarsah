document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel-container');

  carousels.forEach(container => {
    const track = container.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = container.querySelector('.next-btn');
    const prevButton = container.querySelector('.prev-btn');
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

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        updateSlidePosition();
      });
    }

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
      });
    }
  });
});
