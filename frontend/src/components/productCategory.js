import Singleproduct from "./singleproduct";

function ProductCategory() {
  return (
    <div className="container">
      <h3 className="fw-bold mb-4">Python Products</h3>
      <div className="row mb-4">
        <Singleproduct title="python" />
         <Singleproduct title="python" />
        <Singleproduct title="java" />
        <Singleproduct title="jonathon" />
        <Singleproduct title="react" />
      </div>
      {/* latest product end  */}
    </div>
  );
}

export default ProductCategory;
