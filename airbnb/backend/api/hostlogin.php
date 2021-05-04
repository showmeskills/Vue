<?php
         //error_reporting(0);
         $email = isset($_POST['email']) ? $_POST['email'] : "" ;
         $pass = isset($_POST['password']) ? $_POST['password'] : "" ;
         $passMD5 = MD5($pass);
         //connect database file;
         include("../db/db.php");
 
         $res = array("error"=>false);
         $action = "HOST";
 
         if($action = "HOST"){
             //exec sql select info to database
             $result = $conn->query("SELECT * FROM `t_host` WHERE `hostemail` = '$email' AND `password` = '$passMD5'");
 
                 $host = array();
                 while($row = $result->fetch_assoc()){
                     array_push($host,$row);
                 }
             if(sizeof($host) > 0){
                 $res['host'] = $host;
                 $res['status'] = 0;
                 $res['message'] = "Successfully";
             }else{
                 $res['error'] = true;
                 $res['host'] =  $host ;
                 $res['status'] = 1;
                 $res['message'] = 'Failed';
             }
         }
         echo json_encode($res);
         //close db
         $conn->close();  
         die();
?>