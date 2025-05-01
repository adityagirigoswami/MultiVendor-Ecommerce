// import logo from "../logo.svg";
import { Link } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";
function SellerProduct() {
    return (
      <div className="container mt-4">
          <div className="row">
              <div className="col-md-3 col-12 mb-2">
                    <SellerSidebar />

              </div> 
              <div className="col-md-9 col-12 mb-2">
                <div className="row">
                    <div className="col-12 mb-2 ">
                    <Link to="/seller/add-products" className="btn btn-primary float-end">
                          <i className="fa fa-plus-circle"></i> Add Products
                    </Link>  

                </div>
                </div>
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
                                <td>Product Title</td>
                                <td>Rs. 500</td>
                                <td>Published</td>
                                <td><a href="#" className="btn btn-info me-1">View</a>
                                <a href="#" className="btn btn-primary me-1">Edit</a>
                                <a href="#" className="btn btn-danger me-1">Delete</a></td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
                </div>
              </div> 
          </div>

  
  );
  }
  
  export default SellerProduct;
  