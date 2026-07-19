<?php
// Include database connection
include 'db.php';

// Fetch all users
$query = "SELECT * FROM users";
$result = mysqli_query($conn, $query);

// Handle form submissions
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['add_user'])) {
        $name = $_POST['name'];
        $city = $_POST['city'];
        $mobile = $_POST['mobile'];
        $email = $_POST['email'];
        $username = $_POST['username'];
        $password = $_POST['password'];
        $security_question = $_POST['security_question'];
        $security_answer = $_POST['security_answer'];
        $query = "INSERT INTO users (name, city, mobile, email, username, password, security_question, security_answer) 
                  VALUES ('$name', '$city', '$mobile', '$email', '$username', '$password', '$security_question', '$security_answer')";
        mysqli_query($conn, $query);
        header("Location: users.php");
    } elseif (isset($_POST['update_user'])) {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $city = $_POST['city'];
        $mobile = $_POST['mobile'];
        $email = $_POST['email'];
        $username = $_POST['username'];
        $password = $_POST['password'];
        $security_question = $_POST['security_question'];
        $security_answer = $_POST['security_answer'];
        $query = "UPDATE users SET name='$name', city='$city', mobile='$mobile', email='$email', username='$username', 
                  password='$password', security_question='$security_question', security_answer='$security_answer' WHERE id=$id";
        mysqli_query($conn, $query);
        header("Location: users.php");
    } elseif (isset($_POST['delete_user'])) {
        $id = $_POST['id'];
        $query = "DELETE FROM users WHERE id=$id";
        mysqli_query($conn, $query);
        header("Location: users.php");
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Users</title>
    <style>
        /* Base styles */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        /* Container layout */
        .container {
            width: 90%;
            margin: 20px auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            overflow-x: auto;
        }

        /* Headings */
        h1, h2 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
        }

        /* Form styling */
        form {
            margin-bottom: 20px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 10px;
        }

        form input {
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
        }

        form button {
            padding: 10px;
            background-color: #007BFF;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
        }

        form button:hover {
            background-color: #0056b3;
        }

        /* Table styling */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            font-size: 14px;
        }

        th, td {
            padding: 12px 8px;
            text-align: left;
            border: 1px solid #ddd;
        }

        th {
            background-color: #f8f9fa;
            font-weight: bold;
        }

        tr:nth-child(even) {
            background-color: #f9f9f9;
        }

        /* Action buttons */
        .actions {
            display: flex;
            gap: 5px;
            justify-content: center;
        }

        .actions form {
            display: inline;
            margin: 0;
        }

        .actions button {
            padding: 5px 10px;
            font-size: 12px;
        }

        .actions button[name="update_user"] {
            background-color: #28a745;
        }

        .actions button[name="delete_user"] {
            background-color: #dc3545;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Users</h1>

        <!-- Add User Form -->
        <form method="POST">
            <input type="text" name="name" placeholder="Name" required>
            <input type="text" name="city" placeholder="City" required>
            <input type="text" name="mobile" placeholder="Mobile" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <input type="text" name="security_question" placeholder="Security Question" required>
            <input type="text" name="security_answer" placeholder="Security Answer" required>
            <button type="submit" name="add_user">Add User</button>
        </form>

        <h2>User List</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Security Question</th>
                    <th>Security Answer</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php while ($row = mysqli_fetch_assoc($result)): ?>
                    <tr>
                        <td><?php echo $row['id']; ?></td>
                        <td><?php echo $row['name']; ?></td>
                        <td><?php echo $row['city']; ?></td>
                        <td><?php echo $row['mobile']; ?></td>
                        <td><?php echo $row['email']; ?></td>
                        <td><?php echo $row['username']; ?></td>
                        <td><?php echo $row['password']; ?></td>
                        <td><?php echo $row['security_question']; ?></td>
                        <td><?php echo $row['security_answer']; ?></td>
                        <td class="actions">
                            <!-- Update User Form -->
                            <form method="POST">
                                <input type="hidden" name="id" value="<?php echo $row['id']; ?>">
                                <input type="text" name="name" value="<?php echo $row['name']; ?>" required>
                                <input type="text" name="city" value="<?php echo $row['city']; ?>" required>
                                <input type="text" name="mobile" value="<?php echo $row['mobile']; ?>" required>
                                <input type="email" name="email" value="<?php echo $row['email']; ?>" required>
                                <input type="text" name="username" value="<?php echo $row['username']; ?>" required>
                                <input type="password" name="password" value="<?php echo $row['password']; ?>" required>
                                <input type="text" name="security_question" value="<?php echo $row['security_question']; ?>" required>
                                <input type="text" name="security_answer" value="<?php echo $row['security_answer']; ?>" required>
                                <button type="submit" name="update_user">Update</button>
                            </form>
                            <!-- Delete User Form -->
                            <form method="POST">
                                <input type="hidden" name="id" value="<?php echo $row['id']; ?>">
                                <button type="submit" name="delete_user">Delete</button>
                            </form>
                        </td>
                    </tr>
                <?php endwhile; ?>
            </tbody>
        </table>
    </div>
</body>
</html>