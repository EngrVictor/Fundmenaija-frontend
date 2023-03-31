<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once '../../config/conn.php';

    // Get raw posted data
    $user = json_decode(file_get_contents("php://input"));
    // $user = file_get_contents("php://input");


    echo json_encode(
        array("status"=> false, 'data'=>$user, 'message' => 'subitted to backend')
      );
    return;

    // -------------- Basic Detail Section ------------
    // $Account_Type = "Savings";
    // $Account_Status = "Inactive";
    // $Balance = "0.0";
    // // Storing Form values in variable
    // $First_Name = mysqli_real_escape_string($conn, $user->FirstName);
    // $Last_Name = mysqli_real_escape_string($conn, $user->Last_Name);
    // $Mobile_Number = mysqli_real_escape_string($conn, $user->Mobile_Number);
    // $Id_type = mysqli_real_escape_string($conn, $user->Id_type);
    // $Account_Number = date('ndyHisL');
    // $Email = mysqli_real_escape_string($conn, $user->email);
    // $Username = mysqli_real_escape_string($conn,$user->username);
    // $Password  = mysqli_real_escape_string($conn,$user->pwd);
    // $ConfirmPass = mysqli_real_escape_string($conn,$user->cpwd);

    if (strlen($Account_Number) > 12) {
        $Account_Number = substr($Account_Number, 0, -1);
    }


    //  Error Variables
    $First_Name_error =  $Last_Name_error = null;
    $Mobile_Number_error = null;
    $Email_error = null;

    // Validate Name of customer
    /* 
        1] Preg_match_all(): This function check any number is avaible in string or not
        2] !\d+! : passing this regular expression in above function which conatin numeric data pattern
        3] Varible : this parameter contains string to be check
        4] logic explain: if() ant numeric value found in string and it is == 1 
    
     */

    if (preg_match_all('!\d+!', $First_Name) == 1) {
        $First_Name_error = "* Numeric value not allowed in First Name";
    }
    if (preg_match_all('!\d+!', $Last_Name) == 1) {
        $Last_Name_error = "* Numeric value not allowed in Last Name";
    }
    // Phone verification here

    if (!is_numeric($Mobile_Number) || is_null($Mobile_Number) || !preg_match('/^[0-9]{11}+$/', $Mobile_Number)) {
        $Mobile_Number_error = "Invalid Mobile Number";
    }


    // *************************** Email Validation *************************


    if (!empty($Email)) {
        if (!preg_match('/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix', $Email)) {
            $Email_error = "* Invalid Email ID";
        } else {
            $Email = mysqli_real_escape_string($conn, $Email);
            $query2 = "SELECT * FROM customer_detail WHERE C_Email = '" . $Email . "'";

            $result2 =  mysqli_query($conn, $query2);

            if (mysqli_num_rows($result2) > 0) {
                $Email_error = "* Email Already Exist";
            }
        }
    } else {
        $Email_error = "* Enter Your Email";
    }

    // ************************* Id_type Validation ****************************
    if (!empty($Id_type)) {
        $match = '/^[a-zA-Z]$/';
        if (!preg_match_all($match, $Id_type)) {
            $Id_type_error = "* Invalid Pincode";
        }
    } else {
        $Id_type_error = "* Select A Valid ID Card";
    }

    // ++++++++++++++ Basic Detail Ends Here ++++++++++++++++

    // -------- USERNAME AND PASSWORD VERIFICATION -----------

    $UsernameError =  $PasswordError  = $ConfirmPassError = $Id_type_error = false;

    if (!empty($Username)) {
        if (!preg_match_all('/^[A-Za-z]{1}[A-Za-z0-9]{5,31}$/', $Username)) {

            $UsernameError = "* Please Enter Valid Username";
        } else {
            $UsernameError = false;

            $Username = mysqli_real_escape_string($conn, $Username);
            $query3 = "SELECT * FROM login WHERE Username = '" . $Username . "'";

            $result3 =  mysqli_query($conn, $query3);

            if (mysqli_num_rows($result3) > 0) {
                $UsernameError = "* Username Already Exist";
            }
        }
    } else {
        $UsernameError = "* Username Cannot Empty";
    }

    // ------------- Password Verification ---------------
    if (!empty($Password)) {
        if (!preg_match_all('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,16}$/m', $Password)) {
            $PasswordError  = "* Password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
        } else {
            $hashPass = md5($Password);
            $PasswordError = false;
        }
    } else {
        $PasswordError = "Password Cannot be empty";
    }

    if (!empty($ConfirmPass)) {

        if ($ConfirmPass != $Password) {
            $ConfirmPassError = "Please Enter same Password";
        } else {
        // Activate Handler   #########################################
            $ConfirmPassError = false;
            // unset($_SESSION['otp']);
            $_SESSION['twostep'] = $Account_Number;
            // redirect to login instead
            $_SESSION['username'] = $Account_Number;
            $_SESSION['verifyCode'] = $Account_Number;
            // $_SESSION['id'] = $row['ID'];
            $_SESSION['accountNo'] = $Account_Number;  
            $_SESSION['AccountNo'] = $Account_Number; 


            // header('Location: ../auth/activateAccount.php');
            echo json_encode(
                array("status"=> true,'message' => 'Activate Account')
              );

        // Activate Handler    ###########################################
        }
    } else {
        $ConfirmPassError = "Please Confirm Password";
    }

    // ----------- Random Color Hex Generator for Profile ----------------------- 

    $hex = '#';

    //Create a loop.
    foreach (array('r', 'g', 'b') as $color) {
        //Random number between 0 and 255.
        $val = mt_rand(0, 255);
        //Convert the random number into a Hex value.
        $dechex = dechex($val);
        //Pad with a 0 if length is less than 2.
        if (strlen($dechex) < 2) {
            $dechex = "0" . $dechex;
        }
        //Concatenate
        $hex .= $dechex;
    }

    //Print out our random hex color.
    // echo $hex;
    // Storing Form values in variable
    // Adhar Card Variable
    $Adhar_Files = $_FILES['AdharCardUp'];
    $Adhar_fileName = $Adhar_Files['name'];
    $Adhar_fileName = preg_replace('/\s/', '_', $Adhar_fileName); // replacing space with underscore
    $Adhar_fileType = $Adhar_Files['type'];
    $Adhar_fileError = $Adhar_Files['error'];
    $Adhar_fileTempName = $Adhar_Files['tmp_name'];
    $Adhar_fileSize = $Adhar_Files['size'];
    $Adhar_Up_error = false;

    // Array storing file extention global version
    $Valid_Extention = array('png', 'jpg', 'jpeg');

    // ************************************ Validating Pan Card Document **********************************************

    // use built in function ( pathinfo() ) to seprate file name and store them in seprate variable

    // $Pan_file_extention = pathinfo($Pan_fileName, PATHINFO_EXTENSION);
    // $Pan_fileName = pathinfo($Pan_fileName, PATHINFO_FILENAME);

    $Adhar_file_extention = pathinfo($Adhar_fileName, PATHINFO_EXTENSION);
    $Adhar_fileName = pathinfo($Adhar_fileName, PATHINFO_FILENAME);

    // Generating unique name with date and time 
    // $Pan_Unique_Name = $Pan_fileName . date('mjYHis') . "." . $Pan_file_extention;
    $Adhar_Unique_Name = $Adhar_fileName . date('mjYHis') . "." . $Adhar_file_extention;

    // Validating Pan Card
    // !empty($Pan_fileName) && 
    // $Pan_fileSize <= 1000000 && 
    if (!empty($Adhar_fileName)) {

        // Setting file size condition
        if ($Adhar_fileSize <= 1000000) {

            // checking file extention
            // in_array($Pan_file_extention, $Valid_Extention) && 
            if (in_array($Adhar_file_extention, $Valid_Extention)) {

                // Pancard Destination Variable
                // $Pan_destinationFile = 'customer_data/Pan_doc/' . $Pan_Unique_Name;

                // Adharcard Destination Variable
                $Adhar_destinationFile = './uploads/profile_image/' . $Adhar_Unique_Name;


                // Validating All Error Are values are null or not means checking any error in form or not
                if ($First_Name_error == null && $Last_Name_error == null && $Mobile_Number_error == null && $Email_error == null && $UsernameError == false && $PasswordError == false && $ConfirmPassError == false) {
                    // Uploading Document to server
                    $Adhar_Upload = move_uploaded_file($Adhar_fileTempName, $Adhar_destinationFile);
                    // $Pan_Upload = move_uploaded_file($Pan_fileTempName, $Pan_destinationFile);

                    // Pan And SSN is upload or not
                    // $Pan_Upload &&
                    if ($Adhar_Upload) {
                        // echo "file Uploaded successfully";
                        try {
                            // mysql query for customer table
                            $Upload_query = "INSERT INTO `customer_detail`(`Account_No`, `C_First_Name`, `C_Last_Name`,  `C_Mobile_No`, `C_Email`, `Id_type`, `C_Adhar_Doc`, `C_Pan_Doc`, `ProfileColor`, `ProfileImage`, `Bio`) VALUES('$Account_Number', '$First_Name', '$Last_Name', '$Mobile_Number', '$Email','$Id_type','$Adhar_destinationFile', '$Adhar_destinationFile', '$hex', 'Not Available', 'Biolography')";
                            // use $Adhar_destinationFile as $profile Image

                            // sql query for login table
                            $login_query = "INSERT INTO `login`(`AccountNo`, `Username`, `Password`, `Status`, `State`, `AuthKey`) VALUES('$Account_Number', '$Username', '$hashPass', '$Account_Status', '0', '0')";

                            // sql query for Accounts table
                            $account_query = "INSERT INTO `accounts`(`AccountNo`, `Balance`, `AccountType`, `SavingBalance`, `SavingTarget`, `State`) VALUES('$Account_Number', '$Balance', '$Account_Type', '0.0', '', '0')";

                            // query execution

                            mysqli_query($conn, $Upload_query) or die(mysqli_error($conn));
                            mysqli_query($conn, $login_query) or die(mysqli_error($conn));
                            mysqli_query($conn, $account_query) or die(mysqli_error($conn));
                            // Sending Email
                            // ########### Alternative Email
                            // require_once('../auth/auth_mail.php');
                            // auth_mail($Email, $_SESSION['otp'], $First_Name);
                            // require '../mail/congraMail.php';
                            // sendMessage($Email, $First_Name);
                            // // require '../mail/mail_config.php';
                            // sendOtp($Email, $_SESSION['otp'], $First_Name);
                            // sendOtp($Email, '123456' ,$First_Name);
                            
                            // return;
                            // Using php in-built Mail Func
                            // sendOTPMail($Email, $_SESSION['otp']);
                        } catch (Exception $e) {
                            // echo "Could NOT Process Image. Try Again";
                            $Adhar_Up_error = "Could NOT Process Image. Try Again";
                            // echo 'Message: ' . $e->getMessage();
                        }
                    }else{
                        // echo "Files could not be uploaded. Try Again";
                        $Adhar_Up_error = 'Files could not be uploaded. Try Again';
                    }
                }
            } else {
                // $Pan_Up_error = 'Invalid file extention';
                $Adhar_Up_error = 'Invalid file extention';
                // echo ('Invalid file extention');
            }
        } else {
            // echo "File is too large";
            $Adhar_Up_error = 'File is too large';
        }
    } else {
        // echo " Please Give name to file";
        $Adhar_Up_error = 'Please Give name to file';
    }


?>