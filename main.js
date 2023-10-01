document.addEventListener('DOMContentLoaded', function () {
    const registrationBtn = document.getElementById('registrationBtn');
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close');
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Define the user credentials and corresponding URLs
    const userCredentials = {
        Saurabh: {
            password: 'pass123',
            url: 'index.html',
        },
        Lakshya: {
            password: 'pass123',
            url: 'index1.html',
        },
        Shaurya: {
            password: 'pass123',
            url: 'index2.html',
        },
        Parth: {
            password: 'pass123',
            url: 'index3.html',
        },
        Mrityunjay: {
            password: 'pass123',
            url: 'index1.html',
        },
        Om: {
            password: 'pass123',
            url: 'index2.html',
        },
        AASHUTOSH: {
            password: 'pass123',
            url: 'index.html',
        },
        Lakshya: {
            password: 'pass123',
            url: 'index1.html',
        },
        Shaurya: {
            password: 'pass123',
            url: 'index2.html',
        },
    };

    // Show the registration pop-up
    registrationBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    // Close the pop-up when the close button is clicked
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close the pop-up if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        // Check if the entered credentials match a user's credentials
        if (userCredentials[enteredUsername] && userCredentials[enteredUsername].password === enteredPassword) {
            // Redirect to the corresponding HTML page for the user
            const redirectUrl = userCredentials[enteredUsername].url;
            window.location.href = redirectUrl;
        } else {
            alert('Incorrect username or password. Please try again.');
        }
    });
});




