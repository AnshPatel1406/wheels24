<?php
require 'config/db.php'; // Include your database connection file

// Fetch car list for dropdowns
$carsQuery = "SELECT car_id, name FROM cars";
$carsResult = $conn->query($carsQuery);
$cars = $carsResult->fetch_all(MYSQLI_ASSOC);

$car1 = $car2 = null;
$comparisonResult = null;

if ($_SERVER['REQUEST_METHOD'] === 'GET') { // Changed method to GET
    $car1 = $_GET['car1'] ?? null;
    $car2 = $_GET['car2'] ?? null;

    if ($car1 && $car2 && $car1 !== $car2) {
        $compareQuery = "
            SELECT 
            c1.name AS car1_name, c2.name AS car2_name, 
            c1.specifications AS car1_specs, c2.specifications AS car2_specs,
            c1.transmission AS car1_transmission, c2.transmission AS car2_transmission,
            c1.fuel_type AS car1_fuel, c2.fuel_type AS car2_fuel,
            c1.price AS car1_price, c2.price AS car2_price
            FROM cars c1
            JOIN cars c2 ON c2.car_id = ?
            WHERE c1.car_id = ?";

        if ($stmt = $conn->prepare($compareQuery)) {
            $stmt->bind_param("ii", $car2, $car1);
            $stmt->execute();
            $result = $stmt->get_result();
            $comparisonResult = $result->fetch_assoc();
            $stmt->close();
            }
        }
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Car Comparison</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <h2 class="text-center">Compare Cars</h2>
        <form method="POST" class="row g-3">
            <div class="col-md-5">
                <label for="car1" class="form-label">Select First Car</label>
                <select name="car1" id="car1" class="form-select" required>
                    <option value="">Choose a Car</option>
                    <?php foreach ($cars as $car) { ?>
                        <option value="<?php echo $car['car_id']; ?>"> <?php echo $car['name']; ?> </option>
                    <?php } ?>
                </select>
            </div>
            <div class="col-md-5">
                <label for="car2" class="form-label">Select Second Car</label>
                <select name="car2" id="car2" class="form-select" required>
                    <option value="">Choose a Car</option>
                    <?php foreach ($cars as $car) { ?>
                        <option value="<?php echo $car['car_id']; ?>"> <?php echo $car['name']; ?> </option>
                    <?php } ?>
                </select>
            </div>
            <div class="col-md-2 align-self-end">
                <button type="submit" class="btn btn-primary w-100">Compare</button>
            </div>
        </form>

        <?php if ($comparisonResult): ?>
        <div class="mt-4 p-4 border rounded bg-light">
            <h3 class="text-center">Comparison Results</h3>
            <table class="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th><?php echo $comparisonResult['car1_name']; ?></th>
                        <th><?php echo $comparisonResult['car2_name']; ?></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Specifications</td>
                        <td><?php echo $comparisonResult['car1_specs']; ?></td>
                        <td><?php echo $comparisonResult['car2_specs']; ?></td>
                    </tr>
                    <tr>
                        <td>Transmission</td>
                        <td><?php echo $comparisonResult['car1_transmission']; ?></td>
                        <td><?php echo $comparisonResult['car2_transmission']; ?></td>
                    </tr>
                    <tr>
                        <td>Fuel Type</td>
                        <td><?php echo $comparisonResult['car1_fuel']; ?></td>
                        <td><?php echo $comparisonResult['car2_fuel']; ?></td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td><?php echo $comparisonResult['car1_price']; ?></td>
                        <td><?php echo $comparisonResult['car2_price']; ?></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <?php endif; ?>
    </div>
</body>
</html>
