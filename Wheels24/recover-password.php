<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'), true);
    $username = $data['username'];
    $security_answer = $data['security_answer'];
    $new_password = password_hash($data['new_password'], PASSWORD_DEFAULT);

    $sql = "SELECT * FROM users WHERE username = ? AND security_answer = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $username, $security_answer);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $sql_update = "UPDATE users SET password = ? WHERE username = ?";
        $stmt_update = $conn->prepare($sql_update);
        $stmt_update->bind_param("ss", $new_password, $username);
        if ($stmt_update->execute() === TRUE) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Error updating password']);
        }
        $stmt_update->close();
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid username or security answer']);
    }

    $stmt->close();
    $conn->close();
}
?>
