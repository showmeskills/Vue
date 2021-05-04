<?php
    //import db connect files;
    include('../db/db.php');
    //2.构建接口
    $action = "accommondation";
    $res = array("error"=>false);


    //获取数据接口
    if($action == "accommondation"){
        //$conn->query("set names utf8");
        //读取数据方法
        $result = $conn->query("SELECT * FROM `t_accommondation`");
        //打印查看是否有数据
        //var_dump($result);
        $accommondations = array();
        //循环获取数据 定义一个变量接收每一条数据
        while($row = $result->fetch_assoc()){
            array_push($accommondations,$row);
        }
        //var_dump($accommondations);
        $res['accommondations'] = $accommondations;
    }
    echo json_encode($res);
    //close db
    $conn->close();
    die();
?>