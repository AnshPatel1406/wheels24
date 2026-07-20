<?php
session_start();
include '../config/db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['add_user'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $membership_type = $_POST['membership_type'];
        $username = $_POST['username'] ?? '';
        $password = $_POST['password'] ?? '';
        $query = "INSERT INTO users (name, email, username, password) VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ssss", $name, $email, $username, $password);
        $stmt->execute();
        $stmt->close();
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

<?php include 'includes/header.php'; ?>
<div class="fade-in-up">

<div class="admin-header"><h1>Manage Members</h1></div>
<div class="admin-table-container"><table class="admin-table">
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
            <div class="card" style="margin-bottom: 2rem;"><form class="admin-form" method="POST">
                <input class="form-control" type="hidden" name="id" value="<?= $row['member_id'] ?></div>">
                <button type="submit" name="delete_user">Delete</button>
            </form></div>
        </td>
    </tr>
    <?php } ?>
</table></div>



</div>
<?php include 'includes/footer.php'; ?>
