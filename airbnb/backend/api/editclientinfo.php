<?php
    error_reporting(0);
    $id = isset($_POST["id"]) ? $_POST["id"] : "" ;

    include("../db/db.php");

    $res = array("error"=>false);
    $action = "EDITCLIENT";

    if( $action = "EDITCLIENT"){
       // $conn->query("set names utf8");
        $result = $conn->query("SELECT * FROM `t_client` WHERE `id` = '$id'");

        $cliInfo = array();
            while($row = $result->fetch_assoc()){
                array_push($cliInfo,$row);
        }
        if(sizeof($cliInfo) > 0){
            $res['cliInfo'] =  $cliInfo ;
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