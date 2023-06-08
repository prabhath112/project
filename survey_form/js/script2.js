const nameInput = document.getElementById("name");
const errorMessageName = document.getElementById("error-message-name");

const emailInput = document.getElementById("email");
const errorMessageEmail = document.getElementById("error-message-email");

const usernameInput = document.getElementById('username');
const errorMessageu = document.getElementById('error-message-uname');

const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message-password");

const confirmPasswordInput = document.getElementById('confirm-password');
const errorMessagep = document.getElementById('error-message-password-confirm');

const ageInput = document.getElementById("age");
const errorMessageAge = document.getElementById("error-message-age");

const submitBtn = document.getElementById('submit');

submitBtn.disabled = true;


nameInput.addEventListener("input", () => {
  const name = nameInput.value;
  const regex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/  ;

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
  const email = emailInput.value;
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


document.getElementById('age').addEventListener("keypress",function(event){
  if(event.key < '0' || event.key >'9')
  {
    event.preventDefault();
  }
  else if(document.getElementById('age').value > 10)
  {
    event.preventDefault();
    ageInput.textContent = "age should be between 14-100";
  }
  else{
    ageInput.textContent = "";
    ageInput.forEach(input => {
      input.addEventListener('input', checkFields);
    });
  }
})

ageInput.addEventListener("input", () => {
  const age = parseInt(ageInput.value);

  if (isNaN(age) || age < 14 || age > 100) {
    errorMessageAge.textContent = "Age should be between 14 and 100";
    ageInput.classList.add("invalid");
  } else {
    errorMessageAge.textContent = "";
    ageInput.classList.remove("invalid");
  }

  checkFields();
});



// Function to check if the username is valid
const checkUsername = () => {
  const username = usernameInput.value;
  const usernameRegex = /^[a-zA-Z0-9_]{5,20}$/;

  if (!usernameRegex.test(username)) {
    errorMessageu.textContent = "Invalid username and min length is 5";
    submitButton.disabled = true;
  } else {
    errorMessageu.textContent = "";
    submitButton.disabled = false;
  }
};

// Add event listener to the username input
usernameInput.addEventListener('input', checkUsername);

 


passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/;

  if (!regex.test(password)) {
    errorMessage.textContent = "Password must contain at least 8 characters, including a capital letter, a number, and a special character (@ $ ! % * ? &)";
    passwordInput.classList.add("invalid");
  } else {
    errorMessage.textContent = ""
    passwordInput.classList.remove("invalid");
  }
  checkFields();

});

const checkPasswords = () => {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    errorMessagep.textContent = "Passwords do not match";
    submitButton.disabled = true;
  } else {
    errorMessagep.textContent = "";
    submitButton.disabled = false;
  }
};

passwordInput.addEventListener('input', checkPasswords);
confirmPasswordInput.addEventListener('input', checkPasswords);


const inputs = document.querySelectorAll('.input-field');

const checkFields = () => {
  let allValid = true;

  inputs.forEach(input => {
    if (!input.checkValidity()) {
      allValid = false;
    }
  });
  submitBtn.disabled = !allValid;
};

inputs.forEach(input => {
  input.addEventListener('input', checkFields);
});

checkFields();
