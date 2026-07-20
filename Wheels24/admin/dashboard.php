<?php
session_start();
include '../config/db.php';

// Prevent direct access - Only allow logged-in admins

// Fetching total counts for dashboard
$total_users = $conn->query("SELECT COUNT(*) as count FROM users")->fetch_assoc()['count'];
?>

<?php include 'includes/header.php'; ?>


<div class="admin-header fade-in-up">
    <h1>Dashboard Overview</h1>
</div>

<div class="fade-in-up" style="animation-delay: 0.1s;">
    <h2>Overview</h2>
    <div class="stats-grid">
        <div class="stat-card">
            <i class="fas fa-users fa-2x" style="color: #3498db;"></i>
            <h3>Total Users</h3>
            <p style="font-size: 1.5rem; margin-top: 0.5rem;"><?= $total_users ?></p>
        </div>
    </div>

    <div class="dashboard-menu">
        <a href="users"><i class="fas fa-users"></i> Manage Users</a>
        <a href="brands"><i class="fas fa-tags"></i> Manage Brands</a>
    </div>
</div>

<?php include 'includes/footer.php'; ?>
