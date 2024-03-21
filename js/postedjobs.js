document.addEventListener("DOMContentLoaded", function () {
  const applyButtons = document.querySelectorAll(".apply-btn");

  applyButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const listItem = event.target.closest("li");
      const jobTitle = listItem.textContent.trim();

      if (!jobTitle) {
        alert("Please select a job to apply for.");
        event.preventDefault();
      } else {
        // Perform further processing if needed
        console.log("Job title:", jobTitle);
      }
    });
  });
});
