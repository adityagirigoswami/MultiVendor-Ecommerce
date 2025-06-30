import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Singleproduct from './singleproduct';
import logo from "../logo.svg";
import "../App.css";

function Home() {
  const baseUrl = "http://127.0.0.1:8000/api";

  const [latestProducts, setLatestProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [popularCategories, setPopularCategories] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/products/latest/`)
      .then(res => res.json())
      .then(data => setLatestProducts(data.results || []));

    fetch(`${baseUrl}/products/expensive/`)  // Replace with your popular products endpoint
      .then(res => res.json())
      .then(data => setPopularProducts(data.results || []));

    fetch(`${baseUrl}/categories/`)  // Replace with your popular categories endpoint
      .then(res => res.json())
      .then(data => setPopularCategories(data.results || []));
  }, []);

  return (
    <main className="pt-4" style={{ background: '#0d1117', color: '#c9d1d9' }}>
      <section className="container">

        {/* Latest Products */}
        <div className="container">
          <h3 className="fw-bold mb-4">
            Latest Products 
            <Link to="/products" className="float-end btn btn-outline-light">
              View All Products <i className="fa-solid fa-arrow-right-long ms-1"></i>
            </Link>
          </h3>
          <div className="row mb-4">
            {latestProducts.map(product => (
              <Singleproduct key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Popular Products */}
        <div className="container">
        <h3 className="fw-bold mb-4">
          Premium Products <Link to="/products" className="float-end btn btn-outline-light">View All</Link>
        </h3>
          <div className="row mb-4">
            {popularProducts.map(product => (
              <Singleproduct key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Popular Categories */}
        <div className="container">
          <h3 className="fw-bold mb-4">
            Popular Categories 
            <Link to="/categories" className="float-end btn btn-outline-light">
              View All Categories <i className="fa-solid fa-arrow-right-long ms-1"></i>
            </Link>
          </h3>
          <div className="row mb-4">
            {popularCategories.map(category => (
              <div className="col-12 col-md-3 mb-4" key={category.id}>
                <div className="card shadow-lg border-0 hover-effect" style={{ backgroundColor: '#161b22', color: '#c9d1d9' }}>
                  <div style={{ backgroundColor: "white" }}>
                    <img className="card-img-top p-2" src={category.image} alt={category.title} style={{ height: "180px", objectFit: "contain" }} />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">{category.title}</h4>
                    <div className="card-footer">
                      Product Downloads: 598
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}

export default Home;
