import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

class Header extends Component {
  renderContent(){
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return <li>
            <a href="/auth/google">
              <p className="bttn-signin"><i className="fa fa-google-plus" aria-hidden="true" />  Login with Google</p>
            </a>
          </li>;
      default:
        return <li><a href="/api/logout"><p className="bttn-signin">Logout</p></a></li>;
    }
  }
  
  render(){
    return <nav className="nav">
        <div className="nav-wrapper">
          <div className="nav-items nav-left">
            <Link to={this.props.auth ? "/main" : "/"}>
              <div className="logo">
                <div className="logo-img-container">
                  <img className="logo-img" alt="logo" src="https://res.cloudinary.com/dbtdkqyeo/image/upload/v1513210193/nevernote_umqrul.png" />
                </div>
                <div className="logo-txt">NEVERNOTE</div>
              </div>
            </Link>
          </div>
          <div className="nav-items nav-right">
            <ul className="session-buttons">{this.renderContent()}</ul>
          </div>
        </div>
      </nav>;
  }
}

export default Header;