import SellerSidebar from "./SellerSidebar";

function SellerAddProducts(){
    return(
        <div className="container mt-4">
          <div className="row">
              <div className="col-md-3 col-12 mb-2">
                    <SellerSidebar/>

              </div> 
    
                          <div className="col-md-8 col-12">
                <div className="card">
                          <form>
                          <h4 className="card-header bg-light">Add Products</h4>

                            <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="Category" className="form-label">Category</label>
                                <select className="form-select" id="Category" name="category">
                                    <option value="electronics">Php</option>
                                    <option value="fashion">react</option>
                                    <option value="home">ReactJS</option>
                                    <option value="books">NOdeJS</option>
                                </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="Title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="Title" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Price" className="form-label">Price</label>
                                    <input type="text" className="form-control" id="Price" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">Description</label>
                                    <textarea className="form-control" rows={8} id="Description" />
                                </div>
                            
                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">Add Product Image</label>
                                    <input className="form-control" type="file" id="formFile" />
                                </div>

                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                                </form> 
                                </div> 

                          </div>
                      </div>
          </div>
    );
}

export default SellerAddProducts;