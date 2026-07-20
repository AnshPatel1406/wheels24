<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "wheels24";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$message = "";
$payment_method = "";
$transaction_id = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
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

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Gateway</title>
    <style>
        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f2f5;
            text-align: center;
        }
        .container {
            width: 40%;
            margin: auto;
            padding: 30px;
            background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-top: 50px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .container:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        h2 {
            color: #333;
            margin-bottom: 20px;
        }
        .pay-btn {
            background: #28a745;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 18px;
            cursor: pointer;
            border-radius: 5px;
        }
        .pay-btn:hover {
            background: #218838;
        }
        .loader {
            display: none;
            font-size: 18px;
            color: #ff9800;
            margin-top: 10px;
        }
        select {
            padding: 8px;
            font-size: 16px;
            margin-top: 10px;
            width: 90%;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Payment Gateway</h2>

        <?php if (!empty($message)) : ?>
            <p style="color: #28a745; font-weight: bold;"><?php echo $message; ?></p>
            <p><strong>Payment Method:</strong> <?php echo htmlspecialchars($payment_method); ?></p>
            <p><strong>Transaction ID:</strong> <?php echo htmlspecialchars($transaction_id); ?></p>
        <?php else : ?>
            <form id="paymentForm" method="POST">
                <label for="payment_method"><strong>Select Payment Method:</strong></label><br>
                <select name="payment_method" id="payment_method" required>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Debit Card">Debit Card</option>
                    <option value="UPI">UPI</option>
                    <option value="Net Banking">Net Banking</option>
                </select><br><br>

                <button type="button" class="pay-btn" onclick="fakePayment()">Pay Now</button>
                <p class="loader" id="loader">Processing Payment...</p>
            </form>
        <?php endif; ?>
    </div>

    <script>
        function fakePayment() {
            document.getElementById("loader").style.display = "block";

            setTimeout(() => {
                document.getElementById("paymentForm").submit();
            }, 2000); // Simulating a delay for fake processing
        }
    </script>
     <?php include 'includes/footer.php'; ?>
</body>
</html>
