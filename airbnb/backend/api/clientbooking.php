<?php
    //renew client info
    $email = isset($_POST['email']) ? $_POST['email'] : "" ;
    $checkin = isset($_POST['checkin']) ? $_POST['checkin'] : "" ;
    $checkout = isset($_POST['checkout']) ? $_POST['checkout'] : "" ;
    $guests = isset($_POST['guests']) ? $_POST['guests'] : "" ;
    $night = isset($_POST['night']) ? $_POST['night'] : "" ;
    $price = isset($_POST['price']) ? $_POST['price'] : "" ;
    $firstname = isset($_POST['firstname']) ? $_POST['firstname'] : "" ;
    $lastname = isset($_POST['lastname']) ? $_POST['lastname'] : "" ;
    $hostemail = isset($_POST['hostemail']) ? $_POST['hostemail'] : "" ;
    $apartmentname = isset($_POST['apartmentname']) ? $_POST['apartmentname'] : "" ;
 

    include('../db/db.php');

    $res = array("error"=>false);
    $action = "BOOKINGCONFIRM";

    if( $action = "BOOKINGCONFIRM"){
        $conn->query("set names utf8");

        $result = $conn->query("INSERT INTO `t_booking` (`firstname`,`lastname`,`checkin`,`checkout`,`email`,`night`,`price`,`guests`,`status`,`hostemail`,`apartmentname`) 
        VALUES ('$firstname','$lastname','$checkin','$checkout','$email','$night','$price','$guests','pending','$hostemail','$apartmentname')");

        if($result){
            $res["status"] = 0;
            $res["message"] = "Insert Successfully";
        }else{
            $res["error"] = true;
            $res["status"] = 1;
            $res["message"] = "Insert Failed";
        }

    }

    echo json_encode($res);
    //close db
    $conn->close();  
   
?>