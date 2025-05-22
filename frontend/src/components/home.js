import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";
import Singleproduct from './singleproduct';


function Home() {
const products=[
  {
    'title':'product_1',
    'price':100
  },
  {
    'title':'product_2',
    'price':200
  },
  {
    'title':'product_3',
    'price':300
  },
  {
    'title':'product_4',
    'price':400
  },
]

  return (
    <main className="mt-3">
      <section className="container mt-4">
        {/* latest product  */}

        <div className="container">
          <h3 className="fw-bold mb-4">
            Latest Products <Link to="/products"
              className="float-end btn btn-dark">View All Products
              <i className="fa-solid fa-arrow-right-long ms-1"></i></Link>
          </h3>
          <div className="row mb-4">

              {
                products.map((product) => <Singleproduct product={product} />)
              }
          </div>
          {/* latest product end  */}
        </div>

        {/* Popular product  */}

        <div className="container">
          <h3 className="fw-bold mb-4">
            Popular Products <a href="#"
              className="float-end btn btn-dark">View All Products
              <i className="fa-solid fa-arrow-right-long ms-1"></i></a>
          </h3>
          <div className="row mb-4">

            {/* Popular Product box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product Title</h4>
                  <div className="card-footer">
                    Price: RS.500
                  </div>
                </div>
              </div>
            </div>
            {/* Popular Product box end */}
            {/* Popular Product box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product Title</h4>
                  <div className="card-footer">
                    Price: RS.500
                  </div>
                </div>
              </div>
            </div>
            {/* Popular Product box end */}            {/* Popular Product box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product Title</h4>
                  <div className="card-footer">
                    Price: RS.500
                  </div>
                </div>
              </div>
            </div>
            {/* Popular Product box end */}            {/* Popular Product box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product Title</h4>
                  <div className="card-footer">
                    Price: RS.500
                  </div>
                </div>
              </div>
            </div>
            {/* Popular Product box end */}




          </div>
          {/* Popular product end  */}
        </div>

        {/* Popular Categories*/}
        <div className="container">
          <h3 className="fw-bold mb-4">
            Popular Categories <a href="#"
              className="float-end btn btn-dark">View All Categories
              <i className="fa-solid fa-arrow-right-long ms-1"></i></a>
          </h3>
          <div className="row mb-4">

            {/* Category box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product Category</h4>
                  <div className="card-footer">
                    product download : 598
                  </div>
                </div>
              </div>
            </div>
            {/* Category box end */}

            {/* Category box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product Category</h4>
                  <div className="card-footer">
                    product download : 598
                  </div>
                </div>
              </div>
            </div>
            {/* Category box end */}

            {/* Category box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product Category</h4>
                  <div className="card-footer">
                    product download : 598
                  </div>
                </div>
              </div>
            </div>
            {/* Category box end */}

            {/* Category box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product Category</h4>
                  <div className="card-footer">
                    product download : 598
                  </div>
                </div>
              </div>
            </div>
            {/* Category box end */}
          </div>
          {/* Popular Categoy product end  */}
        </div>

        {/* popular seller */}
        <div className="container">
          <h3 className="fw-bold mb-4">
            Popular Seller <a href="#"
              className="float-end btn btn-dark">View All Seller
              <i className="fa-solid fa-arrow-right-long ms-1"></i></a>
          </h3>
          <div className="row mb-4">

            {/* Popular Seller box*/}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Seller Name</h4>
                  <div className="card-footer">
                    Categories: <a href="#">Python</a>, <a href="#">DJango</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Popular Seller box end */}
            {/* Popular Seller box*/}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Seller Name</h4>
                  <div className="card-footer">
                    Categories: <a href="#">Fastapi</a>, <a href="#">Flask</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Popular Seller box end */}
            {/* Popular Seller box*/}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Seller Name</h4>
                  <div className="card-footer">
                    Categories: <a href="#">React</a>, <a href="#">Node</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Popular Seller box end */}

          </div>
          {/* Popular Seller end  */}
        </div>

        {/* customer rating and reviews */}
   
        <div id="carouselExampleIndicators" className="carousel slide mb-5 container bg-dark text-white p-5">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i><cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>    </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>first comment by aditya ji .</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i> <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>    </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>osho the master of spirituality and philosophy</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i><cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>    </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

{/* pagination */}
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>

  );
}

export default Home;

