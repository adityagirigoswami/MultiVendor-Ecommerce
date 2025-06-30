import { Link } from "react-router-dom";

function SingleRelatedProduct({ product }) {
  return (
    <div
      className="d-flex justify-content-center mb-4"
      style={{ flex: "1 1 250px", maxWidth: "250px" }}
    >
      <div
        className="card shadow-lg rounded-4 h-100 hover-effect w-100"
        style={{
          backgroundColor: "#1f2937",
          color: "#e5e7eb",
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        }}
      >
        <Link
          to={`/product/${product.slug}/${product.id}`}
          className="text-decoration-none"
        >
          <div
            className="bg-white rounded-top-4"
            style={{
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
              style={{
                maxHeight: "180px",
                objectFit: "contain",
                padding: "10px",
              }}
            />
          </div>
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
              color: "#9ca3af",
            }}
          >
            {product.detail || "High-quality script for developers"}
          </p>

          <div className="mb-2">
            <span className="text-warning">
              &#9733;&#9733;&#9733;&#9733;&#9734;
            </span>
            <small className="ms-1 text-light">(120)</small>
          </div>

          <p
            className="fw-semibold mb-0"
            style={{ fontSize: "1rem", color: "#facc15" }}
          >
            ₹ {product.price}
          </p>
        </div>

        <div
          className="card-footer d-flex justify-content-center gap-3 pt-3"
          style={{ backgroundColor: "#1f2937", borderColor: "#374151" }}
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

export default SingleRelatedProduct;





