import React, { Component } from "react";

export class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

 

  render() {
    return (
      <div>
        <header>
          

          <nav
            className="navbar navbar-light"
            style={{ backgroundColor: "lightgreen" }}
          >
            <div className="navbar-brand">
              <div className="lenstext">Lens Cart</div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
