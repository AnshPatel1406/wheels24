<?php
mysqli_report(MYSQLI_REPORT_OFF); // Disable strict exception reporting to avoid fatal stack traces

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "wheels24";

$conn = @new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    // Optionally log this error, but we set $conn to null to handle it gracefully in the UI
    $conn = null;
}
?>
