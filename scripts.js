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

document.addEventListener('DOMContentLoaded', function() {
  fetch('quoteDB.json') // Fetch the JSON file
    .then(response => response.json()) // Parse the JSON
    .then(data => {
      // Get a random index to pick a random quote
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex]; // Get the random quote object

      // Update HTML elements with the random quote and author
      const quoteElement = document.getElementById('quoteItself');
      const authorElement = document.getElementById('quoteAuthor');

      quoteElement.textContent = randomQuote.quote; // Display the random quote
      authorElement.textContent = `- ${randomQuote.quoteAuthor}`; // Display the author
    })
    .catch(error => console.error('Error fetching quotes:', error));
});
