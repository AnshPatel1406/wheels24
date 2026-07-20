<?php
// Include database connection
include '../config/db.php';

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
        $query = "INSERT INTO users (name, city, mobile, email, username, password, security_question, security_answer) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ssssssss", $name, $city, $mobile, $email, $username, $password, $security_question, $security_answer);
        $stmt->execute();
        $stmt->close();
        header("Location: users");
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
        $query = "UPDATE users SET name=?, city=?, mobile=?, email=?, username=?, password=?, security_question=?, security_answer=? WHERE id=?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ssssssssi", $name, $city, $mobile, $email, $username, $password, $security_question, $security_answer, $id);
        $stmt->execute();
        $stmt->close();
        header("Location: users");
    } elseif (isset($_POST['delete_user'])) {
        $id = $_POST['id'];
        $query = "DELETE FROM users WHERE id=?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $stmt->close();
        header("Location: users");
    }
}
?>

<?php include 'includes/header.php'; ?>
<div class="fade-in-up">
    <div class="container">
        <div class="admin-header"><h1>Users</h1></div>

        <!-- Add User Form -->
        <div class="card" style="margin-bottom: 2rem;"><form class="admin-form" method="POST">
            <input class="form-control" type="text" name="name" placeholder="Name" required></div>
            <input class="form-control" type="text" name="city" placeholder="City" required></div>
            <input class="form-control" type="text" name="mobile" placeholder="Mobile" required></div>
            <input class="form-control" type="email" name="email" placeholder="Email" required></div>
            <input class="form-control" type="text" name="username" placeholder="Username" required></div>
            <input class="form-control" type="password" name="password" placeholder="Password" required></div>
            <input class="form-control" type="text" name="security_question" placeholder="Security Question" required></div>
            <input class="form-control" type="text" name="security_answer" placeholder="Security Answer" required></div>
            <button type="submit" name="add_user">Add User</button>
        </form></div>

        <h2 style="margin-bottom: 1rem; color: var(--accent); font-size: 1.2rem;">User List</h2>
        <div class="admin-table-container"><table class="admin-table">
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
                            <div class="card" style="margin-bottom: 2rem;"><form class="admin-form" method="POST">
                                <input class="form-control" type="hidden" name="id" value="<?php echo $row['id']; ?></div>">
                                <input class="form-control" type="text" name="name" value="<?php echo $row['name']; ?></div>" required>
                                <input class="form-control" type="text" name="city" value="<?php echo $row['city']; ?></div>" required>
                                <input class="form-control" type="text" name="mobile" value="<?php echo $row['mobile']; ?></div>" required>
                                <input class="form-control" type="email" name="email" value="<?php echo $row['email']; ?></div>" required>
                                <input class="form-control" type="text" name="username" value="<?php echo $row['username']; ?></div>" required>
                                <input class="form-control" type="password" name="password" value="<?php echo $row['password']; ?></div>" required>
                                <input class="form-control" type="text" name="security_question" value="<?php echo $row['security_question']; ?></div>" required>
                                <input class="form-control" type="text" name="security_answer" value="<?php echo $row['security_answer']; ?></div>" required>
                                <button type="submit" name="update_user">Update</button>
                            </form></div>
                            <!-- Delete User Form -->
                            <div class="card" style="margin-bottom: 2rem;"><form class="admin-form" method="POST">
                                <input class="form-control" type="hidden" name="id" value="<?php echo $row['id']; ?></div>">
                                <button type="submit" name="delete_user">Delete</button>
                            </form></div>
                        </td>
                    </tr>
                <?php endwhile; ?>
            </tbody>
        </table></div>
    </div>
</div>
<?php include 'includes/footer.php'; ?>
