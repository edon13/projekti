<?php
        
        $hostname = '127.0.0.1';
        $username = 'root';
        $password = [null];
        $database = 'booknow';

     
        $conn = new mysqli($hostname, $username, $password, $database);

       
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        $conn->close();
        ?>