// import logo from "../logo.svg";
// import { Link } from "react-router-dom";
function SellerLogin() {
    return (
      <div className="container mt-4">
          <div className="row">
              <div className="col-md-8 col-12 offset-2">
                  <div className="card ">
                      <h4 className="card-header">Register</h4>
                      <div className="card-body ">
                          <form>
                              <div className="mb-3">
                                  <label for="username" className="form-label">Username</label>
                                  <input type="text" className="form-control" id="username" />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="Password" className="form-label">Password</label>
                                  <input type="password" className="form-control" id="Password" />
                              </div>
                              <button type="submit" className="btn btn-primary">Submit</button>
                          </form>
  
                      </div>
                  </div>
              </div> 
          </div>
      </div>
  
  );
  }
  
  export default SellerLogin;
  