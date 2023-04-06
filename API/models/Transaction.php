<?php
  class Transaction {
    // DB Stuff
    private $conn;
    private $table = 'transaction';

    // Properties
    public $id;
    public $AccountNo;
    public $FAccountNo;
    public $Username;
    public $Amount;
    public $Debit;
    public $Credit;
    public $Status;
    public $Date;
    public $ProfileColor;

    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }

    // Get categories
    public function read() {
      // Create query
      $query = 'SELECT
        *
      FROM
        ' . $this->table . '
      ORDER BY
        Date DESC';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Execute query
      $stmt->execute();

      return $stmt;
    }

    // Get Single Category
  public function read_single(){
    // Create query
    $query = 'SELECT
          *
        FROM
          ' . $this->table . '
      WHERE ID = ?
      LIMIT 0,1';

      //Prepare statement
      $stmt = $this->conn->prepare($query);

      // Bind ID
      $stmt->bindParam(1, $this->id);

      // Execute query
      $stmt->execute();

      $row = $stmt->fetch(PDO::FETCH_ASSOC);

      // set properties
      $this->id = $row['id'];
      $this->AccountNo = $row['AccountNo'];
      $this->FAccountNo = $row['FAccountNo'];
      $this->Username = $row['Username'];
      $this->Amount = $row['Amount'];
      $this->Debit = $row['Debit'];
      $this->Credit = $row['Credit'];
      $this->Date = $row['Date'];
      $this->Status = $row['Status'];
      $this->ProfileColor = $row['ProfileColor'];
  }

  // Create Category
  public function create() {
    // Create Query
    $query = 'INSERT INTO ' .
      $this->table . '
    SET
      AccountNo = :AccountNo,
      FAccountNo = :FAccountNo,
      Username = :Username,
      Amount = :Amount,
      Debit = :Debit,
      Credit = :Credit,
      Date = :Date,
      Status = :Status,
      ProfileColor = :ProfileColor
    ';

  // Prepare Statement
  $stmt = $this->conn->prepare($query);

  // Clean data
  $this->AccountNo = htmlspecialchars(strip_tags($this->AccountNo));
  $this->FAccountNo = htmlspecialchars(strip_tags($this->FAccountNo));
  $this->Username = htmlspecialchars(strip_tags($this->Username));
  $this->Amount = htmlspecialchars(strip_tags($this->Amount));
  $this->Debit = htmlspecialchars(strip_tags($this->Debit));
  $this->Credit = htmlspecialchars(strip_tags($this->Credit));
  $this->Date = htmlspecialchars(strip_tags($this->Date));
  $this->Status = htmlspecialchars(strip_tags($this->Status));
  $this->ProfileColor = htmlspecialchars(strip_tags($this->ProfileColor));

  // Bind data
  $stmt->bindParam(':AccountNo', $this->AccountNo);
  $stmt->bindParam(':FAccountNo', $this->FAccountNo);
  $stmt-> bindParam(':Username', $this->Username);
  $stmt->bindParam(':Amount', $this->Amount);
  $stmt->bindParam(':Debit', $this->Debit);
  $stmt->bindParam(':Credit', $this->Credit);
  $stmt->bindParam(':Date', $this->Date);
  $stmt->bindParam(':Status', $this->Status);
  $stmt->bindParam(':ProfileColor', $this->ProfileColor);

  // Execute query
  if($stmt->execute()) {
    return true;
  }

  // Print error if something goes wrong
  printf("Error: \n", $stmt->error);

  return false;
  }

  // Update Category
  public function update() {
    // Create Query
  //   $query = 'UPDATE ' .
  //     $this->table . '
  //   SET
  //     name = :name
  //     WHERE
  //     id = :id';

  // // Prepare Statement
  // $stmt = $this->conn->prepare($query);

  // // Clean data
  // $this->name = htmlspecialchars(strip_tags($this->name));
  // $this->id = htmlspecialchars(strip_tags($this->id));

  // // Bind data
  // $stmt-> bindParam(':name', $this->name);
  // $stmt-> bindParam(':id', $this->id);

  // // Execute query
  // if($stmt->execute()) {
  //   return true;
  // }

  // // Print error if something goes wrong
  // printf("Error: \n", $stmt->error);

  return false;
  }

  // Delete Category
  public function delete() {
    // Create query
    $query = 'DELETE FROM ' . $this->table . ' WHERE id = :id';

    // Prepare Statement
    $stmt = $this->conn->prepare($query);

    // clean data
    $this->id = htmlspecialchars(strip_tags($this->id));

    // Bind Data
    $stmt-> bindParam(':id', $this->id);

    // Execute query
    if($stmt->execute()) {
      return true;
    }

    // Print error if something goes wrong
    printf("Error: \n", $stmt->error);

    return false;
    }
  }
