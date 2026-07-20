<?php
require 'config/db.php'; // Include your database connection file

// Fetch car list for dropdowns
$carsQuery = "SELECT car_id, name FROM cars";
$cars = [];
if ($conn) {
    $carsResult = $conn->query($carsQuery);
    if ($carsResult) {
        $cars = $carsResult->fetch_all(MYSQLI_ASSOC);
    }
}

$car1 = $car2 = null;
$comparisonResult = null;

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $car1 = $_GET['car1'] ?? null;
    $car2 = $_GET['car2'] ?? null;

    if ($car1 && $car2 && $car1 !== $car2 && $conn) {
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
            if ($result) {
                $comparisonResult = $result->fetch_assoc();
            }
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
    <title>Compare Cars - Wheels24</title>
    <!-- CSS is loaded in header.php -->
    <style>
        .compare-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 2rem;
            background: var(--bg-card);
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-md);
        }
        .compare-table th, .compare-table td {
            padding: 1.5rem;
            text-align: left;
            border-bottom: 1px solid var(--border-color);
        }
        .compare-table th {
            background: rgba(255, 255, 255, 0.05);
            font-weight: 600;
            color: var(--text-primary);
        }
        .compare-table tr:last-child td {
            border-bottom: none;
        }
        .compare-table td {
            color: var(--text-secondary);
        }
        .compare-table td:first-child {
            font-weight: 600;
            color: var(--text-primary);
            background: rgba(255, 255, 255, 0.02);
        }
        .compare-form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr auto;
            gap: 1rem;
            align-items: flex-end;
            margin-bottom: 2rem;
        }
        @media (max-width: 768px) {
            .compare-form-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body class="fade-in">
    <?php include 'includes/header.php'; ?>
    
    <main class="container section" style="min-height: 80vh; padding-top: 8rem;">
        <div class="text-center">
            <h2 class="section-title">Compare Cars</h2>
            <p class="section-subtitle">Select two models to compare their features and specifications side-by-side.</p>
        </div>
        
        <div class="card fade-in-up">
            <form method="GET" class="compare-form-grid">
                <div>
                    <label for="car1" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Select First Car</label>
                    <select name="car1" id="car1" class="form-control" required>
                        <option value="">Choose a Car</option>
                        <?php foreach ($cars as $car) { ?>
                            <option value="<?php echo $car['car_id']; ?>" <?php echo ($car1 == $car['car_id']) ? 'selected' : ''; ?>> <?php echo htmlspecialchars($car['name']); ?> </option>
                        <?php } ?>
                    </select>
                </div>
                <div>
                    <label for="car2" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Select Second Car</label>
                    <select name="car2" id="car2" class="form-control" required>
                        <option value="">Choose a Car</option>
                        <?php foreach ($cars as $car) { ?>
                            <option value="<?php echo $car['car_id']; ?>" <?php echo ($car2 == $car['car_id']) ? 'selected' : ''; ?>> <?php echo htmlspecialchars($car['name']); ?> </option>
                        <?php } ?>
                    </select>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary" style="width: 100%; height: 50px;">Compare</button>
                </div>
            </form>

            <?php if ($comparisonResult): ?>
                <div class="fade-in-up" style="animation-delay: 0.2s;">
                    <h3 class="text-center" style="margin-top: 3rem; color: var(--accent);">Comparison Results</h3>
                    
                    <div style="overflow-x: auto;">
                        <table class="compare-table">
                            <thead>
                                <tr>
                                    <th style="width: 20%;">Feature</th>
                                    <th style="width: 40%; color: var(--accent); font-size: 1.2rem;"><?php echo htmlspecialchars($comparisonResult['car1_name']); ?></th>
                                    <th style="width: 40%; color: var(--accent); font-size: 1.2rem;"><?php echo htmlspecialchars($comparisonResult['car2_name']); ?></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Specifications</td>
                                    <td><?php echo nl2br(htmlspecialchars($comparisonResult['car1_specs'])); ?></td>
                                    <td><?php echo nl2br(htmlspecialchars($comparisonResult['car2_specs'])); ?></td>
                                </tr>
                                <tr>
                                    <td>Transmission</td>
                                    <td><?php echo htmlspecialchars($comparisonResult['car1_transmission']); ?></td>
                                    <td><?php echo htmlspecialchars($comparisonResult['car2_transmission']); ?></td>
                                </tr>
                                <tr>
                                    <td>Fuel Type</td>
                                    <td><?php echo htmlspecialchars($comparisonResult['car1_fuel']); ?></td>
                                    <td><?php echo htmlspecialchars($comparisonResult['car2_fuel']); ?></td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td style="font-weight: 600; color: var(--text-primary);"><?php echo htmlspecialchars($comparisonResult['car1_price']); ?></td>
                                    <td style="font-weight: 600; color: var(--text-primary);"><?php echo htmlspecialchars($comparisonResult['car2_price']); ?></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            <?php elseif ($car1 && $car2 && $car1 === $car2): ?>
                <div class="text-center" style="margin-top: 2rem; color: #ef4444;">
                    Please select two different cars to compare.
                </div>
            <?php endif; ?>
        </div>
    </main>

    <?php include 'includes/footer.php'; ?>
</body>
</html>
