<?php
session_start();
include 'db.php';

$payments = $conn->query("SELECT * FROM payments");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['add_payment'])) {
        $user_id = $_POST['user_id'];
        $amount = $_POST['amount'];
        $date = $_POST['payment_date'];
        $status = $_POST['status'];
        $query = "INSERT INTO payments (user_id, amount, payment_date, status) VALUES ('$user_id', '$amount', '$date', '$status')";
        $conn->query($query);
        header("Location: ".$_SERVER['PHP_SELF']); // Refresh after submission
        exit();
    }
    $query = "SELECT p.*, m.name, m.email FROM payments p
          JOIN members m ON p.member_id = m.id";
$result = mysqli_query($conn, $query);

while ($row = mysqli_fetch_assoc($result)) {
    echo "Member Name: " . $row['name'] . " - Payment Method: " . $row['payment_method'] . "<br>";
}

}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Payments - Wheels24</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-light">
    <div class="container py-4">
        <h1 class="mb-4 text-primary"><i class="fas fa-money-bill-wave me-2"></i>Manage Payments</h1>
        
        <!-- Payments Table -->
        <div class="card mb-4 shadow-sm">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-striped table-hover">
                        <thead class="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Member ID</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php while ($row = $payments->fetch_assoc()) { ?>
                            <tr>
                                <td><?= htmlspecialchars($row['id']) ?></td>
                                <td><?= htmlspecialchars($row['member_id']) ?></td>
                                <td>$<?= number_format($row['amount'], 2) ?></td>
                                <td><?= date('M d, Y', strtotime($row['payment_date'])) ?></td>
                                <td>
                                    <span class="badge bg-<?= $row['status'] == 'Completed' ? 'success' : 'warning' ?>">
                                        <?= htmlspecialchars($row['status']) ?>
                                    </span>
                                </td>
                            </tr>
                            <?php } ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Add Payment Form -->
        <div class="card shadow-sm">
            <div class="card-header bg-primary text-white">
                <h2 class="h5 mb-0"><i class="fas fa-plus me-2"></i>Add Payment</h2>
            </div>
            <div class="card-body">
                <form method="POST" class="row g-3">
                    <div class="col-md-6">
                        <label class="form-label">Member ID</label>
                        <input type="number" name="user_id" class="form-control" required>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Amount ($)</label>
                        <input type="number" step="0.01" name="amount" class="form-control" required>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Payment Date</label>
                        <input type="date" name="payment_date" class="form-control" required>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Status</label>
                        <select name="status" class="form-select">
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <button type="submit" name="add_payment" class="btn btn-primary">
                            <i class="fas fa-plus me-2"></i>Add Payment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>