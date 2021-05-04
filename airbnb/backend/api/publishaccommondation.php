<?php
//host release a new accommondation;
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
    $isPayment = isset($_POST['isPayment']) ? $_POST['isPayment'] : "" ;
    $hostemail = isset($_POST['hostemail']) ? $_POST['hostemail'] : "" ;

    include('../db/db.php');

    $res = array("error"=>false);
    $action = "RELEASEACCOM";

    if( $action == "RELEASEACCOM"){
        $conn->query("set names utf8");

        $result = $conn->query("INSERT INTO `t_accommondation` (`cityname`,`address`,`apartmentname`,`guests`,`rooms`,`beds`,`kitchen`,`freeparking`,`pets`,`smoking`,`status`,`image`,`price`,`avaliable`,`payment`,`hostemail`)
        VALUES('$cityName','$address','$apartmentName','$guests','$rooms','$beds','$isKitchen','$isParking','$isPet','$isSmoking','$isStatus','$imgUrl','$price','$avaliable','$isPayment','$hostemail')");

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