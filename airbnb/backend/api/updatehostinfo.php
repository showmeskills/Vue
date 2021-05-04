<?php
    //renew client info
    $hostId = isset($_POST['hostId']) ? $_POST['hostId'] : "" ;
    $hostFirstname = isset($_POST['hostFirstname']) ? $_POST['hostFirstname'] : "" ;
    $hostLastname = isset($_POST['hostLastname']) ? $_POST['hostLastname'] : "" ;
    $hostEmail = isset($_POST['hostEmail']) ? $_POST['hostEmail'] : "" ;
    $hostLevel = isset($_POST['hostLevel']) ? $_POST['hostLevel'] : "" ;
    $hostABN = isset($_POST['hostABN']) ? $_POST['hostABN'] : "" ;


    include('../db/db.php');

    $res = array("error"=>false);
    $action = "UPDATECLIENT";

    if( $action = "UPDATECLIENT"){
        $conn->query("set names utf8");

        $result = $conn->query("UPDATE `t_host` SET `hostemail`='$hostEmail',`firstname`='$hostFirstname',`lastname`='$hostLastname',
        `level`='$hostLevel', `abn`='$hostABN' WHERE `id` = '$hostId'");

        if($result){
            $res["status"] = 0;
            $res["message"] = "Update Successfully";
        }else{
            $res["error"] = true;
            $res["status"] = 1;
            $res["message"] = "Update Failed";
        }

    }

    echo json_encode($res);
    //close db
    $conn->close();  
   
?>
