<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"));

if ($data && $data->name && $data->message) {
    $name = $conn->real_escape_string($data->name);
    $message = $conn->real_escape_string($data->message);

    $sql = "INSERT INTO your_table_name (name, message) VALUES ('$name', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false]);
    }
} else {
    echo json_encode(["success" => false]);
}

$conn->close();
?>
