import { Link } from "react-router-dom";
import Sidebar from "./sidebar";

function ChangePassword(){
    return(
        <div className="container mt-4">
          <div className="row">
              <div className="col-md-3 col-12 mb-2">
                    <Sidebar />

              </div> 
    
                          <div className="col-md-8 col-12">
                          <div className="card">
                          <h4 className="card-header">Change Password</h4>
                    
                          <form>
                                <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label"> Enter Old Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Enter New Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                
                                <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                                </form> 
                                </div>
                                </div>


                          </div>
                      </div>
          
    );
}

export default ChangePassword;