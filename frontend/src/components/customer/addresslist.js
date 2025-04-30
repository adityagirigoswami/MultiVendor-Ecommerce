import Sidebar from "./sidebar";
import { Link } from "react-router-dom";

function AddressList(){
    return(
        <div className="container mt-4">
          <div className="row">
              <div className="col-md-3 col-12 mb-2">
                    <Sidebar />

              </div> 
    
                          <div className="col-md-9 col-12">
                                <div className="row">
                                    <div className="col-12">
                                        <Link to="/customer/add-address" className="btn btn-outline-success mb-4 float-end"><i className="fa fa-plus-circle"/> Add Address</Link>
                                    </div>
                                <div className="row">
                                    <div className="col-4 mb-4">
                                        <div className="card">
                                            <div className="card-body text-muted">
                                                <h6>
                                                    <i className="fa fa-check-circle text-success mb-2">
                                                    </i><br/>
                                                    st-2 , krishna nagar, New Delhi , India
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 mb-4">
                                        <div className="card">
                                            <div className="card-body text-muted">
                                                <h6>
                                                    <span className="badge bg-secondary mb-2">Mark as Default</span>
                                                    <br/>
                                                    st-2 , krishna nagar, New Delhi , India
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 mb-4">
                                        <div className="card">
                                            <div className="card-body text-muted">
                                                <h6>
                                                    <span className="badge bg-secondary mb-2">Mark as Default</span>
                                                    <br/>
                                                    st-2 , krishna nagar, New Delhi , India
                                                </h6>
                                            </div>
                                        </div>
                                    </div><div className="col-4 mb-4">
                                        <div className="card">
                                            <div className="card-body text-muted">
                                                <h6>
                                                    <span className="badge bg-secondary mb-2">Mark as Default</span>
                                                    <br/>
                                                    st-2 , krishna nagar, New Delhi , India
                                                </h6>
                                            </div>
                                        </div>
                                    </div><div className="col-4 mb-4">
                                        <div className="card">
                                            <div className="card-body text-muted">
                                                <h6>
                                                    <span className="badge bg-secondary mb-2">Mark as Default</span>
                                                    <br/>
                                                    st-2 , krishna nagar, New Delhi , India
                                                </h6>
                                            </div>
                                        </div>
                                    </div><div className="col-4 mb-4">
                                        <div className="card">
                                            <div className="card-body text-muted">
                                                <h6>
                                                    <span className="badge bg-secondary mb-2">Mark as Default</span>
                                                    <br/>
                                                    st-2 , krishna nagar, New Delhi , India
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>

                          </div>
                      </div>
                      </div>
          
    );
}

export default AddressList;