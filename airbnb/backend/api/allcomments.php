<?php
    //select all comments
    error_reporting(0);

    include('../db/db.php');
   
    $action = "POST_COMMENTS";
    $res = array("error"=>false);

    if($action == "POST_COMMENTS"){
        $result = $conn->query("SELECT * FROM `t_comments`");
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