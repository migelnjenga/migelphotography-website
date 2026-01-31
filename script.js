const images = document.querySelectorAll('.gallery img');

window.addEventListener('scroll', () => {
  images.forEach(img => {
    const position = img.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      img.style.opacity = 1;
    }
  });
});
