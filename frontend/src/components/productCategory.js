import Singleproduct from "./singleproduct";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ProductCategory() {

  const baseUrl = 'http://127.0.0.1:8000/api';
  const [products,setProducts] = useState([]);
  const [totalResult,setTotalResult] = useState(0);
  const {category_slug,category_id} = useParams();

  useEffect(() => {
        fetchData(baseUrl+'/products?category='+category_id);
  } , []);

  
  
  function fetchData(baseurl){
    fetch(baseurl)
    .then((response) => response.json())
    .then((data) => 
    {
      setProducts(data.results);
      setTotalResult(data.count);
    }
  );
  }

  function changeUrl(baseUrl){
    fetchData(baseUrl);
  }

  var links=[];
  var limit = 1;
  var totalLinks=totalResult/limit;
  for(let i = 1; i<=totalLinks ; i++)
  {
    links.push(<li class="page-item"><Link onClick={()=>changeUrl(baseUrl+`/products/?category=${category_id}&page=${i}`)} to={`/category/${category_slug}/${category_id}/?page=${i}`} class="page-link">{i}</Link></li>)
  }

  return (
    <section className="container mt-4">
      <h3 className="fw-bold mb-4">All Products of {category_slug} Category</h3>
      <div className="row mb-4">
        {
          products.map((product) => <Singleproduct product={product} />)
        }
      </div>




    </section>
  );
}

export default ProductCategory;
