import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Categories() {
  const BASE = process.env.REACT_APP_API_URL;
  const baseUrl = `${BASE}/api`;
  const [categories, setCategories] = useState([]);
  const [totalResult, setTotalResult] = useState(0);

  useEffect(() => {
    fetchData(baseUrl + "/categories");
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.results);
        setTotalResult(data.count);
      });
  }

  function changeUrl(baseUrl) {
    fetchData(baseUrl);
  }

  let links = [];
  const limit = 1;
  const totalLinks = Math.ceil(totalResult / limit);
  for (let i = 1; i <= totalLinks; i++) {
    links.push(
      <li className="page-item" key={i}>
        <Link
          onClick={() => changeUrl(`${baseUrl}/categories/?page=${i}`)}
          to={`/categories/?page=${i}`}
          className="page-link"
        >
          {i}
        </Link>
      </li>
    );
  }

  return (
    <>
      <div className="container">
        <h3 className="fw-bold mt-3 mb-4 text-light">All Categories</h3>
        <div className="row mb-4">
          {categories.map((category) => (
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
    </>
  );
}

export default Categories;
