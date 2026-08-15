const form = document.getElementById("applicationForm");

const company = document.getElementById("company");
const role = document.getElementById("role");
const locationInput = document.getElementById("location");
const salary = document.getElementById("salary");
const applyDate = document.getElementById("applyDate");
const interviewDate = document.getElementById("interviewDate");
const status = document.getElementById("status");
const priority = document.getElementById("priority");
const notes = document.getElementById("notes");

let applications = JSON.parse(localStorage.getItem("applications")) || [];
//cosoles

form.addEventListener("submit", saveApplication);
// edit id
const editId = Number(localStorage.getItem("editApplicationId"));
console.log(editId);

function saveApplication(event) {
  // Validation
  console.log("function called");
  event.preventDefault();
  if (
    company.value.trim() === "" ||
    role.value.trim() === "" ||
    locationInput.value.trim() === "" ||
    salary.value.trim() === "" ||
    applyDate.value === ""
  ) {
    alert("Please fill all required fields");
    return;
  }

  // Object

  const newApplication = {
    id: Date.now(),
    company: company.value.trim(),
    role: role.value.trim(),
    location: locationInput.value.trim(),
    salary: Number(salary.value),
    applyDate: applyDate.value,
    interviewDate: interviewDate.value,
    status: status.value,
    priority: priority.value,
    notes: notes.value.trim(),
  };

  // Push
  if (editId) {
    const editApplication = applications.find(function (application) {
      return application.id === editId;
    });
    editApplication.company = newApplication.company;
    editApplication.role = newApplication.role;
    editApplication.location = newApplication.location;
    editApplication.salary = newApplication.salary;
    editApplication.applyDate = newApplication.applyDate;
    editApplication.interviewDate = newApplication.interviewDate;
    editApplication.status = newApplication.status;
    editApplication.priority = newApplication.priority;
    editApplication.notes = newApplication.notes;
  } else {
    applications.push(newApplication);
  }
  // Local Storage
  localStorage.setItem("applications", JSON.stringify(applications));
  // remove items
  localStorage.removeItem("editApplicationId");

  // Reset Form
  form.reset();

  // Success Message
  alert("Application Saved Successfully");
}

// Fill form when editing
if (editId) {
  const editApplication = applications.find(function (application) {
    return application.id === editId;
  });
  company.value = editApplication.company;
  role.value = editApplication.role;
  locationInput.value = editApplication.location;
  salary.value = editApplication.salary;
  applyDate.value = editApplication.applyDate;
  interviewDate.value = editApplication.interviewDate;
  status.value = editApplication.status;
  priority.value = editApplication.priority;
  notes.value = editApplication.notes;
}
