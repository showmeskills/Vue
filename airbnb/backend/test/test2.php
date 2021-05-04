<?php
    //error_reporting(0);
    $firstname = isset($_POST['firstname']) ? $_POST['firstname'] : "" ;
    $lastname = isset($_POST['lastname']) ? $_POST['lastname'] : "" ;
    $pwd = isset($_POST['checkPwd']) ? $_POST['checkPwd'] : "" ;
    $rePwd = isset($_POST['doubleCheckPwd']) ? $_POST['doubleCheckPwd'] : "" ;
    $pwdMd5 = md5($pwd);
    $repwdMd5 = md5($rePwd);
    $email = isset($_POST['checkEmail']) ? $_POST['checkEmail'] : "" ;
    //链接文件
    include("./db/db.php");

    $res = array("error"=>false);
    $action = "REGISTER";

    if($action = "REGISTER"){
        $conn->query("set names utf8");

        //exec sql insert info to database
        $result = $conn->query("INSERT INTO `t_client` (`clientemail`,`password`,`pwd`,`firstname`,`lastname`) 
        VALUES ('$email','$pwdMd5','$repwdMd5','$firstname','$lastname') ");
        //sql insert will return a boolean,so if here
        if($result){
            $res["status"] = 0;
            $res["message"] = "Successfully";
        }else{
            $res["error"] = true;
            $res["status"] = 1;
            $res["message"] = "Failed";
        }
    }
    echo json_encode($res);
    //close db
    $conn->close();  
?>