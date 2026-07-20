<?php
require 'config/db.php';

$message = "";
$showPaymentDetails = false;

if (!$conn) {
    $message = "Error: Database connection failed. Please ensure the database is running and credentials are correct in config/db.php.";
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && $conn) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $membership = $_POST['membership'];
    $payment_method = $_POST['payment_method'];
    $transaction_id = uniqid('txn_'); // Generate a unique transaction ID
    $join_date = date('Y-m-d'); // Get the current date

    // Check for duplicate entry
    $check_sql = "SELECT * FROM members WHERE email=? OR phone=?";
    $stmt = $conn->prepare($check_sql);
    $stmt->bind_param("ss", $email, $phone);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $message = "Error: Duplicate entry. Please use a different email or phone number.";
    } else {
        // Insert member data into the members table
        $insert_sql = "INSERT INTO members (name, email, phone, membership_type, join_date, payment_method, transaction_id) VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt_insert = $conn->prepare($insert_sql);
        $stmt_insert->bind_param("sssssss", $name, $email, $phone, $membership, $join_date, $payment_method, $transaction_id);
        
        if ($stmt_insert->execute()) {
            // Redirect to payment gateway
            header("Location: payment_gateway?name=$name&email=$email&phone=$phone&membership=$membership&payment_method=$payment_method&transaction_id=$transaction_id");
            exit();
        } else {
            $message = "Error: " . $stmt_insert->error;
        }
        $stmt_insert->close();
    }
    $stmt->close();
}
if ($conn) {
    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Membership Enrollment Form</title>
    
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="fade-in">
    <?php include 'includes/header.php'; ?>
    <main class="container section" style="padding-top: 6rem; min-height: 80vh; display: flex; justify-content: center; align-items: center;">
        <div class="form-card fade-in-up" style="max-width: 500px; width: 100%;">
            <h2 class="text-center" style="margin-bottom: 2rem;">Membership Enrollment Form</h2>
            
            <?php if ($message != ""): ?>
                <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #ef4444; padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; text-align: center;">
                    <?php echo $message; ?>
                </div>
            <?php endif; ?>
            
            <?php if ($showPaymentDetails): ?>
                <div class="card text-center" style="border: 1px solid var(--accent);">
                    <h3 style="color: var(--accent); margin-bottom: 1rem;">Payment Details</h3>
                    <p style="color: var(--text-secondary); margin-bottom: 0.5rem;"><strong>Membership Type:</strong> <span style="color: var(--text-primary);"><?php echo $membership; ?></span></p>
                    <p style="color: var(--text-secondary); margin-bottom: 0.5rem;"><strong>Payment Method:</strong> <span style="color: var(--text-primary);"><?php echo $payment_method; ?></span></p>
                </div>
            <?php else: ?>
                <form action="enroll_form" method="post">
                    <div style="margin-bottom: 1.5rem;">
                        <label for="name" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Full Name</label>
                        <input type="text" id="name" name="name" class="form-control" required>
                    </div>
                    
                    <div style="margin-bottom: 1.5rem;">
                        <label for="email" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Email</label>
                        <input type="email" id="email" name="email" class="form-control" required>
                    </div>
                    
                    <div style="margin-bottom: 1.5rem;">
                        <label for="phone" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Phone Number</label>
                        <input type="text" id="phone" name="phone" class="form-control" required>
                    </div>
                    
                    <div style="margin-bottom: 1.5rem;">
                        <label for="membership" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Select Membership</label>
                        <?php 
                            $selectedPlan = isset($_GET['plan']) ? strtolower($_GET['plan']) : ''; 
                        ?>
                        <select id="membership" name="membership" class="form-control" required>
                            <option value="Silver" <?php echo ($selectedPlan == 'silver') ? 'selected' : ''; ?>>Silver - ₹999/year</option>
                            <option value="Gold" <?php echo ($selectedPlan == 'gold') ? 'selected' : ''; ?>>Gold - ₹2,499/year</option>
                            <option value="Platinum" <?php echo ($selectedPlan == 'platinum') ? 'selected' : ''; ?>>Platinum - ₹4,999/year</option>
                        </select>
                    </div>
                    
                    <div style="margin-bottom: 2rem;">
                        <label for="payment_method" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Select Payment Method</label>
                        <select id="payment_method" name="payment_method" class="form-control" required>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Debit Card">Debit Card</option>
                            <option value="Net Banking">Net Banking</option>
                            <option value="UPI">UPI</option>
                        </select>
                    </div>
                    
                    <button type="submit" class="btn btn-primary" style="width: 100%;">Enroll Now</button>
                </form>
            <?php endif; ?>
        </div>
    </main>
    <?php include 'includes/footer.php'; ?>
</body>
</html>
