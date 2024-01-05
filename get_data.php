<?php
// Assume you have stored data in the file data.json
$data = json_decode(file_get_contents('data.json'), true);

header('Content-Type: application/json');
echo json_encode($data);
?>
