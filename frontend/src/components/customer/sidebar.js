import { Link } from "react-router-dom";
function Sidebar(){
    return(
        <div className="list-group">
                    <Link to="#" className="list-group-item list-group-item-action active" aria-current="true">Dashboard</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Orders</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Wishlist</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Profile</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Addresses</Link>
                    <Link to="#" className="list-group-item list-group-item-action text-danger">Logout</Link>
                    </div>
    );
}

export default Sidebar;