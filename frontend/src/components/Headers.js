import {Link} from 'react-router-dom'


function Header(){
    return(

         <nav className="navbar navbar-expand navbar-dark bg-dark shadow-lg">
                <div className="container-fluid">
                  <a className="navbar-brand d-flex align-items-center gap-2" href="#">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                      alt="Python Logo"
                      width="30"
                      height="30"
                      className="me-2"
                    />
                    <span className="fw-bold text-info fs-4">Python Market Place</span>
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
                        <a className="nav-link fw-bold text-white" href="#">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link fw-bold text-white" href="#">
                          Contact
                        </a>
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
                        className="btn btn-outline-info fw-semibold"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
    )

}

export default Header;