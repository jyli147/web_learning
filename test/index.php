<?php

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

// Массив данных (в реальной ситуации можно получить данные из базы данных)
$data = [
    ['first_name' => 'Иван', 'last_name' => 'Петров'],
    ['first_name' => 'Антон', 'last_name' => 'Иванов'],
    ['first_name' => 'Петр', 'last_name' => 'Иванов'],
    ['first_name' => 'Ирина', 'last_name' => 'Смирнова']
];

// Получение строки поиска из GET параметров
$query = isset($_GET['query']) ? $_GET['query'] : '';

// Фильтрация данных по запросу
$results = array_filter($data, function ($item) use ($query) {
    $full_name = $item['first_name'] . ' ' . $item['last_name'];
    return stripos($full_name, $query) !== false;
});

// Возвращаем отфильтрованные данные в формате JSON
echo json_encode(array_values($results));