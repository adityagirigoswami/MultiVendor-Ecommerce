import Singleproduct from './singleproduct';

function ProductCategory(){
    return(  
             <div className="container">
                              <h3 className="fw-bold mb-4">
                                Latest Products <a href="#"
                                  className="float-end btn btn-dark">View All Products
                                  <i className="fa-solid fa-arrow-right-long ms-1"></i></a>
                              </h3>
                              <div className="row mb-4">
                                        <Singleproduct />
                              </div>
                              {/* latest product end  */}
                            </div>
    )

        
}

export default ProductCategory;