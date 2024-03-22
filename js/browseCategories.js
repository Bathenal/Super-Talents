document.addEventListener("DOMContentLoaded", function () {
  const categoriesList = document.querySelector(".categories-list");
  const projectsContainer = document.getElementById("projects-container");

  categoriesList.addEventListener("click", function (event) {
    const category = event.target.dataset.category;
    if (category) {
      fetchProjectsByCategory(category);
    }
  });

  function fetchProjectsByCategory(category) {

    const projectsData = [
      { id: 1, title: 'Web Development Project 1' },
      { id: 2, title: 'Web Development Project 2' },
      { id: 3, title: 'Web Development Project 3' },
      { id: 4, title: 'Web Development Project 4' },
      { id: 5, title: 'Web Development Project 5' },
    ];

    renderProjects(projectsData);
  }

  function renderProjects(projects) {
    projectsContainer.innerHTML = "";
    projects.forEach((project) => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("project-item");
      projectElement.textContent = project.title;
      projectsContainer.appendChild(projectElement);
    });
  }
});
