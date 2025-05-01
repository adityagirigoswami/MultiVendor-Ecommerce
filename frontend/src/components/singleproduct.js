import logo from "../logo.svg";
import { Link } from "react-router-dom";
function Singleproduct(props) {
  return (
    <div className="col-12 col-md-3 mb-4">
                                  <div className="card shadow" style={{ width: "18rem" }}>
                                    <Link to="/product/python-timer/123"><img className="card-img-top" src={logo} alt="Card cap" /></Link>
                                    <div className="card-body">
                                    <Link to="/product/python-timer/123"><h4 className="card-title">{props.title}</h4></Link>
                                      <h5 className="card-title text-muted">Price: Rs.500</h5>
                                    </div>
                                    <div className="card-footer">
                                      <button
                                        title="add to cart"
                                        className="btn btn-success btn-sm"
                                      >
                                        <i className="fa-solid fa-cart-plus fa-2x"></i>
                                      </button>
                                      <button
                                        title="Add to Wishlist"
                                        className="btn btn-danger btn-sm ms-1"
                                      >
                                        <i className="fa-solid fa-heart fa-2x"></i>
                                      </button>
                                    </div>
                                  </div>
                                </div>
  );
}

export default Singleproduct;
