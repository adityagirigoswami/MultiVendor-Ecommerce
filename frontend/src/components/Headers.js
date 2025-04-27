import { Link } from 'react-router-dom'


function Header() {
  return (

    <nav className="navbar navbar-expand navbar-dark bg-dark shadow-lg">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center gap-2 ms-4" href="#">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python Logo"
            width="30"
            height="30"
            className="me-2"
          />
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span className="fw-bold text-info fs-4">Python Market Place</span>
          </Link>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-bold text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-white" to="/categories">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-white" to="/checkout">
                My Cart (4)
              </Link>
            </li>
            <li className="nav-item">

            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <button
              className="btn btn-outline-info fw-semibold me-4"
              type="submit"
            >
              Search
            </button>
          </form>
          <div className="dropdown">
                <button className="btn btn-outline-info fw-bold dropdown-toggle me-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  My Account
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/customer/register" >Register</Link></li>
                  <li><Link className="dropdown-item" to="/customer/login" >Login</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Dashboard</a></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
          </div>


        </div>
      </div>
    </nav>
  )

}

export default Header;