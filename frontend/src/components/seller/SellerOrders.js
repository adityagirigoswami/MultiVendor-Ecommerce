import SellerSidebar from "./SellerSidebar";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
function SellerOrders(){
    return(
        <div className="container mt-4">
          <div className="row">
              <div className="col-md-3 col-12 mb-2">
                    <SellerSidebar />

              </div> 
    
                          <div className="col-md-8 col-12">
                              <div className="table-responsive">
                                  <table className="table table-bordered">
                                      <thead>
                                          <tr>
                                              <th>#</th>
                                              <th>Product</th>
                                              <th>Price</th>
                                              <th>Status</th>
                                              <th>Action</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td>1</td>
                                              <td><Link><img className="img-thumbnail" width='80' src={logo} alt="Card cap" /></Link>
                                              <p><Link>Django</Link></p>
                                              </td>
                                              <td>Rs. 500</td>
                                              <td><spna className="text-success"><i className="fa fa-check-circle"></i> Completed</spna></td>
                                              <td><div class="dropdown">
                                                    <button class="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Change Status
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><a class="dropdown-item" href="#">Approve</a></li>
                                                        <li><a class="dropdown-item" href="#">Accepted</a></li>
                                                        <li><a class="dropdown-item" href="#">Complete</a></li>
                                                    </ul>
                                                    </div></td>
                                          </tr>
                                          <tr>
                                              <td>1</td>
                                              <td><Link><img className="img-thumbnail" width='80' src={logo} alt="Card cap" /></Link>
                                              <p><Link>ReactJS</Link></p>
                                              </td>
                                              <td>Rs. 500</td>
                                              <td><spna className="text-secondary"><i className="fa fa-spin fa-spinner"></i> Processing </spna></td>
                                              <td><div class="dropdown">
                                                    <button class="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Change Status
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><a class="dropdown-item" href="#">Approve</a></li>
                                                        <li><a class="dropdown-item" href="#">Accepted</a></li>
                                                        <li><a class="dropdown-item" href="#">Complete</a></li>
                                                    </ul>
                                                    </div></td>
                                          </tr>
                                          <tr>
                                              <td>1</td>
                                              <td><Link><img className="img-thumbnail" width='80' src={logo} alt="Card cap" /></Link>
                                              <p><Link>NodeJS</Link></p>
                                              </td>
                                              <td>Rs. 500</td>
                                              <td><spna className="text-danger"><i className="fa fa-times-circle"></i> Cancelled</spna></td>
                                              <td><div class="dropdown">
                                                    <button class="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Change Status
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><a class="dropdown-item" href="#">Approve</a></li>
                                                        <li><a class="dropdown-item" href="#">Accepted</a></li>
                                                        <li><a class="dropdown-item" href="#">Complete</a></li>
                                                    </ul>
                                                    </div></td>
                                          </tr>
                                          <tr>
                                              <td>1</td>
                                              <td><Link><img className="img-thumbnail" width='80' src={logo} alt="Card cap" /></Link>
                                              <p><Link>Flask</Link></p>
                                              </td>
                                              <td>Rs. 500</td>
                                              <td><spna className="text-success"><i className="fa fa-check-circle"></i> Completed</spna></td>
                                              <td><div class="dropdown">
                                                    <button class="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Change Status
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><a class="dropdown-item" href="#">Approve</a></li>
                                                        <li><a class="dropdown-item" href="#">Accepted</a></li>
                                                        <li><a class="dropdown-item" href="#">Complete</a></li>
                                                    </ul>
                                                    </div></td>                                          </tr>
                                      </tbody>
                                      
                                  </table>
                              </div>
                          </div>
                      </div>
          </div>
    
    );
}

export default SellerOrders;