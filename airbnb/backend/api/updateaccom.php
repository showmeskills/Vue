<?php
    $id = isset($_POST['id']) ? $_POST['id'] : "" ;
    $cityName = isset($_POST['cityName']) ? $_POST['cityName'] : "" ;
    $address = isset($_POST['address']) ? $_POST['address'] : "" ;
    $apartmentName = isset($_POST['apartmentName']) ? $_POST['apartmentName'] : "" ;
    $guests = isset($_POST['guests']) ? $_POST['guests'] : "" ;
    $rooms = isset($_POST['rooms']) ? $_POST['rooms'] : "" ;
    $beds = isset($_POST['beds']) ? $_POST['beds'] : "" ;
    $isKitchen = isset($_POST['isKitchen']) ? $_POST['isKitchen'] : "" ;
    $isParking = isset($_POST['isParking']) ? $_POST['isParking'] : "" ;
    $isPet = isset($_POST['isPet']) ? $_POST['isPet'] : "" ;
    $isSmoking = isset($_POST['isSmoking']) ? $_POST['isSmoking'] : "" ;
    $imgUrl = isset($_POST['imgUrl']) ? $_POST['imgUrl'] : "" ;
    $isStatus = isset($_POST['isStatus']) ? $_POST['isStatus'] : "" ;
    $price = isset($_POST['price']) ? $_POST['price'] : "" ;
    $avaliable = isset($_POST['avaliable']) ? $_POST['avaliable'] : "" ;
    $checkin = isset($_POST['checkin']) ? $_POST['checkin'] : "" ;
    $isPayment = isset($_POST['isPayment']) ? $_POST['isPayment'] : "" ;
    $hostemail = isset($_POST['hostemail']) ? $_POST['hostemail'] : "" ;

    include('../db/db.php');

    $res = array("error"=>false);
    $action = "UPDATEACCOM";

    if( $action = "UPDATEACCOM"){
        $conn->query("set names utf8");

        $result = $conn->query("UPDATE `t_accommondation` SET `cityname`='$cityName',`address`='$address',`apartmentname`='$apartmentName',`guests`='$guests',`rooms`='$rooms',`beds`='$beds', `kitchen`='$isKitchen', 
        `freeparking`='$isParking',`pets`='$isPet',`smoking`='$isSmoking',`status`='$isStatus',`image`='$imgUrl',`price`='$price',`avaliable`='$avaliable', 
        `checkin`='$checkin', `payment` = '$isPayment', `hostemail`='$hostemail'
        WHERE `id` = '$id'");

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