

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="styles/style.css">
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            height: 100vh;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
            margin-top: 100px;
        }
        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
            text-align: center;
            font-size: 29px;
        }
        .container h1 {
            margin-bottom: 20px;
        }
        .container form {
            display: flex;
            flex-direction: column;
        }
        .container label {
            margin-bottom: 5px;
            text-align: left;
        }
        .container input, .container select {
            margin-bottom: 15px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .container .password-container {
            position: relative;
        }
        .container .password-container input {
            width: 100%;
            padding-right: 40px;
        }
        .container .password-container .eye-icon {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            font-size: 1.8em;
        }
        .container button {
            padding: 10px;
            border: none;
            border-radius: 5px;
            background-color: #28a745;
            color: #fff;
            cursor: pointer;
        }
        .container button:hover {
            background-color: #218838;
        }
        .container .note {
            margin-top: 10px;
            font-size: 0.9em;
            color: #555;
        }
        .container .back-to-login {
            margin-top: 20px;
            text-align: right;
        }
        .container .back-to-login a {
            color: #007bff;
            text-decoration: none;
            font-size: 1.1em;
        }
        .container .back-to-login a:hover {
            text-decoration: underline;
        }
        .popup-message {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            text-align: center;
        }
    </style>
</head>
<body>
<?php include 'header.php'; ?>
    <div class="container">
        <h1>Register</h1>
        <form id="register-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required autocapitalize="none" style="text-transform: none;">
            <label for="city">City:</label>
            <input type="text" id="city" name="city" required autocapitalize="none" style="text-transform: none;">
            <label for="mobile">Mobile No.:</label>
            <input type="tel" id="mobile" name="mobile" required maxlength="10" pattern="\d{10}" title="Please enter a valid 10-digit mobile number" style="text-transform: none;" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required autocapitalize="none" style="text-transform: none;">
            <label for="new-username">Username:</label>
            <input type="text" id="new-username" name="username" required autocapitalize="none" style="text-transform: none;">
            <label for="new-password">Password:</label>
            <div class="password-container">
                <input type="password" id="new-password" name="password" required autocapitalize="none" style="text-transform: none;">
                <span class="eye-icon" id="toggle-new-password">&#128065;</span> <!-- Reverted to eye symbol -->
            </div>
            <label for="security-question">Security Question:</label>
            <select id="security-question" name="security_question" required>
                <option value="pet_name">What's your pet's name?</option>
                <option value="first_school">Which was your first school?</option>
                <option value="favorite_food">What's your favorite food?</option>
            </select>
            <label for="security-answer">Answer:</label>
            <input type="text" id="security-answer" name="security_answer" required autocapitalize="none" style="text-transform: none;">
            <button type="submit">Register</button>
        </form>
        <div class="note">
            <p style="font-size: 0.45em;">Note: The security question will be used to recover your password in case you forget it.</p>
        </div>
        <div class="back-to-login">
            <p><a href="login-register.php">Back to Login</a></p>
        </div>
    </div>
    <div class="popup-message" id="popup-message">
        New User Created Successfully!
    </div>
    <script>
        // Toggle password visibility
        const toggleNewPassword = document.getElementById('toggle-new-password');
        const newPasswordInput = document.getElementById('new-password');

        toggleNewPassword.addEventListener('mousedown', function() {
            newPasswordInput.type = 'text';
        });

        toggleNewPassword.addEventListener('mouseup', function() {
            newPasswordInput.type = 'password';
        });

        toggleNewPassword.addEventListener('mouseout', function() {
            newPasswordInput.type = 'password';
        });

        // Handle registration form submission
        document.getElementById('register-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(this);

            fetch('registerr.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    const popupMessage = document.getElementById('popup-message');
                    popupMessage.style.display = 'block';
                    setTimeout(() => {
                        popupMessage.style.display = 'none';
                        window.location.href = 'login-register.php';
                    }, 1000);
                } else {
                    alert('Error: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
        });
    </script>
     <?php include 'footer.php'; ?>
</body>
</html>
