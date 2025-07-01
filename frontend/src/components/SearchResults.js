import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const BASE = process.env.REACT_APP_API_URL;
const BACKEND = `${BASE}`;     // change if needed

function SearchResults() {
  const query = useQuery().get("q") || "";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    fetch(`${BACKEND}/api/products/?search=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.results || data)) // adapt if your API wraps in results
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <div
      className="container-fluid px-4 py-4"
      style={{
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <h2 className="mb-4" style={{ color: "#00e6e6" }}>
        🔍 Results for &quot;{query}&quot;
      </h2>

      {loading ? (
        <p>Loading…</p>
      ) : products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="d-flex flex-column gap-3">
          {products.map((p) => (
            <div
              key={p.id}
              className="card shadow border-0"
              style={{ backgroundColor: "#1f2937", borderRadius: "15px" }}
            >
              <div className="card-body d-flex align-items-center">
                <img
                  src={
                    p.image?.startsWith("http")
                      ? p.image
                      : `${BACKEND}${p.image}`
                  }
                  alt={p.title}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginRight: "20px",
                  }}
                />
                <div className="flex-grow-1 text-white">
                  <h5 className="mb-1">{p.title}</h5>
                  <p className="mb-1 text-info">₹{p.price}</p>
                  <p className="small ">{p.detail}</p>
                </div>
                <Link
                  to={`/product/${p.slug}/${p.id}`}
                  className="btn btn-info btn-sm"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
