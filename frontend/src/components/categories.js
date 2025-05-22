import logo from "../logo.svg";
import "../App.css";
import {Link} from 'react-router-dom'
import { useState,useEffect } from "react";

function Categories() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [categories,setCategories] = useState([]);
  const [totalResult,setTotalResult] = useState(0);

  useEffect(() => {
        fetchData(baseUrl+'/categories');
  } , []);

  function fetchData(baseurl){
    fetch(baseurl)
    .then((response) => response.json())
    .then((data) => 
    {
      setCategories(data.results);
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
    links.push(<li class="page-item"><Link onClick={()=>changeUrl(baseUrl+`/categories/?page=${i}`)} to={`/categories/?page=${i}`} class="page-link">{i}</Link></li>)
  }
    return (
        <>
        {/* Popular Categories*/}
                        <div className="container">
                          <h3 className="fw-bold mt-3 mb-4">
                            All Categories 
                          </h3>
                          <div className="row mb-4">
                            {
                            categories.map((category) => 
                              //  {/* Category box */}
                            <div className="col-12 col-md-3 mb-4">
                            <div className="card" style={{ width: "18rem" }}>
                              <img className="card-img-top" src={logo} alt={category.title} />
                              <div className="card-body">
                                <Link to={`/category/${category.title}/${category.id}`}><h4 className="card-title">{category.title}</h4></Link>
                                <div className="card-footer">
                                  product download : 598
                                </div>
                              </div>
                            </div>
                          </div>
                          // {/* Category box end */}
                           )

                            }

                           
                
                           
                          </div>
                          {/* Popular Categoy product end  */}
                        

                        
              <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    {links}
                  </ul> 
              </nav>
              </div>
    </>
    );
}

export default Categories;