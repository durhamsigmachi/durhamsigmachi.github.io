//old code too scared to delete that marcus made
/*let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
} */

  let slideIndex = 1;
  let autoSlideTimer = null;
  
  function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
  
    // Handle out-of-bounds
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
  
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    // Deactivate all dots
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    // Show current slide
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
  
  function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
    restartAutoSlide();
  }
  
  function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
    restartAutoSlide();
  }
  
  function autoSlide() {
    slideIndex++;
    showSlides(slideIndex);
    autoSlideTimer = setTimeout(autoSlide, 5000); // Set up next auto-advance
  }
  
  function restartAutoSlide() {
    clearTimeout(autoSlideTimer); // Stop any existing timer
    autoSlideTimer = setTimeout(autoSlide, 5000); // Restart fresh
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);
    autoSlide(); // Start autoplay
  });
  