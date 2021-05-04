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
    //2.构建接口
    $action = "accommondation";
    $res = array("error"=>false,"success"=>true);


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
    //增加数据
    if($action == "create"){
        $adminEmail = $_POST["username"];
        $pwd = $_POST["password"];
    }

    //更新数据
    if($action == "update"){

    }
    //删除数据
    if($action == "delete"){

    }
    header("Content-type:application-json");
    header('Access-Control-Allow-Origin:*');
    //返回数据
    echo json_encode($res);
    $conn->close();
    die();
?>