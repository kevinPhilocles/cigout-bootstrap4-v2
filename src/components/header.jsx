import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 intro-text">
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span class="blinking">_</span>
                  </h1>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll">
                    En savoir plus
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
