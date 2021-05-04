<?php
    //import db connect files;
    include('../db/db.php');

    $email = isset($_POST['email']) ? $_POST['email'] : "" ;
    $firstname = isset($_POST['firstname']) ? $_POST['firstname'] : "" ;
    //2.构建接口
    $action = "BOOKING";
    $res = array("error"=>false);


    //获取数据接口
    if( $action == "BOOKING"){
        //$conn->query("set names utf8");
        //读取数据方法
        $result = $conn->query("SELECT * FROM `t_booking` WHERE `email` = '$email' AND `firstname` = '$firstname'");
        //打印查看是否有数据
        //var_dump($result);
        $booking = array();
        //循环获取数据 定义一个变量接收每一条数据
        while($row = $result->fetch_assoc()){
            array_push($booking,$row);
        }
        //var_dump($accommondations);
        $res['booking'] = $booking;
    }
    echo json_encode($res);
    //close db
    $conn->close();
    die();
?>