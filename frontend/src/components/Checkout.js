import logo from "../logo.svg";
import { Link } from "react-router-dom";
function Checkout() {
  return (
    <div className="container mt-4">
        <h3 className="mb-4">All Items (4)</h3>
        <div className="row">
            <div className="col-md-8 col-12">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><Link><img className="img-thumbnail" width='80' src={logo} alt="Card cap" /></Link>
                                <p><Link>Django</Link></p>
                                </td>
                                <td>Rs. 500</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td><Link><img className="img-thumbnail" width='80' src={logo} alt="Card cap" /></Link>
                                <p><Link>ReactJS</Link></p>
                                </td>
                                <td>Rs. 500</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td><Link><img className="img-thumbnail" width='80' src={logo} alt="Card cap" /></Link>
                                <p><Link>NodeJS</Link></p>
                                </td>
                                <td>Rs. 500</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td><Link><img className="img-thumbnail" width='80' src={logo} alt="Card cap" /></Link>
                                <p><Link>Flask</Link></p>
                                </td>
                                <td>Rs. 500</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Total</th>
                                <th>Rs. 2000</th>
                            </tr>
                            <tr>
                                <td colSpan='3' align="center">
                                    <Link to="/categories" className="btn btn-secondary">Continue Shopping</Link>
                                    <Link to="#" className="btn btn-success ms-1">Proceed To Payment</Link>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>

);
}

export default Checkout;
