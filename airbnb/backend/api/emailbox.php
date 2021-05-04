<?php
    //import db connect files;
    include('../db/db.php');
    //2.构建接口
    $action = "emailbox";
    $res = array("error"=>false);


    //获取数据接口
    if($action == "emailbox"){
        //$conn->query("set names utf8");
        //读取数据方法
        $result = $conn->query("SELECT * FROM `t_emailbox`");
        //打印查看是否有数据
        //var_dump($result);
        $email = array();
        //循环获取数据 定义一个变量接收每一条数据
        while($row = $result->fetch_assoc()){
            array_push($email,$row);
        }
        //var_dump($accommondations);
        $res['email'] = $email;
    }
    echo json_encode($res);
    //close db
    $conn->close();
    die();
?>