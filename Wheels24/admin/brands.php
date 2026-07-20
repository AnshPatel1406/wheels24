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

<!DOCTYPE html>
<html>
<head>
    <title>Manage Database</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f9;
            color: #333;
        }
        h1, h2, h3 {
            color: #4CAF50;
        }
        form {
            margin-bottom: 20px;
        }
        select, input[type="text"], button {
            padding: 10px;
            margin: 5px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
            max-width: 300px;
        }
        button {
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #4CAF50;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        .actions button {
            background-color: #f44336;
            margin: 0 5px;
        }
        .actions button:hover {
            background-color: #d32f2f;
        }
    </style>
</head>
<body>
    <h1>Manage Database</h1>
    <form method="get">
        <label for="table">Select Table:</label>
        <select name="table" id="table" onchange="this.form.submit()">
            <option value="">--Select--</option>
            <?php foreach ($tables as $table): ?>
                <option value="<?= $table ?>" <?= $selectedTable === $table ? 'selected' : '' ?>><?= $table ?></option>
            <?php endforeach; ?>
        </select>
    </form>

    <?php if ($selectedTable): ?>
        <h2>Table: <?= $selectedTable ?></h2>
        <table>
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
                        <form method="post" style="display:inline;">
                            <input type="hidden" name="id" value="<?= $row[array_key_first($row)] ?>">
                            <button type="submit" name="delete" onclick="return confirm('Are you sure you want to delete this entry?');">Delete</button>
                        </form>
                    </td>
                </tr>
            <?php endwhile; ?>
        </table>
        <h3>Add New Row</h3>
        <form method="post">
            <?php
            // Fetch columns for the selected table
            $columns = $conn->query("SHOW COLUMNS FROM $selectedTable");
            while ($col = $columns->fetch_assoc()): ?>
            <label for="<?= $col['Field'] ?>"><?= $col['Field'] ?>:</label>
            <input type="text" name="values[<?= $col['Field'] ?>]" id="<?= $col['Field'] ?>" required>
            <br>
            <?php endwhile; ?>
            <button type="submit" name="add">Add</button>
        </form>
    <?php endif; ?>
</body>
</html>
