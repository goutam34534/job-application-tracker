let applications = JSON.parse(localStorage.getItem("applications")) || [];

console.log(applications);

// Dashboard elements

const totalApplications = document.getElementById("totalApplications");

const applied = document.getElementById("applied");

const interview = document.getElementById("interview");

const selected = document.getElementById("selected");

const rejected = document.getElementById("rejected");

// Total

totalApplications.innerText = applications.length;

// Applied

const appliedApplications = applications.filter(function (application) {
  return application.status === "Applied";
});

applied.innerText = appliedApplications.length;

// Interview

const interviewApplications = applications.filter(function (application) {
  return application.status === "Interview";
});

interview.innerText = interviewApplications.length;

// Selected

const selectedApplications = applications.filter(function (application) {
  return application.status === "Selected";
});

selected.innerText = selectedApplications.length;

// Rejected

const rejectedApplications = applications.filter(function (application) {
  return application.status === "Rejected";
});

rejected.innerText = rejectedApplications.length;
