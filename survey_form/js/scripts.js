
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


const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message-password");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/;

  if (!regex.test(password)) {
    errorMessage.textContent = "Password must contain at least 8 characters, including a capital letter, a number, and a special character (@ $ ! % * ? &)";
    passwordInput.classList.add("invalid");
  } else {
    errorMessage.textContent = "";
    passwordInput.classList.remove("invalid");
  }
});

//test 





document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the selected radio button value
  const city = document.getElementById('dropdownCity').value;
  const gender = document.getElementById('dropdown').value;
  const userRating = document.querySelector('input[name="radio-buttons"]:checked');
  const mostLike = document.getElementById('most-like').value;

  // Get the checked checkboxes
  const preferences = Array.from(document.querySelectorAll('input[name="prefer"]:checked'))
    .map(checkbox => checkbox.value);

  // Get the comments
  const comments = document.getElementById('comments').value;

  // Generate the confirmation message
  let confirmationMessage = '';
  if (city) {
    confirmationMessage += `City: ${city}\n`;
  }
  if (gender) {
    confirmationMessage += `Gender: ${gender}\n`;
  }
  if (userRating) {
    confirmationMessage += `User Rating: ${userRating.value}\n`;
  }
  if (mostLike) {
    confirmationMessage += `Liked most: ${mostLike}\n`;
  }
  if (preferences.length > 0) {
    const preferencesList = `{${preferences.join(', ')}}`;
    confirmationMessage += `Preferences: ${preferencesList}\n`;
  }
  if (comments) {
    confirmationMessage += `Comments: ${comments}\n`;
  }

  // Display the confirmation message
  const confirmation = confirm(confirmationMessage);
  if (confirmation) {
    // Form submission logic
    alert('Form submitted successfully!');
    // Reset the form if needed
    document.getElementById('myForm').reset();
  }
});

//to

//from
// document.getElementById('myForm').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent form submission

//   // Get the selected radio button value
//   const city = document.getElementById('dropdownCity').value;
//   const gender = document.getElementById('dropdown').value;
//   const userRating = document.querySelector('input[name="radio-buttons"]:checked');
//   const mostLike = document.getElementById('most-like').value;

//   // Get the checked checkboxes
//   const preferences = Array.from(document.querySelectorAll('input[name="prefer"]:checked'))
//     .map(checkbox => checkbox.value);

//   // Get the comments
//   const comments = document.getElementById('comments').value;

//   // Generate the confirmation message
//   let confirmationMessage = '';
//   if (city) {
//     confirmationMessage += `City: ${city}\n`;
//   }
//   if (gender) {
//     confirmationMessage += `Gender: ${gender}\n`;
//   }
//   if (userRating) {
//     confirmationMessage += `User Rating: ${userRating.value}\n`;
//   }
//   if (mostLike) {
//     confirmationMessage += `Liked most: ${mostLike}\n`;
//   }
//   if (preferences.length > 0) {
//     const preferencesList = `{${preferences.join(', ')}}`;
//     confirmationMessage += `Preferences: ${preferencesList}\n`;
//   }
//   if (comments) {
//     confirmationMessage += `Comments: ${comments}\n`;
//   }

//   // Display the confirmation message
//   if (confirmationMessage) {
//     const confirmation = confirm(confirmationMessage);
//     if (confirmation) {
//       // Form submission logic
//       alert('Form submitted successfully!');
//       // Reset the form if needed
//       document.getElementById('myForm').reset();
//     }
//   } else {
//     alert('Please fill in all the required fields before submitting the form.');
//   }
// });
//to



// // test
// const username = document.getElementById('username').value; 
// const name = document.getElementById('name').value; 
// const email = document.getElementById('email').value; 
// const pass = document.getElementById('password').value; 
// const conpass = document.getElementById('confirm-password').value; 
// const age = document.getElementById('age').value; 
// const city = document.getElementById('city').value; 
// const gender = document.getElementById('gender').value; 
// const age = document.getElementById('age').value; 
// const age = document.getElementById('age').value; 
// const age = document.getElementById('age').value; 
// const age = document.getElementById('age').value; 
// end 
  // Check if all fields are valid
//   if (username && name && email && pass && conpass && age) {
//     const confirmation = confirm('Are you sure you want to submit the form?\nName: ' +name + '\nEmail: ' + email+ '\nUser Name: ' + username+ '\nAge: ' + age);
//     if (confirmation) {
//       // Form submission logic
//       alert('Form submitted successfully!');
//       // Reset the form if needed
//       document.getElementById('myForm').reset();
//     }
//   } else {
//     alert('Please fill in all the fields correctly.');
//   }
// });
