<?php
        //error_reporting(0);
        $email = isset($_POST['email']) ? $_POST['email'] : "" ;
        $pass = isset($_POST['password']) ? $_POST['password'] : "" ;
        $passMD5 = MD5($pass);
        //connect database file;
        include("../db/db.php");

        $res = array("error"=>false);
        $action = "CLIENT";

        if($action = "CLIENT"){
            //exec sql select info to database
            $result = $conn->query("SELECT * FROM `t_client` WHERE `clientemail` = '$email' AND `password` = '$passMD5'");

                $client = array();
                while($row = $result->fetch_assoc()){
                    array_push($client,$row);
                }
            if(sizeof($client) > 0){
                $res['client'] = $client;
                $res['status'] = 0;
                $res['message'] = "Successfully";
            }else{
                $res['error'] = true;
                $res['client'] =  $client ;
                $res['status'] = 1;
                $res['message'] = 'Failed';
            }
        }
        echo json_encode($res);
        //close db
        $conn->close();  
        die();

?>
