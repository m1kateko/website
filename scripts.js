const leftContainer = document.getElementById('left-image-container');
const rightContainer = document.getElementById('right-image-container');

leftContainer.addEventListener('mouseover', function() {
  rightContainer.querySelector('.overlay-right').style.opacity = '0.8';
});

leftContainer.addEventListener('mouseout', function() {
  rightContainer.querySelector('.overlay-right').style.opacity = '0';
});

rightContainer.addEventListener('mouseover', function() {
  leftContainer.querySelector('.overlay-left').style.opacity = '0.8';
});

rightContainer.addEventListener('mouseout', function() {
  leftContainer.querySelector('.overlay-left').style.opacity = '0';
});

document.addEventListener('DOMContentLoaded', function() {
  const menuIconOpen = document.querySelector('.menu-open-icon');
  const menuIconClose = document.querySelector('.menu-close-icon');
  const menu = document.querySelector('.menu');

  menuIconOpen.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuIconOpen.style.display = 'none';
    menuIconClose.style.display = 'block';
  });

  menuIconClose.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuIconClose.style.display = 'none';
    menuIconOpen.style.display = 'block';
  });
});

