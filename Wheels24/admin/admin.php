<?php
// Include the database connection file
include '../config/db.php';

// Handle form submission for adding a new car
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['add_car'])) {
    $brand_id = $_POST['brand_id'];
    $name = $_POST['name'];
    $type = $_POST['type'];
    $description = $_POST['description'];
    $image = $_POST['image'];
    $brief = $_POST['brief'];
    $price = $_POST['price'];

    // Insert new car
    $sql = "INSERT INTO cars (brand_id, name, type, description, image, brief, price) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("issssss", $brand_id, $name, $type, $description, $image, $brief, $price);

    if ($stmt->execute()) {
        echo "New car added successfully";
    } else {
        echo "Error adding car: " . $conn->error;
    }

    $stmt->close();
}

// Handle update of a car
if (isset($_POST['update_car'])) {
    $car_id = $_POST['car_id'];
    $brand_id = $_POST['brand_id'];
    $name = $_POST['name'];
    $type = $_POST['type'];
    $description = $_POST['description'];
    $image = $_POST['image'];
    $brief = $_POST['brief'];
    $price = $_POST['price'];

    // Update car
    $sql = "UPDATE cars SET brand_id=?, name=?, type=?, description=?, image=?, brief=?, price=? WHERE car_id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("issssssi", $brand_id, $name, $type, $description, $image, $brief, $price, $car_id);

    if ($stmt->execute()) {
        echo "Car updated successfully";
    } else {
        echo "Error updating car: " . $conn->error;
    }

    $stmt->close();
}

// Handle deletion of a car
if (isset($_GET['delete_id'])) {
    $car_id = $_GET['delete_id'];

    // Delete car
    $sql = "DELETE FROM cars WHERE car_id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $car_id);

    if ($stmt->execute()) {
        echo "Car deleted successfully";
    } else {
        echo "Error deleting car: " . $conn->error;
    }

    $stmt->close();
}

// Fetch all cars
$sql = "SELECT * FROM cars";
$result = $conn->query($sql);
?>

<?php include 'includes/header.php'; ?>
<div class="fade-in-up">
    <div class="admin-header"><h1>Admin - Manage Cars</h1></div>

    <h2 style="margin-bottom: 1rem; color: var(--accent); font-size: 1.2rem;">Add New Car</h2>
    <div class="card" style="margin-bottom: 2rem;"><form class="admin-form" action="" method="post">
        <div><label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;" for="brand_id">Brand ID:</label>
        <input class="form-control" type="number" name="brand_id" id="brand_id" required></div>
        
        <div><label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;" for="name">Name:</label>
        <input class="form-control" type="text" name="name" id="name" required></div>
        
        <div><label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;" for="type">Type:</label>
        <input class="form-control" type="text" name="type" id="type" required></div>
        
        <div><label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;" for="description">Description:</label>
        <textarea class="form-control" name="description" id="description" required></textarea></div>
        
        <div><label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;" for="image">Image URL:</label>
        <input class="form-control" type="text" name="image" id="image" required></div>
        
        <div><label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;" for="brief">Brief:</label>
        <textarea class="form-control" name="brief" id="brief" required></textarea></div>
        
        <div><label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;" for="price">Price:</label>
        <input class="form-control" type="text" name="price" id="price" required></div>
        
        <input type="submit" class="btn btn-primary" style="align-self: end;" name="add_car" value="Add Car">
    </form></div>

    <h2 style="margin-bottom: 1rem; color: var(--accent); font-size: 1.2rem;">Existing Cars</h2>
    <div class="admin-table-container"><table class="admin-table">
        <tr>
            <th>Car ID</th>
            <th>Brand ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Image</th>
            <th>Brief</th>
            <th>Price</th>
            <th>Actions</th>
        </tr>
        <?php while ($car = $result->fetch_assoc()): ?>
        <tr>
            <td><?php echo $car['car_id']; ?></td>
            <td><?php echo $car['brand_id']; ?></td>
            <td><?php echo $car['name']; ?></td>
            <td><?php echo $car['type']; ?></td>
            <td><?php echo $car['description']; ?></td>
            <td><img src="<?php echo $car['image']; ?>" alt="Car Image" width="100"></td>
            <td><?php echo $car['brief']; ?></td>
            <td><?php echo $car['price']; ?></td>
            <td>
                <a href="admin_cars.php?edit_id=<?php echo $car['car_id']; ?>">Edit</a>
                <a href="?delete_id=<?php echo $car['car_id']; ?>" onclick="return confirm('Are you sure you want to delete this car?');">Delete</a>
            </td>
        </tr>
        <?php endwhile; ?>
    </table></div>

    <?php
    // Handle edit functionality
    if (isset($_GET['edit_id'])) {
        $edit_id = $_GET['edit_id'];
        $sql = "SELECT * FROM cars WHERE car_id=?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $edit_id);
        $stmt->execute();
        $result = $stmt->get_result();
        $car = $result->fetch_assoc();
    ?>
    <h2 style="margin-bottom: 1rem; color: var(--accent); font-size: 1.2rem;">Edit Car</h2>
    <div class="card" style="margin-bottom: 2rem;"><form class="admin-form" action="" method="post">
        <input class="form-control" type="hidden" name="car_id" value="<?php echo $car['car_id']; ?></div>">
        <div><label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;" for="brand_id">Brand ID:</label>
        <input class="form-control" type="number" name="brand_id" id="brand_id" value="<?php echo $car['brand_id']; ?></div>" required>
        
        <div><label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;" for="name">Name:</label>
        <input class="form-control" type="text" name="name" id="name" value="<?php echo $car['name']; ?></div>" required>
        
        <div><label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;" for="type">Type:</label>
        <input class="form-control" type="text" name="type" id="type" value="<?php echo $car['type']; ?></div>" required>
        
        <div><label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;" for="description">Description:</label>
        <textarea class="form-control" name="description" id="description" required><?php echo $car['description']; ?></textarea></div>
        
        <div><label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;" for="image">Image URL:</label>
        <input class="form-control" type="text" name="image" id="image" value="<?php echo $car['image']; ?></div>" required>
        
        <div><label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;" for="brief">Brief:</label>
        <textarea class="form-control" name="brief" id="brief" required><?php echo $car['brief']; ?></textarea></div>
        
        <div><label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;" for="price">Price:</label>
        <input class="form-control" type="text" name="price" id="price" value="<?php echo $car['price']; ?></div>" required>
        
        <input type="submit" class="btn btn-primary" style="align-self: end;" name="update_car" value="Update Car">
    </form></div>
    <?php
        $stmt->close();
    }
    ?>

    <?php
    // Close the database connection
    $conn->close();
    ?>
</div>
<?php include 'includes/footer.php'; ?>
