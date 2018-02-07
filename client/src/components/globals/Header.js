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
                <div className="cc col-xs-6 col-sm-4 col-lg-2"><NavLink exact to={routeCodes.NEWS}>News</NavLink></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-2"><NavLink exact to="">News</NavLink></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-2"><NavLink exact to="">News</NavLink></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-2"><NavLink exact to="">News</NavLink></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-2"><NavLink exact to="">News</NavLink></div>
                <div className="cc col-xs-6 col-sm-4 col-lg-2"><NavLink exact to="">News</NavLink></div>
            </div>
        </div>
        </div>
    );
  }
}

export default Header;
