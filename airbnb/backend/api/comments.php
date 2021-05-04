<?php
    //select one comment
    error_reporting(0);
    $name = isset($_POST["info"]) ? $_POST["info"] : "" ;
    include('../db/db.php');
   
    $action = "POST_COMMENTS";
    $res = array("error"=>false);

    if($action == "POST_COMMENTS"){
        $result = $conn->query("SELECT * FROM `t_comments` WHERE aparmentname = '$name' ");
            $comments = array();
            while($row = $result->fetch_assoc()){
                array_push($comments,$row);
            }
            $res['comments'] =  $comments;
    }
    
  
    echo json_encode($res);
    $conn->close();
    die();
?>