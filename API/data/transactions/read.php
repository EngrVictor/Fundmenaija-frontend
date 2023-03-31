<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../../config/Database.php';
  include_once '../../models/Transaction.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate transaction object
  $transaction = new Transaction($db);

  // transactions read query
  $result = $transaction->read();
  
  // Get row count
  $num = $result->rowCount();

  // Check if any transactions
  if($num > 0) {
        // transaction array
        // $trans_arr = array();
        // $trans_arr['data'] = array();

        while($row = $result->fetch(PDO::FETCH_ASSOC)) {
          extract($row);

          $trans_item = array(
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
          // Push to "data"
          array_push($trans_arr['data'], $trans_item);
        }

        // Turn to JSON & output
        echo json_encode($trans_arr);

  } else {
        // No transactions
        echo json_encode(
          array('message' => 'No Transactions Found')
        );
  }
