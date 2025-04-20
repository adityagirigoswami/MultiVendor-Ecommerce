import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";
import Header from "./components/Headers";

function App() {
  return (
    <>
     
     <Header />
      <main className="mt-3">
{/* latest product  */}
        <div className="container">
          <h3 className="fw-bold mb-4">
            Latest Products <a href="#"
              className="float-end btn btn-dark">View All Products  
              <i class="fa-solid fa-arrow-right-long ms-1"></i></a>
          </h3>
          <div className="row mb-4">
           
            {/* produt box */}
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
            {/* produt box end */}
            {/* produt box */}
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
            {/* produt box end */}
            {/* produt box */}
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
            {/* produt box end */}
            {/* produt box */}
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
            {/* produt box end */}
          {/* produt box */}
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
            {/* produt box end */}
            {/* produt box */}
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
            {/* produt box end */}
            {/* produt box */}
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
            {/* produt box end */}
            {/* produt box */}
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
            {/* produt box end */}
          </div>
        {/* latest product end  */}
        </div>


{/* Popular Categories*/}
        <div className="container">
          <h3 className="fw-bold mb-4">
            Popular Categories <a href="#"
              className="float-end btn btn-dark">View All Categories  
              <i class="fa-solid fa-arrow-right-long ms-1"></i></a>
          </h3>
          <div className="row mb-4">
           
            {/* Category box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product Category</h4>
                  <div className="card-footer">
                      product download : 598
                </div>
                </div>
              </div>
            </div>
            {/* Category box end */}
            
            {/* Category box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product Category</h4>
                  <div className="card-footer">
                      product download : 598
                </div>
                </div>
              </div>
            </div>
            {/* Category box end */}
            
            {/* Category box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product Category</h4>
                  <div className="card-footer">
                      product download : 598
                </div>
                </div>
              </div>
            </div>
            {/* Category box end */}
            
            {/* Category box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product Category</h4>
                  <div className="card-footer">
                      product download : 598
                </div>
                </div>
              </div>
            </div>
            {/* Category box end */}
          </div>
        {/* Popular Categoy product end  */}
        </div>


{/* Popular product  */}

      <div className="container">
          <h3 className="fw-bold mb-4">
            Popular Products <a href="#"
              className="float-end btn btn-dark">View All Products  
              <i class="fa-solid fa-arrow-right-long ms-1"></i></a>
          </h3>
          <div className="row mb-4">
           
            {/* Popular Product box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product Title</h4>
                  <div className="card-footer">
                      Price: RS.500
                </div>
                </div>
              </div>
            </div>
            {/* Popular Product box end */}
                        {/* Popular Product box */}
                        <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product Title</h4>
                  <div className="card-footer">
                      Price: RS.500
                </div>
                </div>
              </div>
            </div>
            {/* Popular Product box end */}            {/* Popular Product box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product Title</h4>
                  <div className="card-footer">
                      Price: RS.500
                </div>
                </div>
              </div>
            </div>
            {/* Popular Product box end */}            {/* Popular Product box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product Title</h4>
                  <div className="card-footer">
                      Price: RS.500
                </div>
                </div>
              </div>
            </div>
            {/* Popular Product box end */}
            

            
            
          </div>
        {/* Popular product end  */}
            </div>


{/* popular seller */}
<div className="container">
          <h3 className="fw-bold mb-4">
            Popular Seller <a href="#"
              className="float-end btn btn-dark">View All Seller
              <i class="fa-solid fa-arrow-right-long ms-1"></i></a>
          </h3>
          <div className="row mb-4">
       
            {/* Popular Seller box*/}            
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Seller Name</h4>
                  <div className="card-footer">
                     Categories: <a href="#">Python</a>, <a href="#">DJango</a>
                </div>
                </div>
              </div>
            </div>
            {/* Popular Seller box end */}
            {/* Popular Seller box*/}            
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Seller Name</h4>
                  <div className="card-footer">
                     Categories: <a href="#">Fastapi</a>, <a href="#">Flask</a>
                </div>
                </div>
              </div>
            </div>
            {/* Popular Seller box end */}
            {/* Popular Seller box*/}            
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Seller Name</h4>
                  <div className="card-footer">
                     Categories: <a href="#">React</a>, <a href="#">Node</a>
                </div>
                </div>
              </div>
            </div>
            {/* Popular Seller box end */}

          </div>
        {/* Popular Seller end  */}
            </div>


      </main>
    </>
  );
}

export default App;
