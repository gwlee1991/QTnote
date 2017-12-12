import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

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
      <nav className="nav">
        <div className="nav-wrapper">
          <div className="nav-items nav-right">
            <Link to={this.props.auth ? '/main' : '/' } className="logo">
              Nevernote
            </Link>
          </div>
          <div className="nav-items nav-left">
            <ul className="session-buttons">
              {this.renderContent()}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;