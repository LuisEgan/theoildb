import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../config/routes';

class Header extends Component {
  render() {
    return (
        <div className="container" id="header">
        <div className="cc" id="logo-container"></div>

        <div id="links-container" className="container">
            <div className="row">
                <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.NEWS}>News</NavLink></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.CURVE}>Curve</NavLink></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.PRODUCTION}>Production</NavLink></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.DEMAND}>Demand</NavLink></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.MARGINS}>Margins</NavLink></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.FINANCIALS}>Financials</NavLink></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.TRANSPORTATION}>Transportation</NavLink></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.ABOUT}>About</NavLink></div>
            </div>
        </div>
        </div>
    );
  }
}

export default Header;
