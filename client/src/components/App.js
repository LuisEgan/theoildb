import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Routes from '../config/routes';
import Header from './globals/Header';

class App extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className='App'>
        <Header/>
        <div className='Page'>
          <Routes/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.app.get('isLoggedIn'),
});

export default connect(mapStateToProps)(App);