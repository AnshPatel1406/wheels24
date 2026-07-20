<?php
session_start();
include '../config/db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['add_user'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $membership_type = $_POST['membership_type'];
        $query = "INSERT INTO users (name, email, username, password) VALUES ('$name', '$email', '$username', '$password')";
        $conn->query($query);
    }
    if (isset($_POST['delete_user'])) {
        if (isset($_POST['id']) && is_numeric($_POST['id'])) {
            $id = intval($_POST['id']);
            $query = "DELETE FROM members WHERE member_id=?";
            $stmt = $conn->prepare($query);
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $stmt->close();
        }
    }
}

// Fetch all fields from the members table
$users = $conn->query("SELECT member_id, name, email, phone, membership_type, join_date, payment_method FROM members");
?>

<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 1000px;
            margin: 20px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        h1, h2 {
            color: #333;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background-color: white;
            box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #4CAF50;
            color: white;
        }
        form {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }
        input[type="text"], input[type="email"], input[type="password"] {
            width: 100%;
            padding: 8px;
            margin: 8px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }
        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button[name="delete_user"] {
            background-color: #f44336;
        }
        button:hover {
            opacity: 0.8;
        }
    </style>
</head>
<body>

<h1>Manage Members</h1>
<table>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Membership Type</th>
        <th>Join Date</th>
        <th>Payment Method</th>
        <th>Actions</th>
    </tr>
    <?php while ($row = $users->fetch_assoc()) { ?>
    <tr>
        <td><?= htmlspecialchars($row['member_id']) ?></td>
        <td><?= htmlspecialchars($row['name']) ?></td>
        <td><?= htmlspecialchars($row['email']) ?></td>
        <td><?= htmlspecialchars($row['phone']) ?></td>
        <td><?= htmlspecialchars($row['membership_type']) ?></td>
        <td><?= htmlspecialchars($row['join_date']) ?></td>
        <td><?= htmlspecialchars($row['payment_method']) ?></td>
        <td>
            <form method="POST">
                <input type="hidden" name="id" value="<?= $row['member_id'] ?>">
                <button type="submit" name="delete_user">Delete</button>
            </form>
        </td>
    </tr>
    <?php } ?>
</table>



</body>
</html>
