<?php
    $hostname = '127.0.0.1';
    $username = 'root';
    $password = '';
    $database = 'booknow';

    try {
        $pdo = new PDO("mysql:host=$hostname;dbname=$database", $username, $password, array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ));
        echo "Connection succsess!";
        

        

    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>
