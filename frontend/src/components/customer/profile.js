import Sidebar from "./sidebar";

function Profile(){
    return(
        <div className="container mt-4">
          <div className="row">
              <div className="col-md-3 col-12 mb-2">
                    <Sidebar />

              </div> 
    
                          <div className="col-md-8 col-12">
                <div className="card">
                          <form>
                          <h4 className="card-header bg-light">Update Profile</h4>

                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="firstname" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="firstname" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastname" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="lastname" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">Update Profile Picture</label>
                                    <input className="form-control" type="file" id="formFile" />
                                </div>

                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
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

export default Profile;