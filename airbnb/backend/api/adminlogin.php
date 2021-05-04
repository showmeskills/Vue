<?php
        // error_reporting(0);
        $email = isset($_POST['email']) ? $_POST['email'] : "" ;
        $pass = isset($_POST['password']) ? $_POST['password'] : "" ;

        //connect database file;
        include("../db/db.php");

        $res = array("error"=>false);
        $action = "ADMIN";

        if($action = "ADMIN"){
            //exec sql select info to database
            $result = $conn->query("SELECT * FROM `t_admin` WHERE `adminemail` = '$email' AND `password` = '$pass'");
          
                $admin = array();
                while($row = $result->fetch_assoc()){
                    array_push($admin ,$row);
                }
            if(sizeof($admin) > 0){
                $res['admin'] =  $admin ;
                $res['status'] = 0;
                $res['message'] = "Successfully";
            }else{
                $res['error'] = true;
                $res['admin'] =  $admin ;
                $res['status'] = 1;
                $res['message'] = 'Failed';
            }
        }
        echo json_encode($res);
        //close db
        $conn->close();  
        die();

?>
