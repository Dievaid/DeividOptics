import React, { Component } from "react";
import emailjs from "emailjs-com";
import "react-twilio";
//import ScriptTag from "react-script-tag"

export function sendmail() {
  function mailer() {
    emailjs
      .sendForm(
        "DeividOptics",
        "template_yo3w3a2",
        "contactForm",
        "user_zI8gYlhKfXSbsnPgZpgPP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  mailer();
  document.getElementById("contactForm").reset();
}
export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="Contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Programează-ți evenimentul.</h2>
                  <p>Completează formularul de mai jos și te voi contacta.</p>
                </div>
                <form
                  name="sentMessage"
                  id="contactForm"
                  onSubmit={sendmail}
                  noValidate
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Nume"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
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
                      placeholder="Mesaj"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Trimite mesaj
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Date de contact</h3>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Telefon
                  </span>{" "}
                  {this.props.data ? this.props.data.Telefon : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.Email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={this.props.data ? this.props.data.Facebook : "/"}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={this.props.data ? this.props.data.Instagram : "/"}
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
