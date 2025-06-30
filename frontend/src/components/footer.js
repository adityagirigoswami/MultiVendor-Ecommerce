function Footer() {
  return (
    <footer
      className="d-flex flex-wrap justify-content-between align-items-center p-4 mt-4"
      style={{
        backgroundColor: '#0d1117',
        color: '#c9d1d9',
        // borderTop: '1px solid #30363d',
      }}
    >
      <div className="col-md-6 d-flex align-items-center px-3">
      <span className="fw-bold fs-3 ms-2 text-gradient">
              <i className="fa fa-code me-1 text-info"></i>
              <span style={{ letterSpacing: "-1px", fontFamily: "'Orbitron', sans-serif" }}>
                SCRIPT <span className="text-warning">HUB</span>
              </span>
            </span>  
        <span className="ms-3 small text">© 2025 Company, Inc.</span>
      </div>

      <ul className="nav col-md-6 justify-content-end list-unstyled d-flex px-3">
        <li className="ms-3">
          <a className="text-light fs-5" href="#" aria-label="Facebook">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li className="ms-3">
          <a className="text-light fs-5" href="#" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li className="ms-3">
          <a className="text-light fs-5" href="#" aria-label="Twitter">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
