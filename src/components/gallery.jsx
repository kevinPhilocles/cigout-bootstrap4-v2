import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Galerie</h2>
            <p>
              Voici quelques images de l'application mobile en développement.
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-1 col-md-1 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/mockup-app.png"
                      title="Homepage Mobile"
                      data-lightbox-gallery="gallery1">
                      <div className="hover-text">
                        <h4>Page d'accueil</h4>
                      </div>
                      <img
                        src="img/portfolio/mockup-app.png"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
             <div className="col-sm-1 col-md-1 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/mockup-app-profile.png"
                      title="Profil"
                      data-lightbox-gallery="gallery1">
                      <div className="hover-text">
                        <h4>Page profile</h4>
                      </div>
                      <img
                        src="img/portfolio/mockup-app-profile.png"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-1 col-md-1 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/mockup-tips-app.png"
                      title="Social"
                      data-lightbox-gallery="gallery1">
                      <div className="hover-text">
                        <h4>Page social</h4>
                      </div>
                      <img
                        src="img/portfolio/mockup-tips-app.png"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              {/*<div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/04-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img
                        src="img/portfolio/04-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
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
                      href="img/portfolio/05-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img
                        src="img/portfolio/05-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
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
                      href="img/portfolio/06-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dolor Sit</h4>
                      </div>
                      <img
                        src="img/portfolio/06-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
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
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dolor Sit</h4>
                      </div>
                      <img
                        src="img/portfolio/07-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
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
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img
                        src="img/portfolio/08-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
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
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img
                        src="img/portfolio/09-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
