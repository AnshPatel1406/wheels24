<?php
// login-register.php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Wheels24</title>
    <!-- CSS is loaded in header.php -->
</head>
<body class="fade-in">
    <?php include 'includes/header.php'; ?>
    
    <main class="container" style="min-height: 80vh; display: flex; align-items: center; justify-content: center; padding: 4rem 1rem;">
        <div class="form-card fade-in-up" style="max-width: 450px; width: 100%;">
            <h1 class="text-center" style="margin-bottom: 2rem;">Login to <span class="text-accent">Wheels24</span></h1>
            
            <form id="login-form">
                <div style="margin-bottom: 1.5rem;">
                    <label for="username" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Username or Email</label>
                    <input type="text" id="username" name="username" class="form-control" required autocapitalize="none">
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label for="password" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Password</label>
                    <div style="position: relative;">
                        <input type="password" id="password" name="password" class="form-control" required autocapitalize="none" style="padding-right: 40px;">
                        <span class="eye-icon" id="toggle-password" style="position: absolute; right: 15px; top: 50%; transform: translateY(-50%); cursor: pointer; color: var(--text-secondary);">👁</span>
                    </div>
                </div>
                
                <button type="submit" class="btn btn-primary" style="width: 100%;">Login</button>
            </form>
            
            <div id="login-message" class="text-center" style="margin-top: 1rem; color: var(--accent); display: none;"></div>
            
            <div class="text-center" style="margin-top: 2rem;">
                <p><a href="#" id="forgot-password-link" style="color: var(--text-secondary); text-decoration: none; transition: color 0.3s;">Forgot Password?</a></p>
                <p style="margin-top: 1rem; color: var(--text-secondary);">New User? <a href="register" style="color: var(--accent); text-decoration: none;">Signup here</a></p>
            </div>
        </div>
    </main>

    <!-- Modal Overlay for Reset Password -->
    <div class="modal-overlay" id="modal-overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); backdrop-filter: blur(5px); z-index: 2000; align-items: center; justify-content: center;">
        <div class="form-card fade-in-up" style="max-width: 500px; width: 100%; margin: 1rem;">
            <h2 class="text-center" style="margin-bottom: 2rem;">Reset Password</h2>
            
            <form id="forgot-password-form">
                <div style="margin-bottom: 1rem;">
                    <label for="recovery-username" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Username</label>
                    <input type="text" id="recovery-username" name="username" class="form-control" required autocapitalize="none">
                </div>
                
                <div style="margin-bottom: 1rem;">
                    <label for="recovery-answer" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Answer to your security question</label>
                    <input type="text" id="recovery-answer" name="security_answer" class="form-control" required autocapitalize="none">
                </div>
                
                <div style="margin-bottom: 1rem;">
                    <label for="new-password" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">New Password</label>
                    <input type="password" id="new-password" name="new_password" class="form-control" required autocapitalize="none">
                </div>
                
                <div style="margin-bottom: 1rem;">
                    <label for="confirm-new-password" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Confirm New Password</label>
                    <input type="password" id="confirm-new-password" name="confirm_new_password" class="form-control" required autocapitalize="none">
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label for="mobile" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Mobile Number</label>
                    <input type="tel" id="mobile" name="mobile" class="form-control" required maxlength="10" pattern="\d{10}" title="Please enter a valid 10-digit mobile number" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
                </div>
                
                <button type="submit" class="btn btn-primary" style="width: 100%; margin-bottom: 1rem;">Reset Password</button>
                <button type="button" class="btn" id="back-button" style="width: 100%; background: transparent; border: 1px solid var(--border-color); color: var(--text-primary);">Back</button>
            </form>
        </div>
    </div>

    <?php include 'includes/footer.php'; ?>

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

        const togglePassword = document.getElementById('toggle-password');
        const passwordInput = document.getElementById('password');

        togglePassword.addEventListener('mousedown', function() { passwordInput.type = 'text'; });
        togglePassword.addEventListener('mouseup', function() { passwordInput.type = 'password'; });
        togglePassword.addEventListener('mouseout', function() { passwordInput.type = 'password'; });
        togglePassword.addEventListener('touchstart', function(e) { e.preventDefault(); passwordInput.type = 'text'; });
        togglePassword.addEventListener('touchend', function(e) { e.preventDefault(); passwordInput.type = 'password'; });

        document.getElementById('login-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const loginMessage = document.getElementById('login-message');

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
                loginMessage.style.display = 'block';
                if (data.success) {
                    sessionStorage.setItem('username', data.username);
                    loginMessage.style.color = '#10b981'; // Green for success
                    loginMessage.textContent = 'Logged in Successfully!';
                    setTimeout(() => {
                        document.cookie = `username=${data.username}`;
                        window.location.href = '';
                    }, 1000);
                } else {
                    loginMessage.style.color = '#ef4444'; // Red for error
                    loginMessage.textContent = data.message || 'Login failed';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                loginMessage.style.display = 'block';
                loginMessage.style.color = '#ef4444';
                loginMessage.textContent = 'An Internal Error Occurred. Please try again.';
            });
        });
    </script>
</body>
</html>
