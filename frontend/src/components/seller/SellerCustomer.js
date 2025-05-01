import { Link } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";
import logo from "../../logo.svg";
function SellerCustomer(){
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
                                              <th>Name</th>
                                              <th>Email</th>
                                              <th>Mobile</th>
                                              <th>Action</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td>1</td>
                                              <td>
                                                John Doe
                                              </td>
                                              <td>john2204@gmail.com</td>
                                              <td>9660281955</td>
                                              <td><button type="button" class="btn btn-danger btn-sm">Remove from list</button></td>
                                          </tr>
                                          <tr>
                                              <td>1</td>
                                              <td>
                                                John Doe
                                              </td>
                                              <td>john2204@gmail.com</td>
                                              <td>9660281955</td>
                                              <td><button type="button" class="btn btn-danger btn-sm">Remove from list</button></td>
                                          </tr>
                                          <tr>
                                              <td>1</td>
                                              <td>
                                                John Doe
                                              </td>
                                              <td>john2204@gmail.com</td>
                                              <td>9660281955</td>
                                              <td><button type="button" class="btn btn-danger btn-sm">Remove from list</button></td>
                                          </tr>
                                          
                                      </tbody>
                                      
                                  </table>
                              </div>
                          </div>
                      </div>
          </div>
    );
}

export default SellerCustomer;