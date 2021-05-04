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
    //return data is json
    header("Content-type:application-json");
    //resolve cross domain
    header('Access-Control-Allow-Origin:*');
    //return data to frontend
?>