<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST, PUT, GET');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/Post.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog post object
  $post = new Post($db);

  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));

  $post->user_id = $data->user_id;
  $post->user_username = $data->user_username;
  $post->avatar = $data->avatar;
  $post->avatar_2 = $data->avatar_2;
  $post->issue_title = $data->title;
  $post->issue_body = $data->detail . ' Target: ' .$data->target;
  $post->issue_time = date('now');

  // Create post
  if($post->create()) {
    echo json_encode(
      array("status" => true,'message' => 'Success')
    );
  } else {
    echo json_encode(
      array("status" => false,'message' => 'Failed')
    );
  }

