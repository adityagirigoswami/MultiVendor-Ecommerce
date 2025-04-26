import Singleproduct from './singleproduct';

function AllProducts() {
    return (
<div className="container">
                              <h3 className="fw-bold mb-4">
                                All Products 
                              </h3>
                              <div className="row mb-4">
                                        <Singleproduct title="python"/>                                        <Singleproduct title="python"/>
                                        <Singleproduct title="java"/>
                                        <Singleproduct title="c++"/>
                                        <Singleproduct title="react"/>
                                        <Singleproduct title="node"/>
                              </div>
                              {/* latest product end  */}
                            </div>

    );
}

export default AllProducts;
