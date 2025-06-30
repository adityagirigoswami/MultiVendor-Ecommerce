import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import SingleRelatedProduct from "./singleRelatedProduct";
import { AuthContext } from "./contexts/AuthContext";

function ProductDetail() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [productData, setProductData] = useState({});
  const [productImgs, setProductImgs] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { product_slug, product_id } = useParams();
  const { addToCart, removeFromCart, cartItems , addToWishlist} = useContext(AuthContext);
  const isInCart = cartItems.some((item) => item.id === productData.id);

  useEffect(() => {
    fetchData(baseUrl + "/product/" + product_id);
    fetchRelatedData(baseUrl + "/related-product/" + product_id);
  }, [product_id]);

  function fetchData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
        setProductImgs(data.product_imgs || []);
      });
  }

  function fetchRelatedData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRelatedProducts(data.results || []);
      });
  }

  return (
    <section className="container mt-5 text-light">
      <div className="row">
        {/* Left side: Image Carousel */}
        <div className="col-md-5 mb-4">
          <div
            id="productdetailCarousel"
            className="carousel slide carousel-dark"
            data-bs-ride="carousel"
          >
            {(productImgs && productImgs.length > 0) ? (
  <>
                <div className="carousel-indicators">
                  {productImgs.map((img, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#productdetailCarousel"
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : ""}
                      aria-current={index === 0 ? "true" : undefined}
                      aria-label={`Slide ${index + 1}`}
                      style={{ filter: "brightness(0.7)" }}
                    ></button>
                  ))}
                </div>

                <div className="carousel-inner rounded shadow-lg">
                  {productImgs.map((img, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <img
                        src={img.image}
                        className="d-block w-100 rounded"
                        alt={`Slide ${index + 1}`}
                        style={{ maxHeight: "400px", objectFit: "contain" }}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="carousel-inner rounded shadow-lg">
                <div className="carousel-item active">
                  <img
                    src={productData.image}
                    className="d-block w-100 rounded"
                    alt="Main Product"
                    style={{ maxHeight: "400px", objectFit: "contain" }}
                  />
                </div>
              </div>
            )}

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#productdetailCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                style={{ filter: "invert(1)" }}
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#productdetailCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
                style={{ filter: "invert(1)" }}
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Right side: Product details */}
        <div className="col-md-7">
          <h2 className="mb-3">{productData.title}</h2>
          <p className="lead" style={{ whiteSpace: "pre-wrap" }}>
            {productData.detail}
          </p>
          <h4 className="text-warning mb-3">Price: Rs. {productData.price}</h4>

          <div className="d-flex flex-wrap gap-2 mb-4">
            <a
              href={productData.demo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
              title="Demo"
            >
              <i className="fa-solid fa-cart-plus me-1"></i> Demo
            </a>

            {isInCart ? (
              <button
                className="btn btn-warning"
                onClick={() => removeFromCart(productData.id)}
              >
                <i className="fa-solid fa-trash me-1"></i> Remove from Cart
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => addToCart(productData)}
              >
                <i className="fa-solid fa-cart-plus me-1"></i> Add to Cart
              </button>
            )}

            <button title="Buy Now" className="btn btn-success">
              <i className="fa-solid fa-bag-shopping me-1"></i> Buy Now
            </button>
            <button title="Add to Wishlist" className="btn btn-danger" onClick={() => addToWishlist(productData.id)}>
              <i className="fa-solid fa-heart me-1"></i> Add to Wishlist
            </button>
          </div>

          <div className="product-tags">
            <h5 className="mb-2">Tags</h5>
            <div className="d-flex flex-wrap gap-2">
              {/* Assuming you have tags array in productData.tags */}
              {(productData.tags || ["python", "django", "react"]).map(
                (tag, index) => (
                  <Link
                    key={index}
                    to="#"
                    className="badge bg-secondary text-light text-uppercase px-3 py-2"
                    style={{ fontSize: "0.9rem", opacity: 0.85 }}
                  >
                    {tag}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
  <>
    <h3 className="mt-5 mb-4 text-center text-light">
      Related Products
    </h3>

    <div
      className="d-flex overflow-auto px-2"
      style={{
        gap: "1rem",
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {relatedProducts.map((product, index) => (
        <div
          key={index}
          style={{
            flex: "0 0 auto",
            scrollSnapAlign: "start",
          }}
        >
          <SingleRelatedProduct product={product} />
        </div>
      ))}
    </div>
  </>
)}
    </section>
  );
}

export default ProductDetail;
