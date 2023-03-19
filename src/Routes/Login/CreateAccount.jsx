import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './login.css'
import img from '../../assets/images/Logo3.png'
import test from '../../assets/images/hero-bg.jpeg'
import loginImg from '../../assets/images/WhatsApp Image 2023-02-21 at 14.10.12.jpeg'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'

function CreateAccount() {
    
  return (
    <div>
        {/* <Nav /> */}

        <div className="main-login">
            <div className="login-card">
                <div className="login-img-cont">
                    <img src={test} alt="login" className="login-card-img" />
                </div>
                <div className="login-form-cont">
                    <p><Link to={'/'}>&larr; home</Link></p>
                    <div className="brand-wrapper">
                        <img src={img} alt="logo" className="logo" />
                        <p>FundMeNaija</p>
                    </div>

                    <div className="form-cont">
                        <center><h4 className="login-card-description">Create Account</h4></center>
                        <form>
                            <input type="text" name="firstname" id="" placeholder='First Name' required/>
                            <input type="text" name="lastname" id="" placeholder='Last Name' required/>
                            <input type="number" name="mobile" id="" placeholder='Mobile Number' required/>
                            <input type="text" name="email" id="" placeholder='Email Address' required/>
                            <select defaultValue={'default'} required>
                                <option value='default'>Select Document To Upload</option>
                                <option value='NIN Document'>NIN Document</option>
                                <option value='Voters card'>Voters card</option>
                                <option value='Driver License'>Driver License</option>
                                <option value='International Password'>International Password</option>
                            </select>
                            <input type="file" required/>
                            <input type="text" name="username" id="" placeholder='Choose Username' required/>
                            <input type="password" name="password" id="" placeholder='Enter Password' required/>
                            <input type="password" name="verifyPass" id="" placeholder='Verify Password' required/>
                            <input type="submit" value="Sign Up" id='login-btn'/>
                        </form>

                        {/* <p><Link to={'/passwordreset'} className="forgot-password-link">Forgot password?</Link></p> */}
                        <p className="login-card-footer-text">Already have an account? <Link to={'/login'} className="text-reset">Sign in here</Link></p>
                    </div>
                </div>
            </div>
        </div>
        {/* <form class='shadow' id="regForm" action="<?php htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST" enctype="multipart/form-data" novalidate>
        <a href="../index.php" class="nav-link text-dark d-flex align-items-center my-4">
            <i class="fa fa-angle-left fa-2x pointer"></i>
            <p class="my-2 pointer"> Home</p>
        </a>

        <h1 class="mb-3">Create Account</h1>

        <!-- Tab 1 -->

        <div class="tab mb-3">
            <h3 class="mb-3 stepHead">Step 1/2</h3>
            <p class="SubAction">Personal Details:</p>
            <div class="row g-2 mb-3">
                <div class="col-md">
                    <div class="form-floating">
                        <input type="text" name="FirstName" class="form-control" id="FirstName" placeholder="First Name">
                        <label for="floatingInputGrid">First Name</label>

                        <span id="FnameError" style="color: red;"><?php if (isset($_POST['submit'])) {
                            echo $First_Name_error;
                        } ?></span>
                    </div>
                </div>
                <div class="col-md">
                    <!-- <div class="col-md"> -->
                        <div class="form-floating">
                            <input type="text" name="LastName" class="form-control" id="Lname" placeholder="Last Name">
                            <label for="floatingInputGrid">Last Name</label>

                            <span id="LnameError" style="color: red;"><?php if (isset($_POST['submit'])) {
                                echo $Last_Name_error;
                                } ?></span>
                        </div>
                </div>
                <!-- </div> -->
            </div>
            <div class="row g-2 mb-3">
                <div class="col-md">
                    <div class="col-md">
                        <div class="form-floating">
                            <input name="MobileNumber"
                                class="form-control" type="tel" id="MobileNo" 
                                pattern="[0-9]{11}" placeholder="Mobile Number" 
                                onkeypress="return isNumber(event)" 
                                title="11 Digit Mobile Number"
                            >
                            <label for="floatingInputGrid">Mobile Number</label>
                            <span id="MobileNoError" style="color: red;">
                                <?php if (isset($_POST['submit'])) {echo $Mobile_Number_error;} ?>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <div class="col-md">
                        <div class="form-floating">
                            <input type="email" name="email" 
                                class="form-control" id="email" 
                                placeholder="Email Address"
                            >
                            <label for="floatingInputGrid">Email Address</label>
                            <span id="EmailError" style="color: red;">
                                <?php if (isset($_POST['submit'])) {echo $Email_error;} ?>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        <!-- </div> -->
        <div class="row g-2 mb-3">
            <p class="SubAction">
                <select name="id_type" id="id_type" class="form-control" required>
                    <option value="null" selected disable>Select Document To Upload</option>
                    <option value="NIN">NIN Document</option>
                    <option value="voters_card">Voter's Card</option>
                    <option value="Drivers_lincense">Drivers Lincense</option>
                    <option value="international_passport">International Passport</option>
                </select>
            </p>
        </div>
        <div class="row g-2 mb-3"> 
            <!-- <div class="col-md mb-3">
                <div class="col-md">                            
                    <div class="form-group mb-3">
                        <label for="exampleFormControlFile1">Passport Photograph</label>
                        <input 
                            type="file" name="PanCardUp" 
                            class="form-control-file" id="PANCardUp" 
                            size="30" accept="image/jpg,image/png,image/jpeg,image/gif"
                        >
                        <span id="PanUPError" style="color: red;">
                            <?php if (isset($_POST['submit'])) {echo $Pan_Up_error;} ?>
                        </span>
                    </div>
                </div>
            </div> -->
            <div class="col-md g-2 mb-3">
                <div class="col-md"> 
                    <div class="form-group mb-3">
                        <label for="exampleFormControlFile1">Upload ID Card</label>
                        <input 
                            type="file" name="AdharCardUp" 
                            class="form-control-file" id="AdharCardUp" 
                            size="30" accept="image/jpg,image/png,image/jpeg,image/gif"
                        >
                        <span id="AdharUpError" style="color: red;">
                            <?php if (isset($_POST['submit'])) {echo $Adhar_Up_error;} ?>
                        </span>
                    </div>
                </div>
                <span id="mailsendError"></span>
            </div>
         </div>
            

        </div>

            <!-- <div class="tab">
                <h3 class="mb-3 stepHead">Step 2/2</h3>
                <p class="SubAction">Validate Email Account</p>

                <div class="col-md mb-3">
                    <div class="col-md">
                        <div class="alert alert-success" role="alert">
                            Verification Code Sent To Your email, Kindly check your email
                        </div>
                        <div class="form-floating OtpMobile">
                            <input 
                                type="tel" class="form-control" 
                                name="Otp" id="Otp" placeholder="Enter 6 Digit OTP" 
                                pattern="[0-9]{6}"
                                value="<?php echo isset($_SESSION['otp']) ? $_SESSION['otp'] : 'OTP Failed'; ?>"
                            >
                            <p><a href="#" class="nav-link h6" onclick="nextPrev(1)">Verify Later? Skip Verification</a></p>

                            <label for="floatingInputGrid">Enter 6 Digit OTP</label>
                            <span style="color: red;" id="OtpError"></span>                          
                       
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

        <!-- Tab 4 -->

        <div class="tab">
            <h3 class="mb-3 stepHead"></h3>
            <p class="SubAction">Create Username and Password</p>

            <div class="col-md mb-3">
                <div class="col-md">
                    <div class="form-floating">
                        <input type="text" class="form-control" name="Username" id="Username" placeholder="Create Username">
                        <label for="floatingInputGrid">Create Username</label>

                        <span style="color: red;" id="UsernameError" name="UsernameError"><?php if (isset($_POST['submit'])) {
                                                                                                echo $UsernameError;
                                                                                            } ?></span>
                    </div>
                </div>
            </div>
            <div class="col-md mb-3">
                <div class="col-md">
                    <div class="form-floating">
                        <input class="form-control" type="password" name="Password" id="Password" placeholder="Enter Password" data-toggle="tooltip" data-placement="top" title="Enter Password with atleast 8 charater long with 1 Capital 1 small 1 number and 1 special charater">
                        <label for="floatingInputGrid">Enter Password</label>

                        <span style="color: red;" id="PasswordError" name="PasswordError"><?php if (isset($_POST['submit'])) {
                                                                                                echo $PasswordError;                                                        } ?></span>
                    </div>
                </div>
            </div>
            <div class="col-md mb-3">
                <div class="col-md">
                    <div class="form-floating">
                        <input class="form-control" type="password" name="ConfirmPass" id="ConfirmPass" placeholder="Confirm Password">
                        <label for="floatingInputGrid">Confirm Password</label>

                        <span style="color: red;" id="ConfirmPassError" name="ConfirmPassError"><?php if (isset($_POST['submit'])) {
                                                                                                    echo $ConfirmPassError;
                                                                                                } ?></span>
                    </div>
                </div>
            </div>
        </div>

        </div>
        <div style="overflow:auto;">
            <div style="float:right;">
                <button type="button" id="prevBtn" class="CustomButton" onclick="nextPrev(-1)">Previous</button>
                <button type="button" id="nextBtn" class="CustomButton" onclick="nextPrev(1)">Next</button>
                <input type="submit" name="submit" id="submitBtn" class="CustomButton" style="display: none;">
            </div>
        </div>
        <!-- Circles which indicates the steps of the form: -->
        <div style="text-align:center;margin-top:40px;">
            <span class="step"></span>
            <span class="step"></span>
            <!-- <span class="step"></span>
            <span class="step"></span> -->
        </div>
    </form> */}
    {/* <Footer /> */}
    </div>
  )
}

export default CreateAccount