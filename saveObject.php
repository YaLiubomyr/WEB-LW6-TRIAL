<?php

header('Content-Type: application/json');

// Отримання JSON-даних з запиту
$data = json_decode(file_get_contents('php://input'), true);

// Збереження отриманих даних в файлі або базі даних
// В даному випадку, додаємо декілька додаткових даних, які можуть бути важливими на сервері
$data['timestamp'] = time();
$data['saved'] = true;

// Відправка відповіді на клієнт
echo json_encode($data);
?>
