<?php
// Отримуємо дані від клієнта
$data = json_decode(file_get_contents("php://input"), true);

// Здійснюємо збереження даних, наприклад, в текстовий файл
file_put_contents('carouselData.txt', json_encode($data));

// Відповідаємо успішним статусом
header('Content-Type: application/json');
echo json_encode(['status' => 'success']);
?>
