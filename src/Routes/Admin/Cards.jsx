import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function cards() {

    useEffect(() => {
        $(window).on('load', function() {
            $('#purchaseCode').modal('show');
        });

        // if (window.history.replaceState) {
        //     window.history.replaceState(null, null, window.location.href);
        // }
        //     $('#bar').click(function() {
        //         $(this).toggleClass('open');
        //         $('#page-content-wrapper ,#sidebar-wrapper').toggleClass('toggled');
        //     });
        //     $("#AdminDropdown").click(function() {
        //         $(this).popover({
        
        //             title: 'Profile Detail',
        //             html: true,
        //             container: "body",
        //             placement: 'bottom',
        //             content: ` <a href="../admin/logout.php" role="button" class="btn btn-danger nav-link">Logout</a>`
        //         })
        //     });

    }, [])
  return (
    <div className="dark_bg">
        <div id="wrapper">
            <div className="overlay"></div>
            <nav className="fixed-top align-top" id="sidebar-wrapper" role="navigation">
                <div className="simplebar-content" style="padding: 0px;">
                    <Link className="sidebar-brand" href="../index.php">
                        <span className="align-middle">FundMeNaija</span>
                    </Link>
                    <ul className="navbar-nav align-self-stretch">
                        <li className="menuHover">
                            <Link to={"./Dashboard.php"} className="nav-link text-left" role="button" aria-haspopup="true" aria-expanded="false">
                                <i className="flaticon-bar-chart-1"></i><i className="bx bxs-dashboard ico"></i> Dashboard
                            </Link>
                        </li>
                        <li className="has-sub menuHover">
                            <a className="nav-link collapsed text-left" href="#collapseExample1" role="button" data-toggle="collapse">
                                <i className="flaticon-user"></i> <i className="bx bxs-wallet-alt Profile ico"></i> Wallet
                            </a>
                            <div className="collapse menu mega-dropdown" id="collapseExample1">
                                <div className="dropmenu" aria-labelledby="navbarDropdown">
                                    <div className="container-fluid ">
                                        <div className="row">
                                            <div className="col-lg-12 px-2">
                                                <div className="submenu-box">
                                                    <ul className="list-unstyled m-0">
                                                        <li><a href="../admin/wallet/Withdraw.php">Withdraw Money</a></li>
                                                        <li><a href="../admin/wallet/Deposit.php">Deposit Money</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="menuHover">
                            <a href="../admin/TransferMoney.php" className="nav-link text-left" role="button">
                                <i className="flaticon-bar-chart-1"></i><i className="bx bx-transfer ico"></i> Transfer
                            </a>
                        </li>
                        <li className="has-sub menuHover">
                            <a className="nav-link collapsed text-left" href="#collapseExample2" role="button" data-toggle="collapse">
                                <i className="flaticon-user"></i> <i className="bx bx-user-circle Profile ico"></i> Customer Accounts
                            </a>
                            <div className="collapse menu mega-dropdown " id="collapseExample2">
                                <div className="dropmenu" aria-labelledby="navbarDropdown">
                                    <div className="container-fluid ">
                                        <div className="row">
                                            <div className="col-lg-12 px-2">
                                                <div className="submenu-box">
                                                    <ul className="list-unstyled m-0">
                                                        <li><Link to={"../admin/accounts/EditAccount.php"}>Edit Account</Link></li>
                                                        <li><Link to={"../admin/accounts/ActivateAccount.php"}>Activate Account</Link></li>
                                                        <li><Link href="../admin/accounts/DeactivateAccount.php">Deactivate Account</Link></li>
                                                        <li><Link to={"../admin/accounts/CloseAccount.php"}>Close Account</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="menuHover box-icon">
                            <a href="../admin/VerifyAccount.php" className="nav-link text-left" role="button">
                                <i className="flaticon-bar-chart-1"></i> <i className="bx bx-check-circle ico"></i> Verify Account <span className="badge badge-success" style="font-size: 12px; margin-left: 50px;"> Echo Count new</span>
                            </a>
                        </li>
                        <li class="menuHover">
                            <a href="../admin/cards.php" class="nav-link text-left active" role="button">
                                <i class="flaticon-bar-chart-1"></i> <i class="bx bxs-credit-card ico"></i>Fund Requests <span class="badge badge-success" style="font-size: 12px; margin-left: 50px;"> php echo $debitNotify new</span>
                            </a>
                        </li>
                        <li class="menuHover">
                            <a class="nav-link text-left" role="button" href="../admin/logout.php">
                                <i class="flaticon-map"></i><i class="bx bx-log-out ico"></i> Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div id="page-content-wrapper">
                <div id="content">
                <div className="container-fluid p-0 px-lg-0 px-md-0">
                    <nav className="navbar navbar-expand navbar-light gray_bg my-navbar">
                        <div type="button" id="bar" className="nav-icon1 hamburger animated fadeInLeft is-closed" data-toggle="offcanvas">
                            <span className="light_bg"></span>
                            <span className="light_bg"></span>
                            <span className="light_bg"></span>
                        </div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ">
                                <a className="nav-link " href="#" role="button">
                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">php echo $Admin </span>
                                    <img id="AdminDropdown" className="img-profile rounded-circle" src="<?php echo $AdminProfile; ?>" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="container-fluid px-lg-4 dark_bg light">
                        <div className="row">
                            <div class="col-md-12 mt-lg-4 mt-4">
                                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 class="h3 mb-0 light">Verify Debit Cards</h1>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="card gray_bg">
                                            <div class="card-body ">
                                                <h5 class="card-title light mb-4 "></h5>
                                                <div class="table-responsive">
                                                    <table id="EditTable" class="table v-middle" style="margin-top: 30px;">
                                                        <thead class="thead-light">
                                                            <tr>
                                                                <th scope="col">#ID</th>
                                                                <th scope="col">Account No</th>
                                                                <th scope="col">Name</th>
                                                                <th scope="col">D-card No</th>
                                                                <th scope="col">CVV No</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col">Verify Account</th>
                                                                <th scope="col">Reject Account</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="dark_bg">
                                                            $row = mysqli_fetch_assoc-$result 
                                                                <tr>
                                                                    <th class="light" scope="row">php echo $row['srNo']; </th>

                                                                    <td class="light">php echo $row['AccountNo']; </td>

                                                                    <td class="light">php echo $row['Name']; ?</td>

                                                                    <td class="light">php echo $row['CardNo']; </td>

                                                                    <td class="light">php echo $row['cvv']; </td>

                                                                    <td class="light">php echo $row['Status']; </td>

                                                                    <td class="light">

                                                                        <button id="<?php echo $row['AccountNo']; ?>" class="btn btn-success verify_data"><i class='bx bx-user-check'></i> Verify</button>

                                                                    </td>
                                                                    <td class="light">
                                                                        <button id="<?php echo $row['AccountNo'];
                                                                                    ?>" class="btn btn-danger reject_data"><i class='bx bx-user-x'></i> Reject</button>
                                                                    </td>
                                                                </tr>

                                                            php
                                                            
                                                        else 
                                                            
                                                            
                                                            <h1 class="light" style="text-align: center;">No Fund Raiser For Verification</h1>
                                                            
                                                            php
                                                        
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* // import AdminFooter here */}
        {/* // card.js import here */}
    </div>
    </div>
  )
}

export default cards
