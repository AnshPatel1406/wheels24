<?php
require 'config/db.php';

$message = "";
$payment_method = "";
$transaction_id = "";

if (!$conn) {
    $message = "Error: Database connection failed. Please ensure the database is running and credentials are correct in config/db.php.";
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && $conn) {
    $payment_method = $_POST['payment_method'];
    $transaction_id = uniqid("TXN_"); // Generate unique transaction ID

    // Insert payment details into database
    $sql = "INSERT INTO payments (payment_method, transaction_id) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $payment_method, $transaction_id);

    if ($stmt->execute()) {
        $message = "✅ Payment successful!";
    } else {
        $message = "❌ Error: " . $stmt->error;
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
    <title>Payment Gateway</title>
    
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="fade-in">
    <?php include 'includes/header.php'; ?>
    <main class="container section" style="padding-top: 8rem; min-height: 80vh; display: flex; justify-content: center; align-items: center;">
        <div class="form-card fade-in-up text-center" style="max-width: 500px; width: 100%;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">💳</div>
            <h2 style="margin-bottom: 2rem;">Secure Checkout</h2>

            <?php if (!empty($message)) : ?>
                <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 2rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
                    <p style="color: #10b981; font-weight: 600; font-size: 1.2rem; margin-bottom: 1rem;"><?php echo $message; ?></p>
                    <div style="text-align: left; color: var(--text-secondary); background: rgba(0,0,0,0.2); padding: 1rem; border-radius: var(--radius-sm);">
                        <p style="margin-bottom: 0.5rem;"><strong>Payment Method:</strong> <span style="color: var(--text-primary); float: right;"><?php echo htmlspecialchars($payment_method); ?></span></p>
                        <p><strong>Transaction ID:</strong> <span style="color: var(--text-primary); float: right;"><?php echo htmlspecialchars($transaction_id); ?></span></p>
                    </div>
                </div>
                <a href="index" class="btn btn-primary" style="margin-top: 1rem;">Return to Homepage</a>
            <?php else : ?>
                <p style="color: var(--text-secondary); margin-bottom: 2rem;">You are completing enrollment for your Wheels24 membership. Please confirm your payment details below.</p>
                <form id="paymentForm" method="POST" style="text-align: left;">
                    <div style="margin-bottom: 2rem;">
                        <label for="payment_method" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Confirm Payment Method</label>
                        <select name="payment_method" id="payment_method" class="form-control" required>
                            <option value="Credit Card" <?php echo (isset($_GET['payment_method']) && $_GET['payment_method'] == 'Credit Card') ? 'selected' : ''; ?>>Credit Card</option>
                            <option value="Debit Card" <?php echo (isset($_GET['payment_method']) && $_GET['payment_method'] == 'Debit Card') ? 'selected' : ''; ?>>Debit Card</option>
                            <option value="UPI" <?php echo (isset($_GET['payment_method']) && $_GET['payment_method'] == 'UPI') ? 'selected' : ''; ?>>UPI</option>
                            <option value="Net Banking" <?php echo (isset($_GET['payment_method']) && $_GET['payment_method'] == 'Net Banking') ? 'selected' : ''; ?>>Net Banking</option>
                        </select>
                    </div>

                    <button type="button" class="btn btn-primary" id="payBtn" style="width: 100%; display: flex; justify-content: center; align-items: center; gap: 0.5rem;" onclick="fakePayment()">
                        <span id="btnText">Pay Securely Now</span>
                    </button>
                    <p id="loader" style="display: none; color: var(--accent); margin-top: 1rem; text-align: center; font-size: 0.9rem; animation: pulse 1.5s infinite;">Processing your transaction securely... please wait.</p>
                </form>
            <?php endif; ?>
        </div>

    </main>
    <script>
        function fakePayment() {
            document.getElementById("loader").style.display = "block";
            const btn = document.getElementById("payBtn");
            btn.disabled = true;
            btn.style.opacity = '0.7';
            document.getElementById("btnText").innerText = "Processing...";

            setTimeout(() => {
                document.getElementById("paymentForm").submit();
            }, 2000);
        }
    </script>
     <?php include 'includes/footer.php'; ?>
</body>
</html>
