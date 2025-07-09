function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  
  const showAfterHeight = 250;

  if (window.scrollY > showAfterHeight) {
    scrollToTopBtn.style.display = 'block'; 
  } else {
    scrollToTopBtn.style.display = 'none'; 
  }
});