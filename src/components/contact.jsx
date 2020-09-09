import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="section-title">
                  <h2>Contactez nous</h2>
                  <p>
                  Veuillez remplir le formulaire ci-dessous pour nous envoyer un
                  courriel et nous vous contactera dès que possible.
                  </p>
                </div>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Nom"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <div className="button-validation">
                    <button type="submit" className="btn btn-custom btn-lg">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-3 col-md-offset-1 contact-info">
                <div className="contact-item">
                  <h3>Contact Info</h3>
                  <p>
                    <span>
                      <i className="fa fa-map-marker"></i> Adresse
                    </span>
                    {this.props.data ? this.props.data.address : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-phone"></i> Téléphone
                    </span>{" "}
                    {this.props.data ? this.props.data.phone : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-envelope-o"></i> Email
                    </span>{" "}
                    {this.props.data ? this.props.data.email : "loading"}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="social">
                    <ul>
                      <li>
                        <a
                          href={this.props.data ? this.props.data.facebook : "/"}
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href={this.props.data ? this.props.data.twitter : "/"}>
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href={this.props.data ? this.props.data.apk : "/"}>
                          <i className="fa fa-upload"></i>
                        </a>
                      </li>
                      {/*<li>
                        <a href={this.props.data ? this.props.data.youtube : "/"}>
                          <i className="fa fa-youtube"></i>
                        </a>
                      </li>*/}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2020 - Cigout. Design by{" Julien"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
