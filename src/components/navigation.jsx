import React, { Component } from "react";
import {Link} from "react-scroll";
export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Pornește navigarea</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <Link className="navbar-brand page-scroll" to="page-top" duration={1000} smooth={true}>
              Deivid Optics
            </Link>{" "}
            <Link to="page-top" duration={1000} smooth={true}>
              <img src="/img/logo.png" className="logo" alt="" ></img>
            </Link>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="Despre" duration={1000} smooth={true}>
                    Despre mine
                </Link>
              </li>
              <li>
                <Link to="Galerie" duration={1000} smooth={true}>
                  Galerie
                </Link>
              </li>
                <li>
                <Link to="Contact" duration={1000} smooth={true}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
