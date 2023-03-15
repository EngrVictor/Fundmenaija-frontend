import React from 'react'
import '../User/dashboard.css';

function Dashboard() {
  return (
    <div>
        <div class="container-fluid px-lg-4">
        <div class="row">
            <div class="col-md-12 mt-lg-4 mt-4">
      
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i>
                        Generate Report</a>
                </div>
            </div>
            <div class="col-md-12">
                <div class="row">
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title mb-4">Balance</h5>
                                <h1 id="BalanceDisplay" class="display-5 mt-1 mb-3"></h1>
                                <div class="mb-1">
                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right"></i></span>
                                    <span class="text-muted">Your Total Balance</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title mb-4">Saving</h5>
                                <h1 id="SavingDisplay" class="display-5 mt-1 mb-3"></h1>
                                <div class="mb-1">
                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right"></i></span>
                                    <span class="text-muted">Save Money Monthly</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title mb-4 ">Credited this Month</h5>
                                <h1 id="CreditDisplay" class="display-5 mt-1 mb-3 text-success"></h1>
                                <div class="mb-1">
                                    <span id="CreditLastM" class="text-success"> <i class="mdi mdi-arrow-bottom-right"></i></span>
                                    <span class="text-muted">Since last Month</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title mb-4">Debited this Month</h5>
                                <h1 id="DebitDisplay" class="display-5 mt-1 mb-3 text-danger"></h1>
                                <div class="mb-1">
                                    <span id="DebitLastM" class="text-danger"> <i class="mdi mdi-arrow-bottom-right"></i> </span>
                                    <span class="text-muted">Since last Month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-12 mt-4">
                <div class="card">
                    <div class="card-body">
                        <div class="d-md-flex align-items-center">
                            <div>
                                <h4 class="card-title">Transaction History</h4>
                                <h5 class="card-subtitle">Overview of recent transaction</h5>
                            </div>
                            <div class="ml-auto">
                                <a href="T_history.php" class="btn btn-info" role="button">View More</a>
                              <div class="dl">
                                    <select class="custom-select">
                                        <option value="0" selected="">Monthly</option>
                                        <option value="1">Daily</option>
                                        <option value="2">Weekly</option>
                                        <option value="3">Yearly</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table v-middle">
                            <thead>
                                <tr class="bg-light">
                                    <th class="border-top-0">Sr.No</th>
                                    <th class="border-top-0">Name</th>
                                    <th class="border-top-0">Account No</th>
                                    <th class="border-top-0">Date</th>
                                    <th class="border-top-0">Amount</th>
                                    <th class="border-top-0">Status</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>echo $increment</td>
                                <td>
                                <div class="d-flex align-items-center">
                                <div class="m-r-10"><a style="font-size: 13px; background-color:<?php echo $row['ProfileColor'] ?>" class="btn btn-circle text-white"> name = $row['Name'];
                                                                                                                                                                                            $pices = explode(" ", $name);
                                                                                                                                                                                            echo substr($pices[0], 0, 1);
                                                                                                                                                                                            echo substr($pices[1], 0, 1);</a>
                                                    </div>
                                                    <div class="">
                                                        <h4 class="m-b-0 font-16">p echo $row['Name']</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td> echo $row['FAccountNo']</td>
                                            <td> echo $row['Date'] </td>
                                            <td>
                                                <label class="label label-danger"> echo $row['Amount']</label>
                                            </td>
                                            <td>

                                                <span class="Status">
                                           text-danger
                                            else
                                                echo 
                                            php echo </span>

                                            </td>

                                        </tr>
                                
                                        $increment++;
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Dashboard