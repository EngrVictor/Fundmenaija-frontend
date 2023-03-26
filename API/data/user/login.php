<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');


    // include_once '../../config/Database.php';
    include_once '../../config/conn.php';

    // Instantiate DB & connect
    // $database = new Database();
    // $db = $database->connect();

    // Get raw posted data
    $user = json_decode(file_get_contents("php://input"));
    // $user = file_get_contents("php://input");

    // print_r($user->username);
    // return;

    $username = mysqli_real_escape_string($conn, $user->username);
    $password = $user->pwd;
    $hashPassword = md5($password);
    $password_err = $username_err = "";

    if (empty(trim($password)) && empty(trim($username))) {
        echo json_encode(
            array("status"=> false,'message' => 'Username and Password required')
          );
        // header("Location: ../user/login.php?error=Username and Password required");
        exit();
    } elseif (empty(trim($username))) {
        echo json_encode(
            array("status"=> false,'message' => 'Username cannot be blank')
          );

        // $username_err = "Username cannot be blank";
        // header("Location: ../user/login.php?error=Username required");
        exit();
    } elseif (empty(trim($password))) {

        echo json_encode(
            array("status"=> false,'message' => 'Password cannot be blank')
          );
        // header("Location: ../user/login.php?error=Password required");
        exit();
    } else {

        $query = "SELECT ID, Username, Password, AccountNo, Status, State FROM login WHERE Username='{$username}' AND Password='{$hashPassword}'";

        $result = mysqli_query($conn, $query) or die("Query Fail.");

        if (mysqli_num_rows($result) > 0) {

            while ($row = mysqli_fetch_assoc($result)) {
                // echo json_encode(
                //     array($row)
                //   );
                // return;

                $status = $row['Status'];
                $state = $row['State'];

                if ($state == 0) {
                    if ($status == "Active") {

                        $_SESSION['username'] = $row['Username'];
                        $_SESSION['verifyCode'] = $row['Username'];
                        // $_SESSION['id'] = $row['ID'];
                        $_SESSION['accountNo'] = $row['AccountNo'];   
                        
                        // replaced with google recaptcha && LOGIN instead
                        // header("Location: ../user/twostepverify.php");

                        echo json_encode(
                            array("status"=> true,'message' => 'Login Success', "username" => $_SESSION['username'], "accountNo" => $_SESSION['accountNo'])
                          );
                        // header('Location: /dash');
                        mysqli_close($conn);
                    } else {
                        echo json_encode(
                            array("status"=> false,'message' => 'Account not Activated')
                          );
                        // header("Location: ../user/login.php?error=Account not Activated");
                        exit();
                    }
                } else if ($state == 1) {
                    // admin loggin here
                    if ($status == "Super") {
                        // session_start();
                        // $int = random_int(1,9);
                        $int = 8932437;

                        $_SESSION['username'] = $row['Username'];
                        $_SESSION['admin'] = "super".$row['ID'].$int;
                        
                        $_SESSION['accountNo'] = $row['AccountNo'];

                        echo json_encode(
                            array("status"=> true,'message' => 'Admin Login Sucess')
                          );
                        header("Location: https://fundmenaija.com/admin");
                        mysqli_close($conn);
                    } else {
                        echo json_encode(
                            array("status"=> false,'message' => 'Admin Account not Activated')
                          );
                        // header("Location: ../user/login.php?error=Account not Activated");
                        exit();
                    }
                }
            }
        } else {
            echo json_encode(
                array("status"=> false,'message' => 'Invalid Credential')
              );
            // header("Location: ../user/login.php?error=Invalid Credential");
            exit();
        }
    }

?>