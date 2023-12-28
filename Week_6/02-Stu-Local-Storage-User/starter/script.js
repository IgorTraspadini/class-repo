const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const signUpButton = document.querySelector("#sign-up");
const msgDiv = document.querySelector("#msg");
const userEmailSpan = document.querySelector("#user-email");
const userPasswordSpan = document.querySelector("#user-password");

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // Fill in code here to retrieve the last email and password.
  // If they are null, return early from this function
  // Else set the text of the userEmailSpan and userPasswordSpan 
  // to the corresponding values form local storage
  if (!localStorage.email || localStorage.password) {
    document.querySelector("#user-email").textContent = document.querySelector("#email").value;
    document.querySelector("#user-password").textContent = document.querySelector("#password").value;
  }
  else {
    document.querySelector("#user-email").textContent = localStorage.email;
    document.querySelector("#user-password").textContent = localStorage.password;
   //localStorage.getItem("email");
   //localStorage.getItem("password");
  }
}

signUpButton.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");
    // Save email and password to localStorage and render the last registered.
    localStorage.email = email;
    localStorage.password = password;
    //localStorage.setItem("email",email);
    //localStorage.setItem("password",password);
    renderLastRegistered();
  }
});

