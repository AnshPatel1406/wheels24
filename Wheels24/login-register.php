<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login/Register</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            height: 100vh;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
            margin-top: 100px; /* Adjust this value if needed */
        }
        .container {
            background-color: #fff;
            padding: 40px; /* Double the padding */
            border-radius: 15px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 400px; /* Double the width */
            text-align: center;
            font-size: 30px;
            
        }
        .container h1 {
            margin-bottom: 30px; /* Double the margin */
        }
        .container form {
            display: flex;
            flex-direction: column;
        }
        .container label {
            margin-bottom: 10px; /* Double the margin */
            text-align: left;
        }
        .container input {
            margin-bottom: 20px; /* Double the margin */
            padding: 16px; /* Double the padding */
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .container .password-container {
            position: relative;
        }
        .container .password-container input {
            width: 100%;
            padding-right: 40px; /* Add space for the eye icon */
        }
        .container .password-container .eye-icon {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            font-size: 1.8em; /* Increase the size of the eye icon */
        }
        .container button {
            padding: 16px; /* Double the padding */
            border: none;
            border-radius: 5px;
            background-color: #007bff;
            color: #fff;
            cursor: pointer;
        }
        .container button:hover {
            background-color: #0056b3;
        }
        .container .signup-link, .container .forgot-password-link {
            margin-top: 30px; /* Double the margin */
        }
        .container .signup-link a, .container .forgot-password-link a {
            color: #007bff;
            text-decoration: none;
        }
        .container .signup-link a:hover, .container .forgot-password-link a:hover {
            text-decoration: underline;
        }
        .forgot-password-form {
            display: none;
            flex-direction: column;
            font-size:20px;
        }
        .forgot-password-link {
            font-size: 1em;
        }
        .signup-link {
            font-size: 1em;
        }
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .reset-password {
            background-color: #fff;
            padding: 40px; /* Double the padding */
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 600px; /* Double the width */
            text-align: center;
            font-size: 18px;
        }
        .reset-password h2 {
            margin-bottom: 30px; /* Double the margin */
        }
        .reset-password form {
            display: flex;
            flex-direction: column;
        }
        .reset-password label {
            margin-bottom: 10px; /* Double the margin */
            text-align: left;
        }
        .reset-password input {
            margin-bottom: 20px; /* Double the margin */
            padding: 16px; /* Double the padding */
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .reset-password button {
            padding: 16px; /* Double the padding */
            border: none;
            border-radius: 5px;
            background-color: #007bff;
            color: #fff;
            cursor: pointer;
        }
        .reset-password button:hover {
            background-color: #0056b3;
        }
        .reset-password .back-button {
            margin-top: 20px; /* Double the margin */
            background-color: #6c757d;
        }
        .reset-password .back-button:hover {
            background-color: #5a6268;
        }
        .login-message {
            margin-top: 20px;
            font-size: 1em;
            color: green;
        }
    </style>
</head>
<body>
<?php include 'includes/header.php'; ?>
    <div class="container">
        <h1>Login</h1>
        <form id="login-form">
            <label for="username">Username or Email:</label>
            <input type="text" id="username" name="username" required autocapitalize="none" style="text-transform: none;">
            <label for="password">Password:</label>
            <div class="password-container">
                <input type="password" id="password" name="password" required autocapitalize="none" style="text-transform: none;">
                <span class="eye-icon" id="toggle-password">&#128065;</span>
            </div>
            <button type="submit">Login</button>
        </form>
        <div class="login-message" id="login-message"></div>
        <div class="forgot-password-link">
            <p><a href="#" id="forgot-password-link">Forgot Password?</a></p>
        </div>
        <div class="signup-link">
            <p>New User? <a href="register">Signup here</a></p>
        </div>
    </div>
    <div class="modal-overlay" id="modal-overlay">
        <div class="reset-password">
            <h2>Reset Password</h2>
            <form action="recover-password" method="post" class="forgot-password-form" id="forgot-password-form">
                <label for="recovery-username">Username:</label>
                <input type="text" id="recovery-username" name="username" required autocapitalize="none" style="text-transform: none;">
                <label for="recovery-answer">Answer to your security question:</label>
                <input type="text" id="recovery-answer" name="security_answer" required autocapitalize="none" style="text-transform: none;">
                <label for="new-password">New Password:</label>
                <input type="password" id="new-password" name="new_password" required autocapitalize="none" style="text-transform: none;">
                <label for="confirm-new-password">Confirm New Password:</label>
                <input type="password" id="confirm-new-password" name="confirm_new_password" required autocapitalize="none" style="text-transform: none;">
                <label for="mobile">Mobile Number:</label>
                <input type="tel" id="mobile" name="mobile" required maxlength="10" pattern="\d{10}" title="Please enter a valid 10-digit mobile number" style="text-transform: none;" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
                <button type="submit">Reset Password</button>
                <button type="button" class="back-button" id="back-button">Back</button>
            </form>
        </div>
    </div>
    
    <script>
        document.getElementById('forgot-password-link').addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('modal-overlay').style.display = 'flex';
        });

        document.getElementById('back-button').addEventListener('click', function() {
            document.getElementById('modal-overlay').style.display = 'none';
        });

        document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('recovery-username').value;
            const securityAnswer = document.getElementById('recovery-answer').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmNewPassword = document.getElementById('confirm-new-password').value;

            if (newPassword !== confirmNewPassword) {
                alert('Passwords do not match');
                return;
            }

            fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    security_answer: securityAnswer,
                    new_password: newPassword
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Password reset successful');
                    document.getElementById('modal-overlay').style.display = 'none';
                } else {
                    alert('Invalid username or security answer');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
        });

        // Toggle password visibility
        const togglePassword = document.getElementById('toggle-password');
        const passwordInput = document.getElementById('password');

        togglePassword.addEventListener('mousedown', function() {
            passwordInput.type = 'text';
        });

        togglePassword.addEventListener('mouseup', function() {
            passwordInput.type = 'password';
        });

        togglePassword.addEventListener('mouseout', function() {
            passwordInput.type = 'password';
        });

        // Handle login form submission
        document.getElementById('login-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            .then(response => response.json())
            .then(data => {
                const loginMessage = document.getElementById('login-message');
                if (data.success) {
                    sessionStorage.setItem('username', data.username);
                    loginMessage.textContent = 'Logged in Successfully!';
                    setTimeout(() => {
                        document.cookie = `username=${data.username}`;
                        window.location.href = '';
                    }, 1000);
                } else {
                    loginMessage.textContent = data.message;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                const loginMessage = document.getElementById('login-message');
                loginMessage.textContent = 'An Internal Error Occurred. Please try again.';
            });
        });
    </script>
</body>
</html>
