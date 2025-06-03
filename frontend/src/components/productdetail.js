import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleRelatedProduct from "./singleRelatedProduct";
function ProductDetail() {

    const baseUrl = 'http://127.0.0.1:8000/api';
    const [productData,setProductData] = useState([]);
    const [productImgs , setproductImgs]=useState([]);
    const [relatedProducts , setRelatedProducts] = useState([])
    const {product_slug,product_id} = useParams();
     
    useEffect(() => {
      fetchData(baseUrl+'/product/' + product_id);
      fetchRelatedData(baseUrl + '/related-product/' + product_id)
} , []);

    function fetchData(baseurl){
      fetch(baseurl)
      .then((response) => response.json())
      .then((data) => 
      {
        setProductData(data);
        setproductImgs(data.product_imgs);
      }
    );
    }
    
    function fetchRelatedData(baseurl){
      fetch(baseurl)
      .then((response) => response.json())
      .then((data)=>{
          setRelatedProducts(data.results);
      });
    }


console.log(productImgs)

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
              {productImgs.map((img,index)=>{

                if(index === 0){
                  return <button
                  type="button"
                  data-bs-target="#productdetailCarousel"
                  data-bs-slide-to={index}
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                }

                else{
                  return <button
                  type="button"
                  data-bs-target="#productdetailCarousel"
                  data-bs-slide-to={index}
                  aria-current="true"
                  aria-label="Slide 1"
                  ></button>
                }
              })}

             
            </div>
            <div class="carousel-inner">
            {productImgs.map((img,index)=>{
              if(index === 0){
                return <div class="carousel-item active">
                <div className="row mb-4">
                  <img className="img-thumbnail" src={img.image} alt={index} />
                </div>
              </div>
              }
              else{
                return <div class="carousel-item">
                <div className="row mb-4">
                  <img className="img-thumbnail" src={img.image} alt={index} />
                </div>{" "}
              </div>
              }
              
            })}
              
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
          <h3>{productData.title}</h3>
          <p>
            {productData.detail}
          </p>
          <h5 className="card-title">Price: Rs. {productData.price}</h5>
          <p className="mt-3">
            <a title="demo" href={productData.demo_url} target="_blank_" className="btn btn-dark">
              <i className="fa-solid fa-cart-plus"></i> Demo
            </a>
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
      
      {relatedProducts.length > 0 &&
      <>
          <h3 className="mt-4 mb-4 text-center">Related Products</h3>
          <div
            id="relatedproductCarousel"
            class="carousel slide carousel-dark"
            data-bs-ride="true"
          >
            <div class="carousel-indicators">
            {relatedProducts.map((product,index)=>{

                      if(index === 0){
                        return <button
                        type="button"
                        data-bs-target="#relatedproductCarousel"
                        data-bs-slide-to={index}
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      }

                      else{
                        return <button
                        type="button"
                        data-bs-target="#relatedproductCarousel"
                        data-bs-slide-to={index}
                        aria-current="true"
                        aria-label="Slide 1"
                        ></button>
                      }
                      })}
            </div>
            <div class="carousel-inner">
            {relatedProducts.map((product,index)=>{
                  if(index === 0){
                    return <div class="carousel-item active">
                    <div className="row mb-4">
                    <SingleRelatedProduct product={product} />
                    </div>
                  </div>
                  }
                  else{
                    return <div class="carousel-item">
                    <div className="row mb-4">
                      <SingleRelatedProduct product={product} />
                    </div>{" "}
                  </div>
                  }
                  
                })}
            </div>
          </div>
      </>
      }
      
      {/* related poduct  box  end*/}
    </section>
  );
}

export default ProductDetail;
