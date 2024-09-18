// User credentials (this should ideally come from a secure source)
const users = {
    "admin": "password123"
};

const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

// Check if the login form exists on the page
if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check if the username and password are correct
        if (users[username] === password) {
            alert("Login successful!"); // Optional alert for successful login
            window.location.href = "dashb.html"; // Redirect to the dashboard
        } else {
            errorMessage.textContent = 'Invalid username or password.'; // Show error message
        }
    });
}

// Get the logout button
const logoutBtn = document.getElementById('logout-btn');

// Logout functionality
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        alert("You have logged out successfully!"); // Show logout message
        window.location.href = "index.html"; // Redirect to the login page
    });
}