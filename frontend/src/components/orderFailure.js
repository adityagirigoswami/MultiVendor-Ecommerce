
import { Link } from "react-router-dom";
function OrderFailure() {
  return (
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-8 offset-2">
                <div className="card">
                    <div className="card-body text-center">
                        <p><i className="fa fa-times-circle text-danger fa-3x"></i></p>
                        <h3 className="text-danger">Oops... Something Went Wrong</h3>
                        <p className="mt-2">
                            <Link to="/" className="btn btn-primary ms-2">Home</Link>
                            <Link to="/customer/dashboard" className="btn btn-secondary ms-2 ">Dashboard</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

);
}

export default OrderFailure;
