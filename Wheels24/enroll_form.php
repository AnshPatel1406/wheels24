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
$showPaymentDetails = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
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
            header("Location: payment_gateway.php?name=$name&email=$email&phone=$phone&membership=$membership&payment_method=$payment_method&transaction_id=$transaction_id");
            exit();
        } else {
            $message = "Error: " . $stmt_insert->error;
        }
        $stmt_insert->close();
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
    <title>Membership Enrollment Form</title>
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
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        label {
            font-weight: bold;
            margin-top: 10px;
            width: 100%;
            text-align: left;
        }
        input, select {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border-radius: 5px;
            border: 1px solid #ccc;
            box-sizing: border-box;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        input:focus, select:focus {
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }
        input {
            background: #fff;
            background-image: linear-gradient(45deg, #f3ec78, #af4261);
            background-clip: padding-box;
            color: #333;
        }
        .btn {
            background: linear-gradient(45deg, #ff6b6b, #f06595);
            color: #fff;
            padding: 10px 20px;
            margin-top: 20px;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .btn:hover {
            background: linear-gradient(45deg, #f06595, #ff6b6b);
            transform: scale(1.05);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        p {
            color: #d9534f;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Membership Enrollment Form</h2>
        <?php if ($message != ""): ?>
            <p><?php echo $message; ?></p>
        <?php endif; ?>
        <?php if ($showPaymentDetails): ?>
            <div class="payment-details">
                <h3>Payment Details</h3>
                <p><strong>Membership Type:</strong> <?php echo $membership; ?></p>
                <p><strong>Payment Method:</strong> <?php echo $payment_method; ?></p>
            </div>
        <?php else: ?>
            <form action="enroll_form.php" method="post">
                <label for="name">Full Name:</label>
                <input type="text" id="name" name="name" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="phone">Phone Number:</label>
                <input type="text" id="phone" name="phone" required>
                
                <label for="membership">Select Membership:</label>
                <select id="membership" name="membership" required>
                <option value="Silver">Silver - ₹999/year</option>
                <option value="Gold">Gold - ₹2,499/year</option>
                <option value="Platinum">Platinum - ₹4,999/year</option>
                </select>
                
                <label for="payment_method">Select Payment Method:</label>
                <select id="payment_method" name="payment_method" required>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Debit Card">Debit Card</option>
                    <option value="Net Banking">Net Banking</option>
                    <option value="UPI">UPI</option>
                </select>
                
                <button type="submit" class="btn">Enroll Now</button>
            </form>
        <?php endif; ?>
    </div>
</body>
</html>
