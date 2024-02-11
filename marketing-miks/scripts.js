document.addEventListener('DOMContentLoaded', function() {
  const menuIconOpen = document.querySelector('.menu-open-icon');
  const menuIconClose = document.querySelector('.menu-close-icon');
  const menu = document.querySelector('.menu');

  // Function to close the menu
  function closeMenu() {
    menu.classList.remove('active');
    menuIconClose.style.display = 'none';
    menuIconOpen.style.display = 'block';
  }

  // Event listener for opening the menu
  menuIconOpen.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuIconOpen.style.display = 'none';
    menuIconClose.style.display = 'block';
  });

  // Event listener for closing the menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnMenuIcon = menuIconOpen.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnMenuIcon) {
      closeMenu();
    }
  });

  // Event listener for closing the menu when scrolling
  document.addEventListener('scroll', function() {
    closeMenu();
  });

  // Event listener for closing the menu when resizing the window
  window.addEventListener('resize', function() {
    closeMenu();
  });
});

// JavaScript for carousel navigation
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i >= index && i < index + 3) { // Display three items at a time
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  console.log("Next slide clicked");
  currentSlide = (currentSlide + 1) % totalSlides;
  console.log("Current slide:", currentSlide);
  showSlide(currentSlide);
}

function prevSlide() {
  console.log("Previous slide clicked");
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  console.log("Current slide:", currentSlide);
  showSlide(currentSlide);
}


// Show the first three slides initially
showSlide(currentSlide);

// Hide navigation arrows if three items are visible on larger screens
function toggleArrows() {
  if (window.matchMedia("(min-width: 1024px)").matches && totalSlides === 3) {
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
  }
}

toggleArrows(); // Call the function initially

window.addEventListener('resize', toggleArrows); // Update arrow visibility on window resize

const carouselContainer = document.querySelector('.carousel-container');
  let touchStartX = 0;
  let touchEndX = 0;
  const swipeThreshold = 100; // Minimum distance to consider as a swipe

  carouselContainer.addEventListener('touchstart', function(event) {
    touchStartX = event.touches[0].clientX;
  });

  carouselContainer.addEventListener('touchmove', function(event) {
    touchEndX = event.touches[0].clientX;
  });

  carouselContainer.addEventListener('touchend', function(event) {
    const deltaX = touchEndX - touchStartX;
    if (deltaX > swipeThreshold) {
      prevSlide();
    } else if (deltaX < -swipeThreshold) {
      nextSlide();
    }
  });