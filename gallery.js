document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.next-btn');
  const prevButton = document.querySelector('.prev-btn');
  const instaLink = document.getElementById('dynamic-insta-link');

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

    // Update the Instagram link if it exists
    if (instaLink && slides[currentSlideIndex].dataset.link) {
      instaLink.href = slides[currentSlideIndex].dataset.link;
    }
  };

  nextButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlidePosition();
  });

  prevButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
  });
});
