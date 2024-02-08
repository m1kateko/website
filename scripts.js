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


//
// Delay the execution of the code to ensure the embedded content is loaded
setTimeout(function() {
  // Select the <a> element using a CSS selector
  var elementToHide = document.querySelector('a[href="https://elfsight.com/instagram-feed-instashow/?utm_source=websites&utm_medium=clients&utm_content=instashow&utm_term=127.0.0.1&utm_campaign=free-widget"][title=""]');

  // Check if the element exists before attempting to hide it
  if (elementToHide) {
    // Hide the element by setting its display property to 'none'
    elementToHide.style.display = 'none !important';
  }
}, 2000); // Adjust the delay time (in milliseconds) as needed

function toggleReadMore() {
  var jobDescription = document.getElementById("job-description");
  var jobList = document.querySelector(".text-box ul");

  if (jobDescription.style.display === "none" || jobDescription.style.display === "") {
    jobDescription.style.display = "block";
    jobList.style.display = "block";
  } else {
    jobDescription.style.display = "none";
    jobList.style.display = "none";
  }
}