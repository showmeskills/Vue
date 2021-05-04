<?php
   $post_data = json_decode(file_get_contents("php://input"), true);
   if (is_null($post_data)) {
       $json['err'] = "Expected posting a JSON formatted string";
       echo json_encode($json, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
       exit(0);
   }
   
$recentSevenDays = $post_data['info'];


$host = "localhost";
$username = "root";
$passwd = "";
$database="unibnb";                  //数据库名
$sql_command="select * from t_comments where aparmentname = $recentSevenDays";  //*为查找全部，可变为表头字段，from后面为数据表名
$data=db_get($database,$sql_command,true);   //true返回全部数据，false返回第一条查询数据

function db_get($database, $sql, $fetch_all)    
{
    global $host, $username, $password;
    $create_mysqli = new mysqli($host, $username, $password, $database);
    if ($create_mysqli->connect_error) {
        die("连接失败: " . $create_mysqli->connect_error);
    }
    $result = $create_mysqli->query($sql);

    if ($fetch_all) {
        return $result->fetch_all(MYSQLI_ASSOC);
    }
    else {
        return $result->fetch_array(MYSQLI_ASSOC);
    }
}

$login_time = [];
foreach ($data as $value){
    array_push($login_time,$value['login_time']);
}
?>  