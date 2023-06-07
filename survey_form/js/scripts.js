
const nameInput = document.getElementById("name");
const errorMessageName = document.getElementById("error-message-name");
// Get all input fields
const inputs = document.querySelectorAll('.input-field');
const submitBtn = document.getElementById('submit');
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
// Disable the submit button initially
submitBtn.disabled = true;

 nameInput.addEventListener("input", () => {
  const name = nameInput.value;
  const regex = /^[a-zA-Z ]{2,30}$/;
   if (!regex.test(name)) {
    errorMessageName.textContent = "Please enter a valid name";
    nameInput.classList.add("invalid");
  } 
  else {
    errorMessageName.textContent = "";
    nameInput.classList.remove("invalid");
    nameInput.forEach(input => {
      input.addEventListener('input', checkFields);
    });
  }
});
///^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i

const emailInput =document.getElementById("email");
const errorMessageEmail = document.getElementById("error-message-email");
// function validateEmail(email) {
//   const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return pattern.test(email);
// }

emailInput.addEventListener("input", () => {
  const email = emailInput.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!regex.test(email)) {
    errorMessageEmail.textContent = "Please enter a valid Email address";
    emailInput.classList.add("invalid")
  } 
  else {
    errorMessageEmail.textContent = "";
    emailInput.classList.remove("invalid");
    emailInput.forEach(input => {
      input.addEventListener('input', checkFields);
    });
  }
});

const ageInput = document.getElementById("error-message-age");

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

//mew try


 // Function to check if all fields are valid
const checkFields = () => {
  let allValid = true;
   inputs.forEach(input => {
    if (!input.checkValidity()) {
      allValid = false;
    }
  });
   submitBtn.disabled = !allValid;
};
 // Add event listeners to all input fields
inputs.forEach(input => {
  input.addEventListener('input', checkFields);
});
 // Check fields initially
checkFields();