import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

  renderContect() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href='/auth/google'>Login with Google</a></li>
        );
      default:
        return (
          <li><a>Log out</a></li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <a className='left brand-logo'>Emaily</a>
          <ul className='right'>
            {this.renderContect()}
          </ul>
        </div>
      </nav>
    );
  }
};

function mapStateToProps({auth}) {
  return { auth };
}

export default connect(mapStateToProps)(Header);