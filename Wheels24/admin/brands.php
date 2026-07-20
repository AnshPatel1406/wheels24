<?php
// Include database connection
include '../config/db.php';

// Fetch all tables in the database
$tables = [];
$result = $conn->query("SHOW TABLES");
while ($row = $result->fetch_array()) {
    $tables[] = $row[0];
}

// Handle table selection
$selectedTable = $_GET['table'] ?? null;
if ($selectedTable && !in_array($selectedTable, $tables)) {
    $selectedTable = null;
}

// Handle add operation
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add'])) {
    if ($selectedTable) {
        $columns = array_keys($_POST['values']);
        $values = array_values($_POST['values']);
        $placeholders = implode(',', array_fill(0, count($values), '?'));
        $query = "INSERT INTO $selectedTable (" . implode(',', $columns) . ") VALUES ($placeholders)";
        $stmt = $conn->prepare($query);

        // Determine parameter types based on the selected table
        if ($selectedTable === 'brands') {
            $stmt->bind_param(str_repeat('s', count($values)), ...$values);
        } elseif ($selectedTable === 'cars') {
            $stmt->bind_param(str_repeat('s', count($values)), ...$values);
        } elseif ($selectedTable === 'variants') {
            $stmt->bind_param(str_repeat('s', count($values)), ...$values);
        } elseif ($selectedTable === 'cons') {
            $stmt->bind_param(str_repeat('s', count($values)), ...$values);
        } elseif ($selectedTable === 'exteriorimages') {
            $stmt->bind_param(str_repeat('s', count($values)), ...$values);
        } elseif ($selectedTable === 'features') {
            $stmt->bind_param(str_repeat('s', count($values)), ...$values);
        } elseif ($selectedTable === 'interiorimages') {
            $stmt->bind_param(str_repeat('s', count($values)), ...$values);
        } elseif ($selectedTable === 'members') {
            $stmt->bind_param(str_repeat('s', count($values)), ...$values);
        } elseif ($selectedTable === 'mileage') {
            $stmt->bind_param(str_repeat('s', count($values)), ...$values);
        } elseif ($selectedTable === 'payments') {
            $stmt->bind_param(str_repeat('s', count($values)), ...$values);
        } elseif ($selectedTable === 'pros') {
            $stmt->bind_param(str_repeat('s', count($values)), ...$values);
        } elseif ($selectedTable === 'specifications') {
            $stmt->bind_param(str_repeat('s', count($values)), ...$values);
        } else {
            // Default case for other tables
            $stmt->bind_param(str_repeat('s', count($values)), ...$values);
        }

        $stmt->execute();
        $stmt->close();
    }
}

// Handle delete operation
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete'])) {
    $id = $_POST['id'];
    if ($selectedTable === 'brands') {
        $stmt = $conn->prepare("DELETE FROM $selectedTable WHERE brand_id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $stmt->close();
    } elseif ($selectedTable === 'cars') {
        // Custom logic for 'cars' table
        $stmt = $conn->prepare("DELETE FROM $selectedTable WHERE car_id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $stmt->close();
        }
     
        else if ($selectedTable === 'variants') {
            // Custom logic for 'variants' table
            $stmt = $conn->prepare("DELETE FROM $selectedTable WHERE car_id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $stmt->close();
        } else if ($selectedTable === 'cons') {
            $stmt = $conn->prepare("DELETE FROM $selectedTable WHERE car_id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $stmt->close();
        } else if ($selectedTable === 'exteriorimages') {
            $stmt = $conn->prepare("DELETE FROM $selectedTable WHERE car_id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $stmt->close();
        } else if ($selectedTable === 'features') {
            $stmt = $conn->prepare("DELETE FROM $selectedTable WHERE car_id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $stmt->close();
        } else if ($selectedTable === 'interiorimages') {
            $stmt = $conn->prepare("DELETE FROM $selectedTable WHERE car_id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $stmt->close();
        } else if ($selectedTable === 'members') {
            $stmt = $conn->prepare("DELETE FROM $selectedTable WHERE member_id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $stmt->close();
        } else if ($selectedTable === 'mileage') {
            $stmt = $conn->prepare("DELETE FROM $selectedTable WHERE car_id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $stmt->close();
        } else if ($selectedTable === 'payments') {
            $stmt = $conn->prepare("DELETE FROM $selectedTable WHERE payment_id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $stmt->close();
        } else if ($selectedTable === 'pros') {
            $stmt = $conn->prepare("DELETE FROM $selectedTable WHERE car_id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $stmt->close();
        } else if ($selectedTable === 'specifications') {
            $stmt = $conn->prepare("DELETE FROM $selectedTable WHERE car_id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $stmt->close(); 
        } else if ($selectedTable === 'colors') {
            $stmt = $conn->prepare("DELETE FROM $selectedTable WHERE car_id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $stmt->close();
        } else {
            // For all tables except 'brands', assume 'car_id' is the primary key
            $stmt = $conn->prepare("DELETE FROM $selectedTable WHERE car_id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $stmt->close();
        }
        }
    ?>

<?php include 'includes/header.php'; ?>
<div class="fade-in-up">
    <div class="admin-header"><h1>Manage Database</h1></div>
    <div class="card" style="margin-bottom: 2rem;"><form class="admin-form" method="get">
        <div><label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;" for="table">Select Table:</label>
        <select class="form-control" name="table" id="table" onchange="this.form.submit()">
            <option value="">--Select--</option>
            <?php foreach ($tables as $table): ?>
                <option value="<?= $table ?>" <?= $selectedTable === $table ? 'selected' : '' ?>><?= $table ?></option>
            <?php endforeach; ?>
        </select></div>
    </form></div>

    <?php if ($selectedTable): ?>
        <h2 style="margin-bottom: 1rem; color: var(--accent); font-size: 1.2rem;">Table: <?= $selectedTable ?></h2>
        <div class="admin-table-container"><table class="admin-table">
            <tr>
                <?php
                $columns = $conn->query("SHOW COLUMNS FROM $selectedTable");
                while ($col = $columns->fetch_assoc()) {
                    echo "<th>{$col['Field']}</th>";
                }
                ?>
                <th>Actions</th>
            </tr>
            <?php
            $rows = $conn->query("SELECT * FROM $selectedTable");
            while ($row = $rows->fetch_assoc()): ?>
                <tr>
                    <?php foreach ($row as $value): ?>
                        <td><?= $value ?></td>
                    <?php endforeach; ?>
                    <td class="actions">
                        <div class="card" style="margin-bottom: 2rem;"><form class="admin-form" method="post" style="display:inline;">
                            <input class="form-control" type="hidden" name="id" value="<?= $row[array_key_first($row)] ?></div>">
                            <button type="submit" name="delete" onclick="return confirm('Are you sure you want to delete this entry?');">Delete</button>
                        </form></div>
                    </td>
                </tr>
            <?php endwhile; ?>
        </table></div>
        <h3>Add New Row</h3>
        <div class="card" style="margin-bottom: 2rem;"><form class="admin-form" method="post">
            <?php
            // Fetch columns for the selected table
            $columns = $conn->query("SHOW COLUMNS FROM $selectedTable");
            while ($col = $columns->fetch_assoc()): ?>
            <div><label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;" for="<?= $col['Field'] ?>"><?= $col['Field'] ?>:</label>
            <input class="form-control" type="text" name="values[<?= $col['Field'] ?></div>]" id="<?= $col['Field'] ?>" required>
            
            <?php endwhile; ?>
            <button type="submit" name="add">Add</button>
        </form></div>
    <?php endif; ?>
</div>
<?php include 'includes/footer.php'; ?>
