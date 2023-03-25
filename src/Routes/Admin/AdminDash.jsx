import React from 'react'
import '../Admin/AdminDash.css'

function AdminDash() {
  return (
    <div>
        <section className="dark_bg admini">

<div id="wrapper">
    <div className="overlay"></div>


    <nav className="fixed-top align-top" id="sidebar-wrapper" role="navigation">
        <div className="simplebar-content" style="padding: 0px;">
            <a className="sidebar-brand" href="../index.php">
                <span className="align-middle"> BANKNAME </span>
            </a>

            <ul className="navbar-nav align-self-stretch">

              
                <li className="">

                    <a className="nav-link text-left active" role="button" aria-haspopup="true" aria-expanded="false">
                        <i className="flaticon-bar-chart-1"></i><i className="bx bxs-dashboard ico"></i> Dashboard
                    </a>
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
                    <div className="collapse menu mega-dropdown" id="collapseExample2">
                        <div className="dropmenu" aria-labelledby="navbarDropdown">
                            <div className="container-fluid ">
                                <div className="row">
                                    <div className="col-lg-12 px-2">
                                        <div className="submenu-box">
                                            <ul className="list-unstyled m-0">
                                               
                                                <li><a href="../admin/accounts/EditAccount.php">Edit Account</a></li>
                                                <li><a href="../admin/accounts/ActivateAccount.php">Activate Account</a></li>
                                                <li><a href="../admin/accounts/DeactivateAccount.php">Deactivate Account</a></li>
                                                <li><a href="../admin/accounts/CloseAccount.php">Close Account</a></li>


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
                        <i className="flaticon-bar-chart-1"></i> <i className="bx bx-check-circle ico"></i> Verify Account <span className="badge badge-success" style="font-size: 12px; margin-left: 50px;">  $countnew</span>
                    </a>
                </li>



                <li className="menuHover">
                    <a href="../admin/cards.php" className="nav-link text-left" role="button">
                        <i className="flaticon-bar-chart-1"></i> <i className="bx bxs-credit-card ico"></i>Cards Requests <span className="badge badge-success" style="font-size: 12px; margin-left: 50px;"> $debitNotifynew</span>
                    </a>
                </li>


                <li className="menuHover">
                    <a className="nav-link text-left" role="button" href="../admin/logout.php">
                        <i className="flaticon-map"></i><i className="bx bx-log-out ico"></i> Logout
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

        
                        <li className="nav-item dropdown  d-sm-none">

                         
                            <div className="dropdown-menu dropdown-menu-right p-3">
                                <form className="form-inline mr-auto w-100 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>


                        <li>
                            <a className="nav-link" href="#" role="button">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">php echo $Admin </span>
                                <img id="AdminDropdown" className="img-profile rounded-circle" src="<?php echo $AdminProfile; ?>" />
                            </a>
                        </li>

                    </ul>

                </nav>
           
                <div className="container-fluid px-lg-4 dark_bg light">
                    <div className="row">
                        <div className="col-md-12 mt-lg-4 mt-4">
                      
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 light">Dashboard</h1>
                                <div>
                                    <a href="../admin/wallet/Deposit.php" role="button" className="btn btn-success btn-circle btn-md ShowHide mr-5">
                                        <div><i className='bx bxs-down-arrow-alt bx-sm'></i></div>Deposit
                                    </a>
                                    <a href="../admin/wallet/Withdraw.php" role="button" className="btn btn-danger btn-circle btn-md ShowHide mr-5">
                                        <div><i className='bx bxs-up-arrow-alt bx-sm'></i></div>Withdraw
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="card gray_bg">
                                        <div className="card-body card-shadow">
                                            <h5 className="card-title light mb-4 ">Total Customer</h5>
                                            <h1 className="display-5 mt-1 mb-3 light">$TotalCustomer"</h1>
                                            <div className="mb-1">
                                                <span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i></span>
                                                <span className="text-muted light"></span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-sm-3">
                                    <div className="card gray_bg">
                                        <div className="card-body card-shadow">
                                            <h5 className="card-title light mb-4">Active Accounts</h5>
                                            <h1 className="display-5 mt-1 mb-3 light"> $ActiveAccount</h1>
                                            <div className="mb-1">
                                                <span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i></span>
                                                <span className="text-muted light"></span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-sm-3">
                                    <div className="card gray_bg">
                                        <div className="card-body card-shadow">
                                            <h5 className="card-title light mb-4">Accounts for Verification</h5>
                                            <h1 className="display-5 mt-1 mb-3 light"> $InactiveAccount</h1>
                                            <div className="mb-1">
                                                <span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i></span>
                                                <span className="text-muted light"></span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-sm-3">
                                    <div className="card gray_bg">
                                        <div className="card-body card-shadow">
                                            <h5 className="card-title light mb-4">Deactivated Accounts</h5>
                                            <h1 className="display-5 mt-1 mb-3 light"> $DeactiveAccount</h1>
                                            <div className="mb-1">
                                                <span className="text-success"> <i className="mdi mdi-arrow-bottom-right"></i></span>
                                                <span className="text-muted light"></span>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>


                        </div>

                        <div className="col-md-12">

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card gray_bg">
                                        <div className="card-body card-shadow">
                                            <h5 className="card-title light mb-4 ">Daily Account Created</h5>
                                            <canvas id="Customer" width="600" height="200"></canvas>

                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-6">

                                    <div className="row">
                                        <div className="col-sm-6">

                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="card gray_bg">
                                                        <div className="card-body card-shadow">

                                                            <div className="d-flex justify-content-center">
                                                                <a role="button" href="../admin/accounts/EditAccount.php" className="btn text-decoration-none btn-custo mt-3 mb-3"><i className='bx bxs-pencil'></i> Edit Account</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="card gray_bg">
                                                        <div className="card-body card-shadow">

                                                            <div className="d-flex justify-content-center">
                                                                <a role="button" href="../admin/accounts/ActivateAccount.php" className="btn text-decoration-none btn-custo mt-3 mb-3"><i className='bx bx-power-off'></i> Activate Account</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-sm-6">
                                            <div className="card gray_bg">
                                                <div className="card-body card-shadow">
                                                    <h5 className="card-title light mb-4">Account Status</h5>
                                                    <canvas id="Accounts"></canvas>
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

            <footer className="footer gray_bg">
                <div className="container-fluid">
                    <div className="row text-muted">
                        <div className="col-6 text-left">
                            <p className="mb-0">
                                <a href="../index.php" className="text-muted light"><strong> echo BANKNAME 
                                    </strong></a> &copy
                            </p>
                        </div>
                        <div className="col-6 text-right">
                            <ul className="list-inline">

                                <li className="footer-item">
                                    <a className="text-muted light" href="../pages/privacypolicy.php">Privacy</a>
                                </li>
                                <li className="footer-item">
                                    <a className="text-muted light" href="../pages/terms.php">Terms</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    </div>

</div>


        </section>



{/* <!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> */}


{/* <script>
    $('#bar').click(function() {
        $(this).toggleClassName('open');
        $('#page-content-wrapper ,#sidebar-wrapper').toggleClassName('toggled');

    });

    // logout popover on profile 




    $("#AdminDropdown").click(function() {
        $(this).popover({

            title: 'Profile Detail',
            html: true,
            container: "body",
            placement: 'bottom',
            content: ` <a href="../admin/logout.php" role="button" className="btn btn-danger nav-link">Logout</a>`

        })


    });
</script> */}

{/* <script>
    var ctx = document.getElementById('Accounts').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Active', 'Inactive', 'Deactivated'],
            datasets: [{
                label: '# of Votes',
                data: [<?php echo $ActiveAccount ?>, <?php echo $InactiveAccount ?>, <?php echo $DeactiveAccount ?>],
                backgroundColor: [
                    'rgba(76, 175, 80, 0.2)',
                    'rgba(102, 31, 255, 0.2)',
                    'rgb(221, 0, 114, 0.2)'

                ],
                borderColor: [
                    'rgba(47, 202, 53, 0.86)',
                    'rgba(54, 162, 235, 1)',
                    'rgb(221, 0, 114, 1)'

                ],
                borderWidth: 1,
                barThickness: 70,

            }]
        },
        options: {
            cutout: "70%",
            radius: "90%",
            // responsive: false,
            layout: {
                padding: {
                    left: -40,
                },

            }
        }
    });


    var ctx = document.getElementById('Customer').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: <?php echo json_encode($date); ?>,
            datasets: [{
                label: '# Account Created',
                data: <?php echo json_encode($data); ?>,
                backgroundColor: [
                    'rgba(98,0,238,1)',

                ],
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1
            }]
        },
        options: {

            // responsive:false,
        }
    });
</script> */}



<div className="modal fade" id="purchaseCode" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Attention!!!</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <p className="text-danger"><strong>As a measure to prevent your account from being hacked, we strongly advise that you do not share your login details with anyone. Knowing that we will never ask you for any of your personal Information.</strong></p>
                <h5>Contact Developer</h5>
                <p> <strong> Telegram Id: </strong> @******</p>
                <p><strong>Email: </strong> email@example.com</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <a href="#" role="button" type="button" className="btn btn-danger">Report a Issue</a>
            </div>
        </div>
    </div>
</div>

{/* <script>
    $(window).on('load', function() {
        $('#purchaseCode').modal('show');
    });
</script> */}

    </div>
  )
}

export default AdminDash