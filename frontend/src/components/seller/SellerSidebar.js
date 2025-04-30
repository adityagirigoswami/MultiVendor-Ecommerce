import { Link } from "react-router-dom";
function SellerSidebar(){
    return(
        <div className="list-group">
                    <Link to="/seller/dashboard" className="list-group-item list-group-item-action active" aria-current="true">Dashboard</Link>
                    <Link to="" className="list-group-item list-group-item-action ">Products</Link>
                    <Link to="" className="list-group-item list-group-item-action">Orders</Link>
                    <Link to="" className="list-group-item list-group-item-action">Customers</Link>
                    <Link to="" className="list-group-item list-group-item-action">Reports</Link>
                    <Link to="" className="list-group-item list-group-item-action text-danger">Logout</Link>
                    </div>
    );
}

export default SellerSidebar;