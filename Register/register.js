
  document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    clearErrors();

    const [firstName, lastName, email, password, confirmPassword] = inputs;
    let valid = true;

    if (firstName.value.trim() === "") {
      showError(firstName, "First name is required");
      valid = false;
    }

    if (lastName.value.trim() === "") {
      showError(lastName, "Last name is required");
      valid = false;
    }

    if (!validateEmail(email.value)) {
      showError(email, "Invalid email address");
      valid = false;
    }

    if (password.value.length < 6) {
      showError(password, "Password must be at least 6 characters");
      valid = false;
    }

    if (confirmPassword.value !== password.value) {
      showError(confirmPassword, "Passwords do not match");
      valid = false;
    }

    if (valid) {
      form.submit();
    }
  });

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function showError(input, message) {
    const error = document.createElement("small");
    error.className = "error";
    error.style.color = "red";
    error.innerText = message;
    input.parentNode.insertBefore(error, input.nextSibling);
  }

  function clearErrors() {
    const errors = form.querySelectorAll(".error");
    errors.forEach(err => err.remove());
  }
});
