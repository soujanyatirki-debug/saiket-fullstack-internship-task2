// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || message === "") {
    formMessage.innerHTML = "<div class='alert alert-danger'>All fields are required!</div>";
    return;
  }

  if (!email.includes("@")) {
    formMessage.innerHTML = "<div class='alert alert-danger'>Enter valid email!</div>";
    return;
  }

  formMessage.innerHTML = "<div class='alert alert-success'>Form submitted successfully!</div>";
  document.getElementById("contactForm").reset();
});