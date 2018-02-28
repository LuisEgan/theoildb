import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../config/routes';

class Header extends Component {

  render() {
    return (
        <div className="container" id="header">
        <div className="cc" id="logo-container"></div>

        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span>Show Menu</span>
            </button>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
            <div className="nav navbar-nav">
                <div id="links-container" className="container">
                    <div className="row">
                        <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.NEWS}>News</NavLink></div>
                        <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.CURVE}>Curve</NavLink></div>
                        <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.DRILLS}>Drills</NavLink></div>
                        <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.SUPPLYDEMAND}>Supply &amp; Demand</NavLink></div>
                        <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.MARGINS}>Margins</NavLink></div>
                        <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.FINANCIALS}>Financials</NavLink></div>
                        <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.TRANSPORTATION}>Transportation</NavLink></div>
                        <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.ABOUT}>About</NavLink></div>
                    </div>
                </div>
                <li className="dropdown">
                </li> 
            </div>
            </div>
        </div>
        </nav>

{/*         <div id="links-container" className="container">
            <div className="row">
                <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.NEWS}>News</NavLink></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.CURVE}>Curve</NavLink></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.DRILLS}>Drills</NavLink></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.SUPPLYDEMAND}>Supply-Demand</NavLink></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.MARGINS}>Margins</NavLink></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.FINANCIALS}>Financials</NavLink></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.TRANSPORTATION}>Transportation</NavLink></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-3"><NavLink exact to={routeCodes.ABOUT}>About</NavLink></div>
            </div>
        </div> */}
        </div>
    );
  }
}

export default Header;
