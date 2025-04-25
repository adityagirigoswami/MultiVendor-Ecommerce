import logo from "../logo.svg";
import "../App.css";
import {Link} from 'react-router-dom'


function Categories() {
    return (
        <>
        {/* Popular Categories*/}
                        <div className="container">
                          <h3 className="fw-bold mt-3 mb-4">
                            All Categories 
                          </h3>
                          <div className="row mb-4">
                
                            {/* Category box */}
                            <div className="col-12 col-md-3 mb-4">
                              <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={logo} alt="Card cap" />
                                <div className="card-body">
                                  <Link to="/categories/python/1"><h4 className="card-title">Python</h4></Link>
                                  <div className="card-footer">
                                    product download : 598
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Category box end */}
                
                            {/* Category box */}
                            <div className="col-12 col-md-3 mb-4">
                              <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={logo} alt="Card cap" />
                                <div className="card-body">
                                  <h4 className="card-title">Product Category</h4>
                                  <div className="card-footer">
                                    product download : 598
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Category box end */}
                
                            {/* Category box */}
                            <div className="col-12 col-md-3 mb-4">
                              <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={logo} alt="Card cap" />
                                <div className="card-body">
                                  <h4 className="card-title">Product Category</h4>
                                  <div className="card-footer">
                                    product download : 598
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Category box end */}
                
                            {/* Category box */}
                            <div className="col-12 col-md-3 mb-4">
                              <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={logo} alt="Card cap" />
                                <div className="card-body">
                                  <h4 className="card-title">Product Category</h4>
                                  <div className="card-footer">
                                    product download : 598
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Category box end */}
                          </div>
                          {/* Popular Categoy product end  */}
                        </div>
    </>
    );
}

export default Categories;