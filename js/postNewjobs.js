document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".post-new-job");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting by default

    const category = document.getElementById("category").value;
    const details = document.getElementById("details").value;

    if (!category || !details) {
      alert("Please fill in all fields.");
      return;
    }

    // Create a new FormData object to store the form data
    const formData = new FormData();
    formData.append("category", category);
    formData.append("details", details);

    // Send the form data to the server using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "your-server-endpoint-url", true); // Replace 'your-server-endpoint-url' with the actual URL
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Request was successful, handle the response if needed
          console.log(xhr.responseText);
          alert("Job posted successfully!");

          // Update the posted jobs page dynamically
          updatePostedJobs(category, details);
        } else {
          // Request failed, handle the error
          console.error("Error:", xhr.status);
          alert("Failed to post job. Please try again later.");
        }
      }
    };

    xhr.send(formData);
  });

  // Function to update the posted jobs page with the newly added project
  function updatePostedJobs(category, details) {
    const postedJobsList = document.querySelector(".posted-jobs ul");
    const newProjectItem = document.createElement("li");
    newProjectItem.textContent = `${category} - ${details}`;
    postedJobsList.appendChild(newProjectItem);
  }
});
