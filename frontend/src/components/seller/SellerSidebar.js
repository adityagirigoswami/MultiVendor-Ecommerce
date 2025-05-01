import { Link } from "react-router-dom";
function SellerSidebar(){
    return(
        <div className="list-group">
                    <Link to="/seller/dashboard" className="list-group-item list-group-item-action active" aria-current="true">Dashboard</Link>
                    <Link to="/seller/products" className="list-group-item list-group-item-action ">Products</Link>
                    <Link to="/seller/add-products" className="list-group-item list-group-item-action ">Add Product</Link>
                    <Link to="/seller/orders" className="list-group-item list-group-item-action">Orders</Link>
                    <Link to="/seller/customers" className="list-group-item list-group-item-action">Customers</Link>
                    <Link to="/Seller/reports" className="list-group-item list-group-item-action">Reports</Link>
                    <Link to="/Seller/profile" className="list-group-item list-group-item-action">Profile</Link>
                    <Link to="/Seller/change-password" className="list-group-item list-group-item-action">Change Password</Link>
                    <Link to="" className="list-group-item list-group-item-action text-danger">Logout</Link>
                    </div>
    );
}

export default SellerSidebar;