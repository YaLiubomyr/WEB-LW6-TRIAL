<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    // Save data to your chosen format (e.g., file, database, etc.)
    // For demonstration, let's save it to a file named data.json
    file_put_contents('data.json', json_encode($data));

    // Respond to the client
    header('Content-Type: application/json');
    echo json_encode(['status' => 'success']);
} else {
    header('HTTP/1.1 405 Method Not Allowed');
    header('Allow: POST');
    echo json_encode(['status' => 'error', 'message' => 'Method Not Allowed']);
}
?>
