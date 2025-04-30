import Sidebar from "./sidebar";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
function Orders(){
    return(
        <div className="container mt-4">
          <div className="row">
              <div className="col-md-3 col-12 mb-2">
                    <Sidebar />

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
                                              <td><button className="btn btn-primary btn-sm">Download</button></td>
                                          </tr>
                                          <tr>
                                              <td>1</td>
                                              <td><Link><img className="img-thumbnail" width='80' src={logo} alt="Card cap" /></Link>
                                              <p><Link>ReactJS</Link></p>
                                              </td>
                                              <td>Rs. 500</td>
                                              <td><spna className="text-secondary"><i className="fa fa-spin fa-spinner"></i> Processing </spna></td>

                                          </tr>
                                          <tr>
                                              <td>1</td>
                                              <td><Link><img className="img-thumbnail" width='80' src={logo} alt="Card cap" /></Link>
                                              <p><Link>NodeJS</Link></p>
                                              </td>
                                              <td>Rs. 500</td>
                                              <td><spna className="text-danger"><i className="fa fa-times-circle"></i> Cancelled</spna></td>
                                          </tr>
                                          <tr>
                                              <td>1</td>
                                              <td><Link><img className="img-thumbnail" width='80' src={logo} alt="Card cap" /></Link>
                                              <p><Link>Flask</Link></p>
                                              </td>
                                              <td>Rs. 500</td>
                                              <td><spna className="text-success"><i className="fa fa-check-circle"></i> Completed</spna></td>
                                              <td><button className="btn btn-primary btn-sm">Download</button></td>
                                          </tr>
                                      </tbody>
                                      
                                  </table>
                              </div>
                          </div>
                      </div>
          </div>
    
    );
}

export default Orders;