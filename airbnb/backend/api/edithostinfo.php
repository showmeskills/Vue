<?php
    error_reporting(0);
    $id = isset($_POST["id"]) ? $_POST["id"] : "" ;

    include("../db/db.php");

    $res = array("error"=>false);
    $action = "EDITHOST";

    if( $action = "EDITHOST"){
       // $conn->query("set names utf8");
        $result = $conn->query("SELECT * FROM `t_host` WHERE `id` = '$id'");

        $hostInfo = array();
            while($row = $result->fetch_assoc()){
                array_push($hostInfo,$row);
        }
        if(sizeof($hostInfo) > 0){
            $res['hostInfo'] =  $hostInfo ;
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