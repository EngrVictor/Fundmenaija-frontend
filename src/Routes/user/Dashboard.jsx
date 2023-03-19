import React from 'react'
import './dashboard.css';

function Dashboard() {
  return (
    <div>
        <div className="container-fluid px-lg-4">
        <div className="row">
            <div className="col-md-12 mt-lg-4 mt-4">
      
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i>
                        Generate Report</a>
                </div>
            </div>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title mb-4">Balance</h5>
                                <h1 id="BalanceDisplay" className="display-5 mt-1 mb-3"></h1>
                                <div className="mb-1">
                                    <span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i></span>
                                    <span className="text-muted">Your Total Balance</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title mb-4">Saving</h5>
                                <h1 id="SavingDisplay" className="display-5 mt-1 mb-3"></h1>
                                <div className="mb-1">
                                    <span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i></span>
                                    <span className="text-muted">Save Money Monthly</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title mb-4 ">Credited this Month</h5>
                                <h1 id="CreditDisplay" className="display-5 mt-1 mb-3 text-success"></h1>
                                <div className="mb-1">
                                    <span id="CreditLastM" className="text-success"> <i className="mdi mdi-arrow-bottom-right"></i></span>
                                    <span className="text-muted">Since last Month</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title mb-4">Debited this Month</h5>
                                <h1 id="DebitDisplay" className="display-5 mt-1 mb-3 text-danger"></h1>
                                <div className="mb-1">
                                    <span id="DebitLastM" className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i> </span>
                                    <span className="text-muted">Since last Month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-12 mt-4">
                <div className="card">
                    <div className="card-body">
                        <div className="d-md-flex align-items-center">
                            <div>
                                <h4 className="card-title">Transaction History</h4>
                                <h5 className="card-subtitle">Overview of recent transaction</h5>
                            </div>
                            <div className="ml-auto">
                                <a href="T_history.php" className="btn btn-info" role="button">View More</a>
                              <div className="dl">
                                    <select className="custom-select" defaultValue={0}>
                                        <option value="0">Monthly</option>
                                        <option value="1">Daily</option>
                                        <option value="2">Weekly</option>
                                        <option value="3">Yearly</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table v-middle">
                            <thead>
                                <tr className="bg-light">
                                    <th className="border-top-0">Sr.No</th>
                                    <th className="border-top-0">Name</th>
                                    <th className="border-top-0">Account No</th>
                                    <th className="border-top-0">Date</th>
                                    <th className="border-top-0">Amount</th>
                                    <th className="border-top-0">Status</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>echo $increment</td>
                                <td>
                                <div className="d-flex align-items-center">
                                <div className="m-r-10">{/* <a style="font-size: 13px; background-color:<?php echo $row['ProfileColor'] ?>" className="btn btn-circle text-white"> name = $row['Name'];
                                                                                                                                                                                            $pices = explode(" ", $name);
                                                                                                                                                                                            echo substr($pices[0], 0, 1);
                                                                                                                                                                                            echo substr($pices[1], 0, 1);</a> */}
                                                    </div>
                                                    <div className="">
                                                        <h4 className="m-b-0 font-16">p echo $row['Name']</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td> echo $row['FAccountNo']</td>
                                            <td> echo $row['Date'] </td>
                                            <td>
                                                <label className="label label-danger"> echo $row['Amount']</label>
                                            </td>
                                            <td>

                                                <span className="Status">
                                           {/* text-danger
                                            else
                                                echo 
                                            php echo*/} </span> 

                                            </td>

                                        </tr>
                                
                                        {/* $increment++; */}
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