<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST, PUT, GET');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/Transaction.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog post object
  $transaction = new Transaction($db);

  // Get raw transaction$transactioned data
  $data = json_decode(file_get_contents("php://input"));

  $transaction->AccountNo = $data->AccountNo;
  $transaction->FAccountNo = $data->FAccountNo;
  $transaction->Username = $data->Username;
  $transaction->Amount = $data->Amount;
  $transaction->Credit = $data->Credit;
  $transaction->Debit = $data->Debit;
  $transaction->Date = $data->Date;
  $transaction->Status = $data->Status;
  $transaction->ProfileColor = $data->ProfileColor;

  // Create post
  if($transaction->create()) {
    echo json_encode(
      array('message' => 'Fund Raiser Created Successfully')
    );
  } else {
    echo json_encode(
      array('message' => 'Requst failed to create Fund Raiser')
    );
  }

