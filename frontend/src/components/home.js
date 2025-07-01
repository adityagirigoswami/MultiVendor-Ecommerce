import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Singleproduct from './singleproduct';
import Categories from "./categories";
import "../App.css";

function Home() {

  const BASE = process.env.REACT_APP_API_URL;
  const baseUrl = `${BASE}/api`;

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
          {popularCategories.map((category) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mt-4" key={category.id}>
              <div
                className="card shadow-lg rounded-4 h-100 hover-effect"
                style={{
                  backgroundColor: "#1f2937",
                  color: "#e5e7eb",
                  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                }}
              >
                <Link
                  to={`/category/${category.title}/${category.id}`}
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
                      src={category.image}
                      alt={category.title}
                      className="img-fluid"
                      style={{
                        maxHeight: "180px",
                        objectFit: "contain",
                        padding: "10px",
                      }}
                    />
                  </div>

                  <div className="card-body px-3 py-2 text-center">
                    <h6
                      className="fw-bold mb-1"
                      style={{ fontSize: "1.1rem", color: "#ffffff" }}
                    >
                      {category.title}
                    </h6>

                    <p
                      className="mb-1"
                      style={{
                        fontSize: "0.85rem",
                        lineHeight: "1.3",
                        color: "#9ca3af",
                      }}
                    >
                      {category.details}
                    </p>

                  </div>
                </Link>
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
