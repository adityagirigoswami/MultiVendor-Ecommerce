import logo from "../logo.svg";

function Singleproduct() {
  return (
    <div className="col-12 col-md-3 mb-4">
                                  <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src={logo} alt="Card cap" />
                                    <div className="card-body">
                                      <h4 className="card-title">Product title</h4>
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
