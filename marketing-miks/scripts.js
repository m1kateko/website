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

