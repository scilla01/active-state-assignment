const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
// const passwordField = document.getElementsByClassName(password);
const togglePassword = document.querySelector(".password");

console.log(firstName);

// console.log(firstName, lastName, email, password);

const errorSvg = document.querySelector(".error-svg");
const errorSvg1 = document.querySelector(".error-svg1");
const errorSvg2 = document.querySelector(".error-svg2");
const errorSvg3 = document.querySelector(".error-svg3");
const emailExample = document.querySelector(".email-example");


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    errorSvg.removeAttribute("hidden");
    document.querySelector(".fn-error-mgs").textContent = "First Name cannot be empty";
    firstName.placeholder = "";
  } else {
    firstName.classList.remove('error');
    // errorSvg.addAttribute("hidden");
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    errorSvg1.removeAttribute("hidden");
    document.querySelector(".ln-error-mgs").textContent = "Last Name cannot be empty";
    lastName.placeholder = "";
  } else {
    lastName.classList.remove('error');
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    errorSvg2.removeAttribute("hidden");
    emailExample.removeAttribute("hidden")
    document.querySelector(".em-error-mgs").textContent = "Looks like this is not an email";
    email.placeholder = "";
  } else {
    email.classList.remove('error');
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    errorSvg3.removeAttribute("hidden");
    document.querySelector(".ps-error-mgs").textContent = "Password cannot be empty";
    password.placeholder = "";
    eye.innerHTML = "";
  } else {
    password.classList.remove('error');
  }
});


//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const eye = document.querySelector(".eye");
const eyeOpen = document.querySelector(".eye-open");


eye.addEventListener('click', function (e) {
  e.preventDefault();

  let ptype = togglePassword.getAttribute("type");

  if (ptype === "password") {
    togglePassword.setAttribute("type", "text");
    eyeOpen.src = "images/eye.png";
  } else {
    togglePassword.setAttribute("type", "password");
    eyeOpen.src = "images/eye-closed.png";
  }

})
