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

