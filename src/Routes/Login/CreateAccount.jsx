import React from 'react'

function CreateAccount() {
  return (
    <div>
        <form id="regForm" action="" method="POST" enctype="multipart/form-data">
            <h1 className="mb-3">Create Account</h1>
            <div className="tab mb-3">
                <h3 className="mb-3 stepHead">Step 1/4</h3>
                <p className="SubAction">Personal Details:</p>
                <div className="row g-2 mb-3">
                    <div className="col-md">
                        <div className="form-floating">
                            <input type="text" name="FirstName" className="form-control" id="FirstName" placeholder="First Name" />
                            <label for="floatingInputGrid">First Name</label>

                            <span id="FnameError" style="color: red;">Error</span>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="col-md">
                            <div className="form-floating">

                                <input type="text" name="LastName" className="form-control" id="Lname" placeholder="Last Name" />
                                <label for="floatingInputGrid">Last Name</label>

                                <span id="LnameError" style="color: red;">Name_error</span>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-2 mb-3">
                    <div className="col-md">
                        <div className="col-md">
                            <div className="form-floating">

                                <input type="text" name="FatherName" className="form-control" id="FAname" placeholder="Father's Name" />
                                <label for="floatingInputGrid">Father's Full Name</label>
                                <span id="FAnameError" style="color: red;">
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="col-md">
                            <div className="form-floating">

                                <input type="text" name="MotherName" className="form-control" id="MAname" placeholder="Mother's Name" />
                                <label for="floatingInputGrid">Mother's Full Name</label>
                                <span id="MAnameError" style="color: red;">                          echo $Mother_Name_error</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-2 mb-3">
                    <div className="col-md">
                        <div className="col-md">
                            <div className="form-floating">
                                <input type="date" name="BirthDate" className="form-control" id="BirthDate" placeholder="Birth Date" />
                                <label for="floatingInputGrid">Birth Date</label>
                                <span id="AgeError" style="color: red;"> $Birth_Date_error;
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="col-md">
                            <div className="form-floating">
                                <input name="MobileNumber" className="form-control" type="tel" id="MobileNo" pattern="[0-9]{10}" placeholder="Mobile Number" onkeypress="return isNumber(event)" title="10 Digit Mobile Number" />
                                <label for="floatingInputGrid">Mobile Number</label>
                                <span id="MobileNoError" style="color: red;">                               echo $Mobile_Number_error</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-2 mb-3">
                    <div className="col-md">
                        <div className="col-md">
                            <div className="form-floating">
                                <input type="text" name="PanNumber" className="form-control" id="PanNo" placeholder="Pan Number" title="Eg. (202) 330 2919" />
                                <label for="floatingInputGrid">Phone Number</label>
                                <span id="PanError" style="color: red;">
                                    echo $Pan_Number_error;
                          </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="col-md">
                            <div className="form-floating">
                                <input name="AdharNumber" className="form-control" type="tel" id="AdharNo" pattern="[0-9]{9}" max="9" placeholder="SSN Number" onkeypress="return isNumber(event)" title="9 Digit SSN" />
                                <label for="floatingInputGrid">SSN Number</label>
                                <span id="AdharError" style="color: red;">                                   echo $Adhar_Number_error;
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-2 mb-3">
                    <div className="col-md">
                        <div className="col-md">
                            <div className="form-floating">
                                <input type="email" name="email" className="form-control" id="email" placeholder="Email Address" />
                                <label for="floatingInputGrid">Email Address</label>
                                <span id="EmailError" style="color: red;">error</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="col-md">
                            <div className="form-floating">
                                <input name="pincode" className="form-control" type="tel" id="pincode" pattern="[0-9]{6}" placeholder="Pin Code" onkeypress="return isNumber(event)" title="6-digit Number" />
                                <label for="floatingInputGrid">Pin Code</label>
                                <span id="PincodeError" style="color: red;">                         echo $Pincode_error</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tab mb-3" id="KycTab">
                <h3 className="mb-3 stepHead">Step 2/4</h3>
                <p className="SubAction">Upload SSN Document</p>

                <div className="form-group mb-3">
                    <label for="exampleFormControlFile1">Passport Photograph</label>
                    <input type="file" name="PanCardUp" className="form-control-file" id="PANCardUp" size="30" accept="image/jpg,image/png,image/jpeg,image/gif" />
                    <span id="PanUPError" style="color: red;">
                        echo $Pan_Up_error
                    </span>
                </div>
                <div className="form-groupmb-3">
                    <label for="exampleFormControlFile1">Upload SSN Card</label>
                    <input type="file" name="AdharCardUp" className="form-control-file" id="AdharCardUp" size="30" accept="image/jpg,image/png,image/jpeg,image/gif" />
                    <span id="AdharUpError" style="color: red;">  echo $Adhar_Up_error</span>
                </div>
                <span id="mailsendError"></span>
            </div>

            <div className="tab">
                <h3 className="mb-3 stepHead">Step 3/4</h3>
                <p className="SubAction">Validate Email Account</p>

                <div className="col-md mb-3">
                    <div className="col-md">
                        <div className="alert alert-success" role="alert">
                            Verification Code Send On Your email, Please check your email
                        </div>
                        <div className="form-floating OtpMobile">
                            <input type="tel" className="form-control" name="Otp" id="Otp" placeholder="Enter 6 Digit OTP" pattern="[0-9]{6}" />
                            <label for="floatingInputGrid">Enter 6 Digit OTP</label>
                            <span style="color: red;" id="OtpError"></span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="tab">
                <h3 className="mb-3 stepHead">Step 4/4</h3>
                <p className="SubAction">Create Username and Password</p>

                <div className="col-md mb-3">
                    <div className="col-md">
                        <div className="form-floating">
                            <input type="text" className="form-control" name="Username" id="Username" placeholder="Create Username" />
                            <label for="floatingInputGrid">Create Username</label>

                            <span style="color: red;" id="UsernameError" name="UsernameError">UsernameError</span>
                        </div>
                    </div>
                </div>
                <div className="col-md mb-3">
                    <div className="col-md">
                        <div className="form-floating">
                            <input className="form-control" type="password" name="Password" id="Password" placeholder="Enter Password" data-toggle="tooltip" data-placement="top" title="Enter Password with atleast 8 charater long with 1 Capital 1 small 1 number and 1 special charater" />
                            <label for="floatingInputGrid">Enter Password</label>

                            <span style="color: red;" id="PasswordError" name="PasswordError"> $PasswordError;</span>
                        </div>
                    </div>
                </div>
                <div className="col-md mb-3">
                    <div className="col-md">
                        <div className="form-floating">
                            <input className="form-control" type="password" name="ConfirmPass" id="ConfirmPass" placeholder="Confirm Password" />
                            <label for="floatingInputGrid">Confirm Password</label>

                            <span style="color: red;" id="ConfirmPassError" name="ConfirmPassError">                                                      echo ConfirmPassError;
                                                                                                  </span>
                        </div>
                    </div>
                </div>
            </div>

            <div style="overflow:auto;">
                <div style="float:right;">
                    <button type="button" id="prevBtn" className="CustomButton" onclick="nextPrev(-1)">Previous</button>
                    <button type="button" id="nextBtn" className="CustomButton" onclick="nextPrev(1)">Next</button>
                    <input type="submit" name="submit" id="submitBtn" className="CustomButton" style="display: none;" />
                </div>
            </div>

            <div style="text-align:center;margin-top:40px;">
                <span className="step"></span>
                <span className="step"></span>
                <span className="step"></span>
                <span className="step"></span>
            </div>
        </form>
    </div>
  )
}

export default CreateAccount