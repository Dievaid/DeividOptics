import React, { Component } from "react";

export class Despre extends Component {
  render() {
    return (
      <div id="Despre">
        <div className="container">
          <div className="row">
            <div className="col-xs-20 col-md-6">
              {" "}
              <img src="img/despre.jpg" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-20 col-md-6">
              <div className="Despre">
                <h2>Despre mine</h2>
                <p>
                  {this.props.data ? this.props.data.paragraph : "loading..."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Despre;
