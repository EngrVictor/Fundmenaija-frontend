<?php
 // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
// test message
  echo json_encode(array("message"=>"Server running on port 5001 "));
?>