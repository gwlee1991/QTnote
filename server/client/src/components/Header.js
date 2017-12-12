import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/header.css.js';

class Header extends Component {
  renderContent(){
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default:
        return <li><a href="/api/logout">Logout</a></li>;
    }
  }
  
  render(){
    return(
      <nav style={styles.nav}>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/main' : '/' } className="logo">
            Nevernote
          </Link>
          <ul className="nav-right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;