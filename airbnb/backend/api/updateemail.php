<?php
        //renew email box status
        $id = isset($_POST['id']) ? $_POST['id'] : "" ;
        $status = isset($_POST['status']) ? $_POST['status'] : "" ;
    
    
        include('../db/db.php');
    
        $res = array("error"=>false);
        $action = "UPDATEEMAILBOX";
    
        if( $action = "UPDATEEMAILBOX"){
            $conn->query("set names utf8");
    
            $result = $conn->query("UPDATE `t_emailbox` SET `status`='$status' WHERE `id` = '$id'");
    
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