// Hardcoded credentials for demonstration
const validUsername = "user@example.com";
const validPassword = "password123";

// Function to handle form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value; // Get the username value
    const password = document.getElementById('password').value; // Get the password value
    const loginError = document.getElementById('login-error'); // Get the error message element

    // Clear any previous error message
    loginError.textContent = "";

    // Check credentials
    if (username === validUsername && password === validPassword) {
        // Redirect to the dashboard page
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        // Display an error message
        loginError.textContent = "Invalid username or password."; // Show error message
    }
});
