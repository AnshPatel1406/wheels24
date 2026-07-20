<?php
// register.php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register - Wheels24</title>
    <!-- CSS is loaded in header.php -->
</head>
<body class="fade-in">
    <?php include 'includes/header.php'; ?>
    
    <main class="container" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 4rem 1rem;">
        <div class="form-card fade-in-up" style="max-width: 500px; width: 100%;">
            <h1 class="text-center" style="margin-bottom: 2rem;">Create an Account</h1>
            
            <form id="register-form">
                <div style="margin-bottom: 1.5rem;">
                    <label for="name" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Name:</label>
                    <input type="text" id="name" name="name" class="form-control" required autocapitalize="none">
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label for="city" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">City:</label>
                    <input type="text" id="city" name="city" class="form-control" required autocapitalize="none">
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label for="mobile" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Mobile No.:</label>
                    <input type="tel" id="mobile" name="mobile" class="form-control" required maxlength="10" pattern="\d{10}" title="Please enter a valid 10-digit mobile number" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label for="email" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Email:</label>
                    <input type="email" id="email" name="email" class="form-control" required autocapitalize="none">
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label for="new-username" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Username:</label>
                    <input type="text" id="new-username" name="username" class="form-control" required autocapitalize="none">
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label for="new-password" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Password:</label>
                    <div style="position: relative;">
                        <input type="password" id="new-password" name="password" class="form-control" required autocapitalize="none" style="padding-right: 40px;">
                        <span class="eye-icon" id="toggle-new-password" style="position: absolute; right: 15px; top: 50%; transform: translateY(-50%); cursor: pointer; color: var(--text-secondary);">👁</span>
                    </div>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label for="security-question" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Security Question:</label>
                    <select id="security-question" name="security_question" class="form-control" required>
                        <option value="pet_name">What's your pet's name?</option>
                        <option value="first_school">Which was your first school?</option>
                        <option value="favorite_food">What's your favorite food?</option>
                    </select>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label for="security-answer" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Answer:</label>
                    <input type="text" id="security-answer" name="security_answer" class="form-control" required autocapitalize="none">
                </div>
                
                <button type="submit" class="btn btn-primary" style="width: 100%;">Register</button>
            </form>
            
            <div style="margin-top: 1rem; text-align: center;">
                <p style="font-size: 0.8em; color: var(--text-secondary);">Note: The security question will be used to recover your password in case you forget it.</p>
            </div>
            
            <div style="margin-top: 2rem; text-align: center;">
                <p><a href="login-register" style="color: var(--accent); text-decoration: none;">Back to Login</a></p>
            </div>
        </div>
    </main>

    <div class="popup-message" id="popup-message" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: var(--bg-card); padding: 2rem; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); z-index: 1000; text-align: center; border: 1px solid var(--border-color); color: #10b981;">
        New User Created Successfully!
    </div>
    
    <?php include 'includes/footer.php'; ?>
    
    <script>
        const toggleNewPassword = document.getElementById('toggle-new-password');
        const newPasswordInput = document.getElementById('new-password');

        toggleNewPassword.addEventListener('mousedown', function() { newPasswordInput.type = 'text'; });
        toggleNewPassword.addEventListener('mouseup', function() { newPasswordInput.type = 'password'; });
        toggleNewPassword.addEventListener('mouseout', function() { newPasswordInput.type = 'password'; });
        toggleNewPassword.addEventListener('touchstart', function(e) { e.preventDefault(); newPasswordInput.type = 'text'; });
        toggleNewPassword.addEventListener('touchend', function(e) { e.preventDefault(); newPasswordInput.type = 'password'; });

        document.getElementById('register-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(this);

            fetch('', {
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
                        window.location.href = '';
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
</body>
</html>
