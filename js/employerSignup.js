// Employer Signup
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");
  const usernameInput = document.querySelector('input[name="ename"]');
  const companyNameInput = document.querySelector('input[name="company"]');
  const emailInput = document.querySelector('input[name="email"]');
  const passwordInput = document.querySelector('input[name="epassword"]');
  const confirmPasswordInput = document.querySelector(
    'input[name="cpassword"]'
  );
  const phoneNumberInput = document.querySelector('input[name="phone"]');
  const cityInput = document.querySelector('input[name="city"]');

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      saveEmployerFormData();
      form.submit();
    }
  });

  function validateForm() {
    let isValid = true;

    if (!validateUsername(usernameInput.value)) {
      isValid = false;
      alert("Please enter a valid username.");
    }

    if (!validateCompanyName(companyNameInput.value)) {
      isValid = false;
      alert("Please enter a valid company name.");
    }

    if (!validateEmail(emailInput.value)) {
      isValid = false;
      alert("Please enter a valid email address.");
    }

    if (!validatePassword(passwordInput.value)) {
      isValid = false;
      alert("Please enter a valid password (minimum 6 characters).");
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
      isValid = false;
      alert("Password and confirm password do not match.");
    }

    if (!validatePhoneNumber(phoneNumberInput.value)) {
      isValid = false;
      alert("Please enter a valid phone number.");
    }

    if (!validateCity(cityInput.value)) {
      isValid = false;
      alert("Please enter a valid city name.");
    }

    return isValid;
  }

  function validateUsername(username) {
    return username.trim() !== "";
  }

  function validateCompanyName(companyName) {
    return companyName.trim() !== "";
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    return password.length >= 6;
  }

  function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  }

  function validateCity(city) {
    return city.trim() !== "";
  }

  function saveEmployerFormData() {
    const formData = {
      username: usernameInput.value,
      companyName: companyNameInput.value,
      email: emailInput.value,
      password: document.getElementById("epassword").value,
      phoneNumber: phoneNumberInput.value,
      city: cityInput.value,
    };

    localStorage.setItem("employerFormData", JSON.stringify(formData));
  }
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Save form data to localStorage
    saveFormData();

    // Redirect to the login page
    window.location.href = "login.html"; // Change to the correct login page URL
  });
});
// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("signupForm");

//     form.addEventListener("submit", function (event) {
//       event.preventDefault();

//       // Save form data to localStorage
//       saveFormData();

//       // Redirect to the login page
//       window.location.href = "employerLogin.html"; // Change to the correct login page URL
//     });

//     function saveFormData() {
//       const formData = {
//         username: document.getElementById("ename").value,
//         companyName: document.getElementById("company").value,
//         email: document.getElementById("email").value,
//         password: document.getElementById("epassword").value,
//         phoneNumber: document.getElementById("phone").value,
//         city: document.getElementById("city").value,
//       };

//       localStorage.setItem("employerFormData", JSON.stringify(formData));
//     }
//   });
