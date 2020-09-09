import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="section-title">
              <h2>Galerie</h2>
              <p>
                Voici quelques images de l'application mobile en développement.
              </p>
            </div>
          </div>
          <div className="row portfolio-items w-100">
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item my-3">
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
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item my-3">
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
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item my-3">
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
        </div>
      </div>
    );
  }
}

export default Gallery;
