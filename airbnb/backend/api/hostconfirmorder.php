<?php
        //import db connect files;
        include('../db/db.php');

        $id = isset($_POST['id']) ? $_POST['id'] : "" ;
     
        //2.构建接口
        $action = "BOOKING";
        $res = array("error"=>false);
    
    
        //获取数据接口
        if( $action == "BOOKING"){
            //$conn->query("set names utf8");
            //读取数据方法
            $result = $conn->query("UPDATE `t_booking` SET `status`='confirm' WHERE `id` = '$id'");
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
        die();
?>