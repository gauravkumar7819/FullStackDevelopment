function Main() {
    return(
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Responsive Navbar</title>
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
  <div id="navbar-container" />
  <div className="container my-4 bg-text-primary mt-5">
    <div className="row card-container g-3 "> </div>
    {/* Load More Button */}
    <div className="text-center my-4">
      <button id="load-more" className="btn bg-primary text-primary">
        Load More
      </button>
    </div>
  </div>
  <div id="footer-container" />
  {/* Optional JavaScript; choose one of the two! */}
  {/* Option 1: jQuery and Bootstrap Bundle (includes Popper) */}
  {/* Font Awesome for Cart Icon */}
</>

    )
    
}
export default Main;