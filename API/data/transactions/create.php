<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json, charset=utf-8');
  header('Access-Control-Allow-Methods: POST, PUT, GET');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Origin,Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With, Accept, Origin');

  include_once '../../config/Database.php';
  include_once '../../models/Transaction.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog post object
  $transaction = new Transaction($db);

  // Get raw transaction$transactioned data
  $data = json_decode(file_get_contents("php://input"));

  // var_dump($data);
  // return;

  $transaction->AccountNo = $_SESSION['accountNo'];
  $transaction->FAccountNo = $_SESSION['accountNo'];
  $transaction->Username = isset($_SESSION['username']) ? $_SESSION['username'] : $data->customer->name;
  $transaction->Amount = $data->amount;
  $transaction->Credit = $data->charged_amount;
  $transaction->Debit = $data->Debit;
  $transaction->Date = $data->created_at;
  $transaction->Status = $data->status;
  $transaction->ProfileColor = $data->transaction_id;

  // Create post
  if($transaction->create()) {
    // echo json_encode(
    //   array('message' => 'Fund Raiser Created Successfully')
    // );
    echo json_encode(
      array("status"=> true,'message' => 'Fund Raiser Created Successfully', "username" => $_SESSION['username'], "accountNo" => $_SESSION['accountNo'], "user_id" => $_SESSION['id'])
    );
  } else {
    echo json_encode(
      array('message' => 'Requst failed to create Fund Raiser')
    );
  }

