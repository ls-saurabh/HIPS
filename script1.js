// Sample username and password for demonstration
const pass2 = "user123";
const correctPassword = "pass123";

// Get references to form elements
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");
const accountDiv = document.getElementById("account");

// Add an event listener to the login button
loginButton.addEventListener("click", function () {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Check if the entered username and password are correct
    if (enteredUsername === pass2 && enteredPassword === correctPassword) {
        // Display the user account and hide the login form
        loginForm.style.display = "none";
        accountDiv.style.display = "block";
    } else if (enteredUsername == pass2 && enteredPassword === correctPassword) {
        alert("Login");
      } else {
        alert("Incorrect username or password. Please try again.");
    }
});



