export default function Footer() {
  return (
    <>
      <footer
        style={{ backgroundColor: "#2e312c" }}
        className="text-center text-lg-start text-white mt-5"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="/" className="me-4 text-reset">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </section>

        <section >
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h4 className=" fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>TheEstate
                </h4>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Essentials</h6>
                <p>
                  <a href="/home" className="text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <a href="/about" className="text-reset">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Properties
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Filter By Name
                  </a>
                </p>
                <p>
                  <a href="/contact" className="text-reset">
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="/premium" className="text-reset">
                    Premium
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> 2100 Estero Blvd. Fort
                  Myers Beach, FL 33931
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  TheEstate@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Consumer Protection & Privacy
                </h6>
                <p>
                  <a href="/accessibility" className="text-reset">
                    Accessibility
                  </a>
                </p>
                <p>
                  <a href="/dmca" className="text-reset">
                    DMCA Compliance
                  </a>
                </p>
                <p>
                  <i> For ADA assistance, please email compliance@placester.com. If
                  you experience difficulty in accessing any part of this
                  website, email us, and we will work with you to provide the
                  information.</i>
                 
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
