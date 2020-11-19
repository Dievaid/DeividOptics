import React, { Component } from "react";

export class Galerie extends Component {
  render() {
    return (
      <div id="Galerie" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Galerie</h2>
            <p>
              Aici veți găsi o mică colecție de poze. Mai multe puteți găsi pe Instagram.
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="img/portfolio/01-large.jpg"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Iubește</h4>
                      </div>
                      <img
                        src="img/portfolio/01-small.jpg"
                        className="img-responsive"
                        
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/02-large.jpg"
                      
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Zâmbește</h4>
                      </div>
                      <img
                        src="img/portfolio/02-small.jpg"
                        className="img-responsive"
                        
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/03-large.jpg"
                      
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Admiră</h4>
                      </div>
                      <img
                        src="img/portfolio/03-small.jpg"
                        className="img-responsive"
                        
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/04-large.jpg"
                      
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Eliberează-te</h4>
                      </div>
                      <img
                        src="img/portfolio/04-small.jpg"
                        className="img-responsive"
                        
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/05-large.jpeg"
                      
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Distrează-te</h4>
                      </div>
                      <img
                        src="img/portfolio/05-small.jpeg"
                        className="img-responsive"
                        
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/06-large.jpeg"
                      
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Petrece</h4>
                      </div>
                      <img
                        src="img/portfolio/06-small.jpeg"
                        className="img-responsive"
                        
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/07-large.jpg"
                      
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Simte</h4>
                      </div>
                      <img
                        src="img/portfolio/07-small.jpg"
                        className="img-responsive"
                        
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/08-large.jpg"
                      
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Strălucește</h4>
                      </div>
                      <img
                        src="img/portfolio/08-small.jpg"
                        className="img-responsive"
                        
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/09-large.jpg"
                      
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Relaxează-te</h4>
                      </div>
                      <img
                        src="img/portfolio/09-small.jpg"
                        className="img-responsive"
                        
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Galerie;
