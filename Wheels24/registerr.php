<?php
include 'config/db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $city = $_POST['city'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $security_question = $_POST['security_question'];
    $security_answer = $_POST['security_answer'];

    $sql = "INSERT INTO users (name, city, mobile, email, username, password, security_question, security_answer) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssssss", $name, $city, $mobile, $email, $username, $password, $security_question, $security_answer);

    if ($stmt->execute() === TRUE) {
        echo json_encode(['success' => true, 'message' => 'New record created successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error: ' . $stmt->error]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>
