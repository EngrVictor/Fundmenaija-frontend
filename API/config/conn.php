<?php 
    define("HOST", "localhost");
    define("USER", "root");
    define("PWD", "");
    define("DB", "_fundmenaija");

    $conn = mysqli_connect(HOST, USER, PWD, DB);

    if(!$conn){
        echo "Failed to Connect: ".mysqli_connect_error();
        echo json_encode(
            array('message' => 'Failed to Connect to DB')
          );
        exit();
    }

?>