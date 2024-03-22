document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });

  function validateForm() {
    let isValid = true;

    if (!validateName(nameInput.value.trim())) {
      isValid = false;
      alert("Please enter a valid name.");
    }

    if (!validateEmail(emailInput.value.trim())) {
      isValid = false;
      alert("Please enter a valid email address.");
    }

    if (!validateMessage(messageInput.value.trim())) {
      isValid = false;
      alert("Please enter a message.");
    }

    return isValid;
  }

  function validateName(name) {
    return /^[A-Za-z\s]+$/.test(name);
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateMessage(message) {
    return message.length > 0;
  }
});
