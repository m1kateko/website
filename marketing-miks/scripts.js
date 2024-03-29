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

  // Function to toggle the menu
  function toggleMenu() {
    menu.classList.toggle('active');
    menuIconOpen.style.display = menu.classList.contains('active') ? 'none' : 'block';
    menuIconClose.style.display = menu.classList.contains('active') ? 'block' : 'none';
  }

  // Event listener for opening the menu
  menuIconOpen.addEventListener('click', function() {
    toggleMenu();
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

  // Event listener for closing the menu when a menu item is clicked
  const menuItems = document.querySelectorAll('.menu li a');
  menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {
      closeMenu();
    });
  });

  // Event listener for pageshow event (when navigating back to the page)
  window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
      closeMenu();
    }
  });

  // Event listener for popstate event (when navigating back using browser's back button)
  window.addEventListener('popstate', function(event) {
    closeMenu();
  });
});
