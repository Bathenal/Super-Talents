// window.onload = function () {
//     // Function to adjust layout on window resize
//     function adjustLayout() {
//       var screenWidth = window.innerWidth;
//       var optionsDiv = document.querySelector('.options');
//       var employerDiv = document.querySelector('.employer');
//       var freelancerDiv = document.querySelector('.freelancer');

//       // Adjust options alignment based on screen width
//       if (screenWidth < 768) {
//         optionsDiv.style.textAlign = 'center';
//       } else {
//         optionsDiv.style.textAlign = 'left';
//       }

//       // Adjust employer and freelancer divs based on screen width
//       if (screenWidth < 992) {
//         employerDiv.style.width = '100%';
//         freelancerDiv.style.width = '100%';
//         employerDiv.style.float = 'none';
//         freelancerDiv.style.float = 'none';
//       } else {
//         employerDiv.style.width = '49.9%';
//         freelancerDiv.style.width = '49.9%';
//         employerDiv.style.float = 'left';
//         freelancerDiv.style.float = 'left';
//       }
//     }

//     // Call adjustLayout on window resize
//     window.addEventListener('resize', adjustLayout);

//     // Initial call to adjustLayout
//     adjustLayout()

// Function to handle form submission

const freelanceInputs = document.querySelectorAll(".freelance-signup input");

const validateFreelanceInputs = ()=>{

}

function handleSubmit(event) {
  event.preventDefault();

  validateFreelanceInputs()

  // Get form values
  const type = document.getElementById("type").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Create an object to store user details
  const userDetails = {
    type: type,
    username: username,
    email: email,
    password: password,
  };

  // Convert the object to a JSON string
  const userDetailsJSON = JSON.stringify(userDetails);

  // Save user details in local storage
  localStorage.setItem(`${type}Details`, userDetailsJSON);

  // Show success message
  alert("Signup successful!");

  // Reset the form
  document.getElementById("signupForm").reset();
}

// // Add event listener to the form for form submission
// document.getElementById("signupForm").addEventListener("submit", handleSubmit);

// document
//   .getElementById("employerSignup")
//   .addEventListener("click", function (event) {
//     const username = document.querySelector('input[name="ename"]').value;
//     const password = document.querySelector('input[name="epassword"]').value;

//     if (!username || !password) {
//       event.preventDefault();
//       alert(
//         "Please enter your username and password to proceed with registration."
//       );
//     }
//   });

// document
//   .getElementById("freelancerSignup")
//   .addEventListener("click", function (event) {
//     const username = document.querySelector('input[name="fname"]').value;
//     const password = document.querySelector('input[name="fpassword"]').value;

//     if (!username || !password) {
//       event.preventDefault();
//       alert(
//         "Please enter your username and password to proceed with registration."
//       );
//     }
//   });
