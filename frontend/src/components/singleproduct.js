import { Link } from "react-router-dom";

function Singleproduct({ product }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div
        className="card border-0 shadow rounded-4 h-100"
        style={{
    minHeight: "350px",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
    border: "1px solid #2a5298", // 🔹 add this line
  }}
      >
        <Link to={`/product/${product.slug}/${product.id}`} className="text-decoration-none">
          <img
            src={product.image}
            alt={product.title}
            className="card-img-top rounded-top-4"
            style={{
              objectFit: "cover",
              height: "220px",
              transition: "0.3s ease-in-out",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Link>

        <div className="card-body px-3 py-2 text-center">
  <Link to={`/product/${product.slug}/${product.id}`} className="text-dark text-decoration-none">
    <h6 className="fw-bold mb-1" style={{ fontSize: "1.1rem" }}>
      {product.title}
    </h6>
  </Link>

  {/* Optional short description or category */}
  <p className="text-muted mb-1" style={{ fontSize: "0.85rem", lineHeight: "1.2" }}>
    Best-in-class quality, perfect for daily use.
  </p>

  {/* Ratings */}
  <div className="mb-2">
    <span className="text-warning">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
    <small className="text-muted ms-1">(120)</small>
  </div>

  <p className="text-dark fw-semibold mb-0" style={{ fontSize: "1rem" }}>
    ₹ {product.price}
  </p>
</div>

<div className="card-footer d-flex justify-content-center gap-3 bg-white border-top pt-3">
  <button
    title="Add to Cart"
    className="btn btn-light border shadow-sm rounded-circle d-flex justify-content-center align-items-center"
    style={{ width: "45px", height: "45px" }}
  >
    <i className="fa-solid fa-cart-plus text-success"></i>
  </button>

  <button
    title="Add to Wishlist"
    className="btn btn-light border shadow-sm rounded-circle d-flex justify-content-center align-items-center"
    style={{ width: "45px", height: "45px" }}
  >
    <i className="fa-solid fa-heart text-danger"></i>
  </button>
</div>


      </div>
    </div>
  );
}

export default Singleproduct;
