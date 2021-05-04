<?php
    //1.链接数据库
    $host = "localhost";
    $username="root";
    $passwd = "";
    $dbname = 'unibnb';
    $conn = new mysqli($host,$username,$passwd,$dbname);
    if($conn->connect_error){
        die("database can\'t connect to database");
    }
   
?>