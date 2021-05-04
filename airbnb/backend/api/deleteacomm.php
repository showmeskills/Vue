<?php
    // delete accommodation list
    $id = isset($_POST["id"]) ? $_POST["id"] : "" ;

    include("../db/db.php");

    $action = "DELETEACCOM";
    $res = array("error"=>false);

    if($action = "DELETEACCOM"){
        $result = $conn->query("DELETE FROM `t_accommondation` WHERE `id` = '$id'");
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