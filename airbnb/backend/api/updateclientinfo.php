<?php
    //renew client info
    $cliId = isset($_POST['cliId']) ? $_POST['cliId'] : "" ;
    $cliFirstname = isset($_POST['cliFirstname']) ? $_POST['cliFirstname'] : "" ;
    $cliLastname = isset($_POST['cliLastname']) ? $_POST['cliLastname'] : "" ;
    $cliEmail = isset($_POST['cliEmail']) ? $_POST['cliEmail'] : "" ;
    $cliLevel = isset($_POST['cliLevel']) ? $_POST['cliLevel'] : "" ;


    include('../db/db.php');

    $res = array("error"=>false);
    $action = "UPDATECLIENT";

    if( $action = "UPDATECLIENT"){
        $conn->query("set names utf8");

        $result = $conn->query("UPDATE `t_client` SET `clientemail`='$cliEmail',`firstname`='$cliFirstname',`lastname`='$cliLastname',`level`='$cliLevel' WHERE `id` = '$cliId'");

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
