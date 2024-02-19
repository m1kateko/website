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

// Filteing projects
document.addEventListener('DOMContentLoaded', function() {
  const filter = document.getElementById('filter');
  const projects = document.querySelectorAll('.project');

  filter.addEventListener('change', function() {
    const selectedFilter = filter.value;

    projects.forEach(function(project) {
      if (selectedFilter === 'all' || project.classList.contains(selectedFilter)) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});

document.getElementById("myButton").onclick = function(){
  var letters = /^[A-Za-z]+$/;   

  let existingStudents = ['SNDMIK001', 'SNDMIK002', 'SNDMIK003'];

  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = "";

  let firstName = "";
  let lastName = "";    

  firstName = document.getElementById("firstName").value
  lastName = document.getElementById("lastName").value + "XXX";
  
  let num = 1

  for (let i = 0; i < lastName.length; i++) {
    if (!vowels.includes(lastName[i])) {
      result += lastName[i];
    }
  }

  lastName = result;

  num = num.toString().padStart(3, '0');
  let testStudentNumber = lastName.toUpperCase().substring(0, 3) + firstName.toUpperCase().substring(0, 3) + num;
  
  while (existingStudents.includes(testStudentNumber)) {
      num = parseInt(num);
      num += 1;
      num = num.toString().padStart(3, '0');
      testStudentNumber = lastName.toUpperCase().substring(0, 3) + firstName.toUpperCase().substring(0, 3) + num;
  }

  num = num.toString().padStart(3, '0');
  let studentNumber = lastName.toUpperCase().substring(0, 3) + firstName.toUpperCase().substring(0, 3) + num;

  if (firstName.match(letters) && lastName.match(letters)) {
      document.getElementById("studentNumberOutput").innerHTML = "Hi " + firstName + ", your student number is: " + studentNumber.bold();
      var modal = document.getElementById("myModal");
      modal.style.display = "block";

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };

      return true;
    } else {
      document.getElementById("studentNumberOutput").innerHTML = "You entered invalid characters, please refresh the page and try again";
      return false;
    }
};
