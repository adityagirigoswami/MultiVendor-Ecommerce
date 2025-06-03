import logo from "../logo.svg";
import { Link } from "react-router-dom";
// function slugify(text) {
//   return text
//     .toLowerCase()
//     .replace(/\s+/g, '-')      // Replace spaces with dashes
//     .replace(/[^\w\-]+/g, '')  // Remove non-word characters
//     .replace(/\-\-+/g, '-')    // Replace multiple dashes with one
//     .replace(/^-+/, '')        // Trim starting dash
//     .replace(/-+$/, '');       // Trim ending dash
// }

function Singleproduct(props) {
  console.log("Product:", props.product);

  return (
    <div className="col-12 col-md-3 mb-4">
              <div className="card shadow" style={{ width: "18rem" }}>
                <Link to={`/product/${props.product.slug}/${props.product.id}`}><img className="card-img-top" src={props.product.image} alt="Card cap" /></Link>
                <div className="card-body">
                <Link to={`/product/${props.product.slug}/${props.product.id}`}><h5 className="card-title">{props.product.title}</h5></Link>
                  <h5 className="card-title text-muted">Price Rs. {props.product.price}</h5>
                </div>
                <div className="card-footer">
                  <button
                    title="add to cart"
                    className="btn btn-success btn-sm"
                  >
                    <i className="fa-solid fa-cart-plus fa-2x"></i>
                  </button>
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger btn-sm ms-1"
                  >
                    <i className="fa-solid fa-heart fa-2x"></i>
                  </button>
                </div>
              </div>
            </div>
  );
}

export default Singleproduct;
