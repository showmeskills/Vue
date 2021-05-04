<?php
    //select all client
    error_reporting(0);

    include('../db/db.php');
   
    $action = "COLLECTHOSTINFO";
    $res = array("error"=>false);

    if($action = "COLLECTHOSTINFO"){
        $result = $conn->query("SELECT * FROM `t_host`");
            $host= array();
            while($row = $result->fetch_assoc()){
                array_push($host,$row);
            }
            if(sizeof($host) > 0){
                $res['host'] =  $host;
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