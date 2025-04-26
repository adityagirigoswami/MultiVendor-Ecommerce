import { Link } from "react-router-dom";
import logo from "../logo.svg";
function ProductDetail() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-4">
          <img className="card-img-top" src={logo} alt="Card cap" />
        </div>
        <div className="col-8">
          <h3>Product Title</h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
          <h5 className="card-title">Price: Rs. 500</h5>
          <p className="mt-3">
          <Link title="demo" target="_blank_" className="btn btn-dark">
              <i className="fa-solid fa-cart-plus"></i> Demo
            </Link>
            <button title="add to cart" className="btn btn-primary ms-1">
              <i className="fa-solid fa-cart-plus"></i> Add to Cart
            </button>
            
            <button title="buy now" className="btn btn-success ms-1">
              <i className="fa-solid fa-bag-shopping"></i> Buy Now
            </button>
            <button
              title="Add to Wishlist"
              className="btn btn-danger ms-1"
            >
              <i className="fa-solid fa-heart"></i> Add to Wishlist
            </button>
          </p>
            <div className="prdoducttags mt-4">
            <h5>Tags</h5>
            <p>
                <Link to="#" className="badge bg-secondary text-white me-1">python</Link>
                <Link to="#" className="badge bg-secondary text-white me-1">python</Link>
                <Link to="#" className="badge bg-secondary text-white me-1">python</Link>
                <Link to="#" className="badge bg-secondary text-white me-1">python</Link>
                <Link to="#" className="badge bg-secondary text-white me-1">python</Link>
                <Link to="#" className="badge bg-secondary text-white me-1">python</Link>
            </p>

            </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
