import Singleproduct from "./singleproduct";
import { useState,useEffect } from "react";
function AllProducts() {

  const [products,setProducts] = useState([])

  useEffect(() => {
        fetchData('http://127.0.0.1:8000/api/products/');
  });

  function fetchData(baseurl){
    fetch(baseurl)
    .then((response) => response.json())
    .then((data) => setProducts(data.results));

  }

  return (
    <div className="container">
      <h3 className="fw-bold mb-4">All Products</h3>
      <div className="row mb-4">
        {
          products.map((product) => <Singleproduct product={product} />)
        }
      </div>
      {/* latest product end  */}
    </div>
  );
}

export default AllProducts;
