<?php
    //select all client
    error_reporting(0);

    include('../db/db.php');
   
    $action = "COLLECTCLIENTINFO";
    $res = array("error"=>false);

    if($action = "COLLECTCLIENTINFO"){
        $result = $conn->query("SELECT * FROM `t_client`");
            $client = array();
            while($row = $result->fetch_assoc()){
                array_push($client,$row);
            }
            if(sizeof($client) > 0){
                $res['client'] =  $client;
                $res["status"] = 0;
                $res["message"] = "Successfully";
            }else{
                $res["error"] = true;
                $res["status"] = 1;
                $res["message"] = "Failed";
            }
    }
    
  
    echo json_encode($res);
    $conn->close();
    die();
?>