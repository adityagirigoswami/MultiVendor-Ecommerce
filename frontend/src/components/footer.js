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
      <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
            width="40"
            height="40"
          />
        <span className="fs-5 fw-semibold">Python Market Place</span>
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
