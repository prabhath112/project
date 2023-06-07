const nameInput = document.getElementById("name");
const errorMessageName = document.getElementById("error-message-name");

const emailInput = document.getElementById("email");
const errorMessageEmail = document.getElementById("error-message-email");

const ageInput = document.getElementById("age");
const errorMessageAge = document.getElementById("error-message-age");

const submitBtn = document.getElementById('submit');

submitBtn.disabled = true;

nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim();
  const regex = /^[a-zA-Z ]{2,30}$/;

  if (!regex.test(name)) {
    errorMessageName.textContent = "Please enter a valid name";
    nameInput.classList.add("invalid");
  } else {
    errorMessageName.textContent = "";
    nameInput.classList.remove("invalid");
  }

  checkFields();
});

emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    errorMessageEmail.textContent = "Please enter a valid email address";
    emailInput.classList.add("invalid");
  } else {
    errorMessageEmail.textContent = "";
    emailInput.classList.remove("invalid");
  }

  checkFields();
});

ageInput.addEventListener("input", () => {
  const age = parseInt(ageInput.value.trim());

  if (isNaN(age) || age < 14 || age > 100) {
    errorMessageAge.textContent = "Age should be between 14 and 100";
    ageInput.classList.add("invalid");
  } else {
    errorMessageAge.textContent = "";
    ageInput.classList.remove("invalid");
  }

  checkFields();
});

const checkFields = () => {
  let allValid = true;

  inputs.forEach(input => {
    if (!input.checkValidity()) {
      allValid = false;
    }
  });

  submitBtn.disabled = !allValid;
};
