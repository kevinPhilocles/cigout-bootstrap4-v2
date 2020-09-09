import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-expand-lg fixed-top navbar-light bg-light navbar-default">
        <div class="container">
          <a className="navbar-brand" href="#page-top">
            <img src="img/cigout-new-logo.png" className="img-default" alt=""/>
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav  ml-auto">
              <li className="nav-item mx-2">
                <a className="nav-link page-scroll" href="#features">
                  Fonctionnalités
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link page-scroll" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link page-scroll" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link page-scroll" href="#portfolio">
                  Galerie
                </a>
              </li>
              <li className="nav-item mx-2">
                <a href="#testimonials" className="nav-link page-scroll">
                Témoignages
                </a>
              </li>
              <li className="nav-item mx-2">
                <a href="#contact" className="nav-link page-scroll">
                  Mon Compte
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a className="nav-item nav-link page-scroll" href="#features">Fonctionnalités </a>
              <a className="nav-item nav-link page-scroll" href="#about">About</a>
              <a className="nav-item nav-link page-scroll" href="#services">Services</a>
              <a className="nav-item nav-link page-scroll" href="#portfolio">Galerie</a>
              <a className="nav-item nav-link page-scroll" href="#testimonials">Témoignages</a>
              <a className="nav-item nav-link page-scroll" href="#contact">Mon compte</a>
            </div>
          </div> */}
        </div>
      </nav>
      // <nav id="menu" className="navbar fixed-top navbar-light bg-light">
      //   <div className="container">
      //     <div className="navbar-header">
      //       <button
      //         type="button"
      //         className="navbar-toggle collapsed"
      //         data-toggle="collapse"
      //         data-target="#bs-example-navbar-collapse-1"
      //       >
      //         {" "}
      //         <span className="sr-only">Toggle navigation</span>{" "}
      //         <span className="icon-bar"></span>{" "}
      //         <span className="icon-bar"></span>{" "}
      //         <span className="icon-bar"></span>{" "}
      //       </button>



      //       <a className="navbar-brand page-scroll" href="#page-top">
      //         <img src="img/cigout-new-logo.png" className="img-default" alt=""/>
      //       </a>{" "}
      //     </div>

      //     <div
      //       className="collapse navbar-collapse"
      //       id="bs-example-navbar-collapse-1"
      //     >
      //       <ul className="nav navbar-nav navbar-right">
      //         <li>
      //           <a href="#features" className="page-scroll">
      //             Fonctionnalités
      //           </a>
      //         </li>
      //         <li>
      //           <a href="#about" className="page-scroll">
      //             About
      //           </a>
      //         </li>
      //         <li>
      //           <a href="#services" className="page-scroll">
      //             Services
      //           </a>
      //         </li>
      //         <li>
      //           <a href="#portfolio" className="page-scroll">
      //             Galerie
      //           </a>
      //         </li>
      //         <li>
      //           <a href="#testimonials" className="page-scroll">
      //           Témoignages
      //           </a>
      //         </li>
      //         <li>
      //           <a href="#contact" className="page-scroll">
      //             Mon Compte
      //           </a>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
    );
  }
}

export default Navigation;
