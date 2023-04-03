<?php 
  class Post {
    // DB stuff
    private $conn;
    private $table = '_issues';

    // Post Properties
    public $id;
    public $user_id;
    public $user_username;
    public $avatar;
    public $avatar_2;
    public $issue_title;
    public $target;
    public $issue_body;
    public $issue_time;

    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }

    // Get All Issues
    public function read() {
      // Create query
      $query = 'SELECT l.Username as username, p.id, p.user_id, p.user_username, p.avatar, p.avatar_2, p.issue_title, p.target, p.issue_body, p.issue_time
                                FROM ' . $this->table . ' p
                                LEFT JOIN
                                  login l ON p.user_id = l.ID
                                ORDER BY
                                  p.issue_time DESC';
      
      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Execute query
      $stmt->execute();
      // if($stmt->execute()){
      //   return true;
      // }else{
      //   return false;
      // }

      return $stmt;
    }

    // Get Single Post
    public function read_single() {
          // Create query
          $query = 'SELECT * FROM ' . $this->table . ' p
                                    LEFT JOIN
                                      login l ON p.user_id = l.id
                                    WHERE
                                      p.id = ?
                                    LIMIT 0,1';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Bind ID
          $stmt->bindParam(1, $this->id);

          // Execute query
          $stmt->execute();

          $row = $stmt->fetch(PDO::FETCH_ASSOC);

          // Set properties
          $this->id = $row['id'];
          $this->user_id = $row['user_id'];
          $this->user_username = $row['user_username'];
          $this->avatar = $row['avatar'];
          $this->avatar_2 = $row['avatar_2'];
          $this->issue_title = $row['issue_title'];
          $this->target = $row['target'];
          $this->issue_body = $row['issue_body'];
          $this->issue_time = $row['issue_time'];
    }

    // Create Post
    public function create() {
          // Create query
          $query = 'INSERT INTO ' . $this->table . ' SET user_id = :user_id, user_username = :user_username, avatar = :avatar, avatar_2 = :avatar_2, issue_title = :issue_title, target = :target, issue_body = :issue_body, issue_time = :issue_time';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->user_id = htmlspecialchars(strip_tags($this->user_id));
          $this->user_username = htmlspecialchars(strip_tags($this->user_username));
          $this->avatar = htmlspecialchars(strip_tags($this->avatar));
          $this->avatar_2 = htmlspecialchars(strip_tags($this->avatar_2));
          $this->issue_title = htmlspecialchars(strip_tags($this->issue_title));
          $this->target = htmlspecialchars(strip_tags($this->target));
          $this->issue_body = htmlspecialchars(strip_tags($this->issue_body));
          $this->issue_time = htmlspecialchars(strip_tags($this->issue_time));

          // Bind data
          $stmt->bindParam(':user_id', $this->user_id);
          $stmt->bindParam(':user_username', $this->user_username);
          $stmt->bindParam(':avatar', $this->avatar);
          $stmt->bindParam(':avatar_2', $this->avatar_2);
          $stmt->bindParam(':issue_title', $this->issue_title);
          $stmt->bindParam(':target', $this->target);
          $stmt->bindParam(':issue_body', $this->issue_body);
          $stmt->bindParam(':issue_time', $this->issue_time);

// #############  Validate Image and files before uploadinto the db

          // Execute query
          if($stmt->execute()) {
            // upload files
            $destination = $_SERVER['DOCUMENT_ROOT'].'/uploads/' . $this->avatar;
            if(move_uploaded_file($_FILES['avatar']['tmp_name'], $destination) && move_uploaded_file($_FILES['avatar_2']['tmp_name'], 'uploads/'.basename($this->avatar_2))){
              // image upload was successful
              return true;
            }else{
              // image upload failed
              echo json_encode(["message" => "File Upload Failed"]);
              return false;
            }
          }

      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);

      return false;
    }

    // Update Post
    public function update() {
          // will update later
          return false;

          // Create query
          // $query = 'UPDATE ' . $this->table . '
          //                       SET title = :title, body = :body, author = :author, category_id = :category_id
          //                       WHERE id = :id';

          // Prepare statement
          // $stmt = $this->conn->prepare($query);

          // Clean data
          // $this->title = htmlspecialchars(strip_tags($this->title));
          // $this->body = htmlspecialchars(strip_tags($this->body));
          // $this->author = htmlspecialchars(strip_tags($this->author));
          // $this->category_id = htmlspecialchars(strip_tags($this->category_id));
          // $this->id = htmlspecialchars(strip_tags($this->id));

          // Bind data
          // $stmt->bindParam(':title', $this->title);
          // $stmt->bindParam(':body', $this->body);
          // $stmt->bindParam(':author', $this->author);
          // $stmt->bindParam(':category_id', $this->category_id);
          // $stmt->bindParam(':id', $this->id);

          // Execute query
          // if($stmt->execute()) {
          //   return true;
          // }

          // Print error if something goes wrong
          // printf("Error: %s.\n", $stmt->error);

          // return false;
    }

    // Delete Post
    public function delete() {
          // Create query
          $query = 'DELETE FROM ' . $this->table . ' WHERE id = :id';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->id = htmlspecialchars(strip_tags($this->id));

          // Bind data
          $stmt->bindParam(':id', $this->id);

          // Execute query
          if($stmt->execute()) {
            return true;
          }

          // Print error if something goes wrong
          printf("Error: %s.\n", $stmt->error);

          return false;
    }
    
  }