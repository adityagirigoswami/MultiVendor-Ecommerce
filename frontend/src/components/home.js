import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";
import Singleproduct from './singleproduct';

function Home() {
  const products = [
    {
      title: 'product_1',
      price: 100,
      image: "http://localhost:8000/media/product_imgs/2.jpg"
    },
    {
      title: 'product_2',
      price: 200,
      image: "http://localhost:8000/media/product_imgs/3.jpg"
    },
    {
      title: 'product_3',
      price: 300,
      image: "http://localhost:8000/media/product_imgs/4.jpg"
    },
    {
      title: 'product_4',
      price: 400,
      image: "http://localhost:8000/media/product_imgs/5.jpg"
    },
  ];

  return (
    <main className="pt-4" style={{ background: '#0d1117', color: '#c9d1d9' }}>
      <section className="container">
        {/* Latest Products */}
        <div className="container">
          <h3 className="fw-bold mb-4">
            Latest Products <Link to="/products"
              className="float-end btn btn-outline-light">View All Products
              <i className="fa-solid fa-arrow-right-long ms-1"></i></Link>
          </h3>
          <div className="row mb-4">
            {products.map((product) => <Singleproduct product={product} />)}
          </div>
        </div>

        {/* Popular Products */}
        <div className="container">
          <h3 className="fw-bold mb-4">
            Popular Products <a href="#" className="float-end btn btn-outline-light">View All Products
              <i className="fa-solid fa-arrow-right-long ms-1"></i></a>
          </h3>
          <div className="row mb-4">
            {[...Array(4)].map((_, i) => (
              <div className="col-12 col-md-3 mb-4" key={i}>
                <div className="card shadow-lg border-0 hover-effect" style={{ backgroundColor: '#161b22', color: '#c9d1d9' }}>
                  <img className="card-img-top" src={logo} alt="Card cap" />
                  <div className="card-body">
                    <h4 className="card-title">Product Title</h4>
                    <div className="card-footer">
                      Price: RS.500
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Categories */}
        <div className="container">
          <h3 className="fw-bold mb-4">
            Popular Categories <a href="/categories" className="float-end btn btn-outline-light">View All Categories
              <i className="fa-solid fa-arrow-right-long ms-1"></i></a>
          </h3>
          <div className="row mb-4">
            {[...Array(4)].map((_, i) => (
              <div className="col-12 col-md-3 mb-4" key={i}>
                <div className="card shadow-lg border-0 hover-effect" style={{ backgroundColor: '#161b22', color: '#c9d1d9' }}>
                  <img className="card-img-top" src={logo} alt="Card cap" />
                  <div className="card-body">
                    <h4 className="card-title">Product Category</h4>
                    <div className="card-footer">
                      Product Downloads: 598
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Sellers */}
        <div className="container">
          <h3 className="fw-bold mb-4">
            Popular Sellers <a href="#" className="float-end btn btn-outline-light">View All Sellers
              <i className="fa-solid fa-arrow-right-long ms-1"></i></a>
          </h3>
          <div className="row mb-4">
            {[...Array(3)].map((_, i) => (
              <div className="col-12 col-md-3 mb-4" key={i}>
                <div className="card shadow-lg border-0 hover-effect" style={{ backgroundColor: '#161b22', color: '#c9d1d9' }}>
                  <img className="card-img-top" src={logo} alt="Card cap" />
                  <div className="card-body">
                    <h4 className="card-title">Seller Name</h4>
                    <div className="card-footer">
                      Categories: <a href="#">Tech</a>, <a href="#">More</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews */}
        <div id="carouselExampleIndicators" className="carousel slide mb-5 container p-5" style={{ backgroundColor: '#161b22' }}>
          <div className="carousel-indicators">
            {[0, 1, 2].map((index) => (
              <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-label={`Slide ${index + 1}`}></button>
            ))}
          </div>
          <div className="carousel-inner">
            {["A well-known quote.", "first comment by aditya ji.", "osho the master of spirituality and philosophy"].map((text, i) => (
              <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>{text}</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    {[...Array(5)].map((_, j) => (
                      <i className="fa-solid fa-star text-warning" key={j}></i>
                    ))}
                    <cite title="Source Title">Source Title</cite>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Pagination */}
        {/* <nav aria-label="Page navigation example" className="mb-5">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link bg-dark text-light" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link bg-dark text-light" href="#">1</a></li>
            <li className="page-item"><a className="page-link bg-dark text-light" href="#">2</a></li>
            <li className="page-item"><a className="page-link bg-dark text-light" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link bg-dark text-light" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav> */}
      </section>
    </main>
  );
}

export default Home;
