import Sidebar from "./sidebar";

function AddAddress(){
    return(
        <div className="container mt-4">
          <div className="row">
              <div className="col-md-3 col-12 mb-2">
                    <Sidebar />

              </div> 
    
                          <div className="col-md-8 col-12">
                <div className="card">
                          <form>
                          <h4 className="card-header bg-light">Add New Address</h4>

                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label"></label>
                                    <input type="text" className="form-control" id="address" />
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

export default AddAddress;