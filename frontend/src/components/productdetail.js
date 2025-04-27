import { Link } from "react-router-dom";
import logo from "../logo.svg";
import Singleproduct from "./singleproduct";

function ProductDetail() {
  return (
    <section className="container mt-4">
      {/*ProductDetail BOX */}
      <div className="row">
        <div className="col-4">
          {/* logo image carousel start */}

          <div
            id="productdetailCarousel"
            class="carousel slide carousel-dark"
            data-bs-ride="true"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#productdetailCarousel"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#productdetailCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#productdetailCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="row mb-4">
                  <img className="img-thumbnail" src={logo} alt="Card cap" />
                </div>
              </div>
              <div class="carousel-item">
                <div className="row mb-4">
                  <img className="img-thumbnail" src={logo} alt="Card cap" />
                </div>{" "}
              </div>
              <div class="carousel-item">
                <div className="row mb-4">
                  <img className="img-thumbnail" src={logo} alt="Card cap" />
                </div>{" "}
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#productdetailCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#productdetailCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* logo image carousel end */}
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
            <button title="Add to Wishlist" className="btn btn-danger ms-1">
              <i className="fa-solid fa-heart"></i> Add to Wishlist
            </button>
          </p>
          <div className="prdoducttags mt-4">
            <h5>Tags</h5>
            <p>
              <Link to="#" className="badge bg-secondary text-white me-1">
                python
              </Link>
              <Link to="#" className="badge bg-secondary text-white me-1">
                python
              </Link>
              <Link to="#" className="badge bg-secondary text-white me-1">
                python
              </Link>
              <Link to="#" className="badge bg-secondary text-white me-1">
                python
              </Link>
              <Link to="#" className="badge bg-secondary text-white me-1">
                python
              </Link>
              <Link to="#" className="badge bg-secondary text-white me-1">
                python
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* PRODUCT DETAIL BOX END */}

      {/* related poduct  box  */}
      <h3 className="mt-4 mb-4">Related Products</h3>

      <div
        id="relatedproductCarousel"
        class="carousel slide carousel-dark"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#relatedproductCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#relatedproductCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#relatedproductCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="row mb-4">
              <Singleproduct title="react" />
              <Singleproduct title="react" />
              <Singleproduct title="react" />
              <Singleproduct title="react" />
            </div>
          </div>
          <div class="carousel-item">
            <div className="row mb-4">
              <Singleproduct title="react" />
              <Singleproduct title="react" />
              <Singleproduct title="react" />
              <Singleproduct title="react" />
            </div>{" "}
          </div>
          <div class="carousel-item">
            <div className="row mb-4">
              <Singleproduct title="react" />
              <Singleproduct title="jhatu" />
              <Singleproduct title="react" />
              <Singleproduct title="react" />
            </div>{" "}
          </div>
        </div>
      </div>
      {/* related poduct  box  end*/}
    </section>
  );
}

export default ProductDetail;
