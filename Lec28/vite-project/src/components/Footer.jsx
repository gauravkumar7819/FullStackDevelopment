function Footer() {
    return(
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  {/* Bootstrap CSS */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
  />
  <link href="bootstrap.css" rel="stylesheet" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Itim&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="style.css" />
  <footer className=" text-primary pt-5 pb-4 foot">
    <div className=" text-dark  text-md-left">
      <div className="row">
        {/* About Us Section */}
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold">About Us</h5>
          <p>
            We are a leading e-commerce platform offering a wide range of
            quality products. Our mission is to provide the best online shopping
            experience to our customers.
          </p>
        </div>
        {/* Quick Links Section */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold">Quick Links</h5>
          <p>
            <a href="#" className="text-dark text-decoration-none">
              Home
            </a>
          </p>
          <p>
            <a href="#" className="text-dark text-decoration-none">
              Shop
            </a>
          </p>
          <p>
            <a href="#" className="text-dark text-decoration-none">
              About Us
            </a>
          </p>
          <p>
            <a href="#" className="text-dark text-decoration-none">
              Contact Us
            </a>
          </p>
        </div>
        {/* Customer Service Section */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold">
            Customer Service
          </h5>
          <p>
            <a href="#" className="text-dark text-decoration-none">
              FAQs
            </a>
          </p>
          <p>
            <a href="#" className="text-dark text-decoration-none">
              Shipping &amp; Returns
            </a>
          </p>
          <p>
            <a href="#" className="text-dark text-decoration-none">
              Privacy Policy
            </a>
          </p>
          <p>
            <a href="#" className="text-dark text-decoration-none">
              Terms &amp; Conditions
            </a>
          </p>
        </div>
        {/* Contact Us Section */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold">Contact Us</h5>
          <p>
            <i className="fas fa-home me-3" /> 123, Main Street, City, Country
          </p>
          <p>
            <i className="fas fa-envelope me-3" /> info@example.com
          </p>
          <p>
            <i className="fas fa-phone me-3" /> +1 234 567 890
          </p>
        </div>
      </div>
      {/* Social Media and Newsletter Section */}
      <hr className="mb-4" />
      <div className="row align-items-center">
        {/* Social Media Icons */}
        <div className="col-md-7 col-lg-8">
          <p className="text-center text-md-start">
            Follow us on:
            <a href="#" className="text-dark text-decoration-none me-4">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="text-dark text-decoration-none me-4">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="text-dark text-decoration-none me-4">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="text-dark text-decoration-none me-4">
              <i className="fab fa-linkedin" />
            </a>
          </p>
        </div>
        {/* Newsletter Subscription Form */}
        <div className="col-md-5 col-lg-4">
          <form className="input-group">
            <input
              type="email"
              className="form-control"
              placeholder="Subscribe for updates"
            />
            <button className="btn btn-primary" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </footer>
  {/* Font Awesome for Cart Icon */}
</>

)
}
export default Footer;