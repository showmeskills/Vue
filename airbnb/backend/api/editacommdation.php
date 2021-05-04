<?php
    error_reporting(0);
    $id = isset($_POST["id"]) ? $_POST["id"] : "" ;

    include("../db/db.php");

    $res = array("error"=>false);
    $action = "EDIT";
    if( $action = "EDIT"){
        $conn->query("set names utf8");
        $result = $conn->query("SELECT * FROM `t_accommondation` WHERE `id` = '$id'");

        $edit = array();
            while($row = $result->fetch_assoc()){
                array_push($edit,$row);
        }
        if(sizeof($edit) > 0){
            $res['accomm'] =  $edit ;
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
