<?php
    // delete client;
    $id = isset($_POST["id"]) ? $_POST["id"] : "" ;

    include("../db/db.php");

    $action = "DELETECLIENT";
    $res = array("error"=>false);

    if($action = "DELETECLIENT"){
        $conn->query("set names utf8");
        $result = $conn->query("DELETE FROM `t_client` WHERE `id` = '$id'");
        if($result){
            $res["status"] = 0;
            $res["message"] = "delete Successfully";
        }else{
            $res["error"] = true;
            $res["status"] = 1;
            $res["message"] = "delete Failed";
        }
    }

    echo json_encode($res);
    //close db
    $conn->close();  
?>
