<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "shop-db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "
    SELECT c.title, i.id, i.name, i.image_url AS imageUrl, i.price
    FROM categories c
    JOIN items i ON c.id = i.category_id
    ORDER BY c.title, i.id
";
$result = $conn->query($sql);

$data = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $title = $row['title'];
        $item = [
            'id' => $row['id'],
            'name' => $row['name'],
            'imageUrl' => $row['imageUrl'],
            'price' => (float)$row['price']
        ];

        if (!isset($data[$title])) {
            $data[$title] = [
                'title' => $title,
                'items' => []
            ];
        }
        $data[$title]['items'][] = $item;
    }
}


echo json_encode(array_values($data));

$conn->close();
?>
