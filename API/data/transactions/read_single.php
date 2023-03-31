<?php

  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../../config/Database.php';
  include_once '../../models/Transaction.php';
  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();
  // Instantiate blog Transaction object
  $transaction = new Transaction($db);
  
  // Get ID
  $transaction->id = isset($_GET['id']) ? $_GET['id'] : die();

  // Get post
  $transaction->read_single();

  // Create array
  $transaction_arr = array(
    'id' => $id,
    "AccountNo" => $AccountNo,
    "FAccountNo" => $FAccountNo,
    "Username" => $Username,
    "Amount" => $Amount,
    "Debit" => $Debit,
    "Credit" => $Credit,
    "Date" => $Date,
    "Status" => $Status,
    "ProfileColor" => $ProfileColor
  );

  // Make JSON
  print_r(json_encode($transaction_arr));
