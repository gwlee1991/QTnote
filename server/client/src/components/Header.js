import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

class Header extends Component {
  componentDidMount(){
    window.addEventListener("resize", (e) => {
      let phrase = document.querySelector('.bttn-signin')
      e.preventDefault();
      console.log(phrase);
      if (window.innerWidth > 530) {
        phrase.innerHTML = "Login with Google";
      } else {
        phrase.innerHTML = "";
      }
    })

  }
  
  renderContent(){
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <div className="login-bttn">
              <a href="/auth/google">
                <span>
                  <i className="fa fa-google-plus" aria-hidden="true" />
                </span>
                <span className="bttn-signin">
                  {this.renderGoogleSignin()}
                </span>
              </a>
            </div>
          </li>
        );
      default:
        return <li><a href="/api/logout"><p className="login-bttn">Logout</p></a></li>;
    }
  }

  renderGoogleSignin(){
    if(window.innerWidth > 530) {
      return ( 
        "Login with Google"
      );
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