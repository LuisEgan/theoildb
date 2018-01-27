import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div className="container" id="header">
        <div className="cc" id="logo-container"></div>

        <div id="links-container" className="container">
            <div className="row">
                <div className="cc col-xs-6 col-sm-4 col-lg-2"><button type="button">News</button></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-2"><button type="button">News</button></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-2"><button type="button">News</button></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-2"><button type="button">News</button></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-2"><button type="button">News</button></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-2"><button type="button">News</button></div>
            </div>
        </div>
        </div>
    );
  }
}

export default Header;
