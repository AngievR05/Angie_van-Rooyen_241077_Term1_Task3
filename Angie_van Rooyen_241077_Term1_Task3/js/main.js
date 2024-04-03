let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function moveSlide(direction) {
  const newIndex = currentIndex + direction;
  if (newIndex >= 0 && newIndex < slides.length) {
    currentIndex = newIndex;
    const offset = -currentIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
  }
}
