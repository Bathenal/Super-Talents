document.addEventListener("DOMContentLoaded", function () {
  const employerLoginForm = document.getElementById("employerLoginForm");
  const freelancerLoginForm = document.getElementById("freelancerLoginForm");
  const employerLoginBtn = document.getElementById("employer-login-btn");
  const freelancerLoginBtn = document.getElementById("freelancer-login-btn");

  // Add event listener for employer login button
  employerLoginBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    const ename = employerLoginForm.querySelector('input[name="ename"]').value;
    const epassword = employerLoginForm.querySelector(
      'input[name="epassword"]'
    ).value;

    // Check if username and password are valid (validate against local storage)
    const isValid = validateEmployerLogin(ename, epassword);

    if (isValid) {
      // Redirect to employer homepage
      window.location.href = "employerHome.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });

  // Add event listener for freelancer login button
  freelancerLoginBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    const fname = freelancerLoginForm.querySelector(
      'input[name="fname"]'
    ).value;
    const fpassword = freelancerLoginForm.querySelector(
      'input[name="fpassword"]'
    ).value;

    // Check if username and password are valid (validate against local storage)
    const isValid = validateFreelancerLogin(fname, fpassword);

    if (isValid) {
      // Redirect to freelancer homepage
      window.location.href = "freelancerHome.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });

  // Validation functions (validate against local storage)
  function validateEmployerLogin(ename, epassword) {
    const storedEname = localStorage.getItem("employerUsername");
    console.log(storedEname);
    const storedEpassword = localloginStorage.getItem("employerPassword");
    return ename === storedEname && epassword === storedEpassword;
  }

  function validateFreelancerLogin(fname, fpassword) {
    const storedFname = localStorage.getItem("freelancerUsername");
    const storedFpassword = localStorage.getItem("freelancerPassword");
    return fname === storedFname && fpassword === storedFpassword;
  }
});
