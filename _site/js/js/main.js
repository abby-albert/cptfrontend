document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        // Add your login logic here
        console.log('Login:', username, password);
    });

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('signup-name').value;
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        // Add your signup logic here
        console.log('Signup:', name, username, password);
    });
});
