/*
Load Data
      ↓
forEach()
      ↓
Template Literal
      ↓
innerHTML
      ↓
Cards Show
      ↓
Delete
      ↓
Edit
      ↓
Search
      ↓
Filter

*/

let applications = JSON.parse(localStorage.getItem("applications")) || [];

const applicationsContainer = document.getElementById("applicationsContainer");

displayApplications(applications);

function displayApplications(list) {
  applicationsContainer.innerHTML = "";

  if (list.length === 0) {
    applicationsContainer.innerHTML = `<p>No result found</p>`;
    return;
  }

  list.forEach(function (application) {
    applicationsContainer.innerHTML += `
        <div class="card">
            <h3>${application.company}</h3>
            <p>${application.role}</p>
            <p>${application.location}</p>
            <p>${application.status}</p>

        
            <button onclick="editApplication(${application.id})">
               Edit
             </button>

            <button onclick="deleteApplication(${application.id})">
                Delete
            </button>
        </div>
    `;
  });
}

function deleteApplication(id) {
  applications = applications.filter(function (application) {
    return application.id !== id;
  });

  localStorage.setItem("applications", JSON.stringify(applications));
  displayApplications(applications);
}

// edit

function editApplication(id) {
  localStorage.setItem("editApplicationId", id);

  window.location = "add.html";
}

// // search

searchInput.addEventListener("input", filterApplications);

statusFilter.addEventListener("change", filterApplications);

function filterApplications() {
  const filteredApplications = applications.filter(function (application) {
    const matchesSearch = application.company
      .toLowerCase()
      .includes(searchInput.value.toLowerCase());

    const matchesStatus =
      statusFilter.value === "All" || application.status === statusFilter.value;

    return matchesSearch && matchesStatus;
  });

  displayApplications(filteredApplications);
}
