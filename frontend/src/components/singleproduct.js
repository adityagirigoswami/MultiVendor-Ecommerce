import { Link } from "react-router-dom";

function Singleproduct({ product }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div
        className="card shadow-lg rounded-4 h-100 hover-effect"
        style={{
          backgroundColor: "#1f2937", // Slightly lighter than #161b22 for contrast
          color: "#e5e7eb", // Light text for better readability
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        }}
      >
        <Link
          to={`/product/${product.slug}/${product.id}`}
          className="text-decoration-none"
        >
          <img
            src={product.image}
            alt={product.title}
            className="card-img-top rounded-top-4"
            style={{
              objectFit: "cover",
              height: "220px",
              transition: "0.3s ease-in-out",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
            }}
          />
        </Link>

        <div className="card-body px-3 py-2 text-center">
          <Link
            to={`/product/${product.slug}/${product.id}`}
            className="text-decoration-none"
          >
            <h6
              className="fw-bold mb-1"
              style={{ fontSize: "1.1rem", color: "#ffffff" }}
            >
              {product.title}
            </h6>
          </Link>

          <p
            className="mb-1"
            style={{
              fontSize: "0.85rem",
              lineHeight: "1.3",
              color: "#9ca3af", // muted text with visibility
            }}
          >
            Best-in-class quality, perfect for daily use.
          </p>

          <div className="mb-2">
            <span className="text-warning">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            <small className="ms-1 text-light">(120)</small>
          </div>

          <p
            className="fw-semibold mb-0"
            style={{ fontSize: "1rem", color: "#facc15" }} // yellow price
          >
            ₹ {product.price}
          </p>
        </div>

        <div
          className="card-footer d-flex justify-content-center gap-3 pt-3"
          style={{ backgroundColor: "#111827", borderColor: "#374151" }}
        >
          <button
            title="Add to Cart"
            className="btn btn-dark border-light shadow-sm rounded-circle d-flex justify-content-center align-items-center"
            style={{ width: "45px", height: "45px" }}
          >
            <i className="fa-solid fa-cart-plus text-success"></i>
          </button>

          <button
            title="Add to Wishlist"
            className="btn btn-dark border-light shadow-sm rounded-circle d-flex justify-content-center align-items-center"
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
