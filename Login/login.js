document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = form.querySelector('input[type="email"]');
  const passwordInput = form.querySelector('input[type="password"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    let valid = true;

    if (emailInput.value.trim() === "") {
      showError(emailInput, "Email is required");
      valid = false;
    } else if (!validateEmail(emailInput.value)) {
      showError(emailInput, "Invalid email format");
      valid = false;
    }

    if (passwordInput.value.trim() === "") {
      showError(passwordInput, "Password is required");
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
    errors.forEach((err) => err.remove());
  }
});
