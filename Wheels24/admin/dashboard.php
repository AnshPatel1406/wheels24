<?php
session_start();
include '../config/db.php';

// Prevent direct access - Only allow logged-in admins

// Fetching total counts for dashboard
$total_users = $conn->query("SELECT COUNT(*) as count FROM users")->fetch_assoc()['count'];
$total_members = $conn->query("SELECT COUNT(*) as count FROM members")->fetch_assoc()['count'];
$total_payments = $conn->query("SELECT SUM(amount) as total FROM payments WHERE status='Completed'")->fetch_assoc()['total'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        body {
            background: #f0f2f5;
            color: #333;
        }

        header {
            background: #2c3e50;
            color: white;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .logout-btn {
            background: #e74c3c;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            text-decoration: none;
            transition: 0.3s;
        }

        .logout-btn:hover {
            background: #c0392b;
        }

        .container {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 1rem;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
        }

        .stat-card {
            background: white;
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }

        .stat-card:hover {
            transform: translateY(-5px);
        }

        .dashboard-menu {
            margin-top: 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
        }

        .dashboard-menu a {
            background: #3498db;
            color: white;
            padding: 1rem;
            border-radius: 8px;
            text-decoration: none;
            text-align: center;
            transition: 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }

        .dashboard-menu a:hover {
            background: #2980b9;
            transform: scale(1.02);
        }

        h2 {
            color: #2c3e50;
            margin-bottom: 1rem;
        }
    </style>
</head>
<body>

<header>
    <h1>Admin Dashboard</h1>
    <a href="../logout.php" class="logout-btn"><i class="fas fa-sign-out-alt"></i> Logout</a>
</header>

<div class="container">
    <h2>Overview</h2>
    <div class="stats-grid">
        <div class="stat-card">
            <i class="fas fa-users fa-2x" style="color: #3498db;"></i>
            <h3>Total Users</h3>
            <p style="font-size: 1.5rem; margin-top: 0.5rem;"><?= $total_users ?></p>
        </div>
        <div class="stat-card">
            <i class="fas fa-id-card fa-2x" style="color: #2ecc71;"></i>
            <h3>Total Memberships</h3>
            <p style="font-size: 1.5rem; margin-top: 0.5rem;"><?= $total_members ?></p>
        </div>
        <div class="stat-card">
            <i class="fas fa-dollar-sign fa-2x" style="color: #f1c40f;"></i>
            <h3>Total Revenue</h3>
            <p style="font-size: 1.5rem; margin-top: 0.5rem;">$<?= $total_payments ?: 0 ?></p>
        </div>
    </div>

    <div class="dashboard-menu">
        <a href="users.php"><i class="fas fa-users"></i> Manage Users</a>
        <a href="members.php"><i class="fas fa-id-card"></i> Manage Memberships</a>
        <a href="payments.php"><i class="fas fa-credit-card"></i> Manage Payments</a>
        <a href="brands.php"><i class="fas fa-tags"></i> Manage Brands</a>
    </div>
</div>

</body>
</html>
