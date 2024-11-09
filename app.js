document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();  // Prevent the default form submission
        
        // Clear previous error messages
        errorMessage.textContent = '';

        // Get the values from the form
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const remember = document.getElementById('remember').checked;

        // Basic front-end validation
        if (!username || !password) {
            errorMessage.textContent = 'Both username and password are required.';
            return;
        }

        // Simulate a login process (this would be replaced with real server-side authentication)
        simulateLogin(username, password, remember);
    });

    function simulateLogin(username, password, remember) {
        // Fake credentials for demonstration purposes
        const fakeUsername = 'user123';
        const fakePassword = 'password123';

        if (username === fakeUsername && password === fakePassword) {
            // Successful login (for example purposes, redirect to a dashboard page)
            alert('Login successful!');
            window.location.href = '/dashboard';  // Redirect to a hypothetical dashboard
        } else {
            // Invalid login
            errorMessage.textContent = 'Invalid username or password.';
        }
    }
});