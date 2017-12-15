import React, { Component } from 'react';
import '../../css/landing_sub/benefits.css';

class Benefits extends Component {

  
  componentDidMount() {
    let container = document.querySelector('div.benefits-container');
    let textContainer = document.querySelectorAll('.centered-txt');
    let image = document.querySelector('.benefits-image');

    window.addEventListener("load", (e) => {
      e.preventDefault();
      this.setFlexDirection(container);
      this.setTextAlign(textContainer);
    });
    
    window.addEventListener("resize", (e) => {
      e.preventDefault();
      this.setFlexDirection(container);
      this.setTextAlign(textContainer);
      this.changeImage(image);
    });  
  }

  changeImage(element){
    if (window.innerWidth > 600) {
      element.src = "http://res.cloudinary.com/dbtdkqyeo/image/upload/c_scale,w_350/v1513292353/remember-brain_cxbujk.jpg";
    } else {
      element.src = "http://res.cloudinary.com/dbtdkqyeo/image/upload/c_scale,w_210/v1513292353/remember-brain_cxbujk.jpg";
    }
  }
  
  setFlexDirection(element){
    if (window.innerWidth > 800) {
      element.style.flexDirection = "row";
    } else {
      element.style.flexDirection = "column";
    }
  }

  setTextAlign(elements) {

    if(window.innerWidth < 500) {
      elements.forEach(element => {
        element.style.textAlign = "left";
      })
    } else {
      elements.forEach(element => {
        element.style.textAlign = "center";
      })
    }
  }

  renderImage(){
    if (window.innerWidth > 600) {
      return (
        <div className="benefits-image-container">
          <img className="benefits-image" alt="remember" src="http://res.cloudinary.com/dbtdkqyeo/image/upload/c_scale,w_350/v1513292353/remember-brain_cxbujk.jpg" />
        </div>
      );
    } else {
      return (
        <div className="benefits-image-container">
          <img className="benefits-image" alt="remember" src="http://res.cloudinary.com/dbtdkqyeo/image/upload/c_scale,w_210/v1513292353/remember-brain_cxbujk.jpg" />
        </div>
      );
    }
  }

  render () {
    return <div className="benefits-container">
        {this.renderImage()}
        
        <div className=" benefits-txt-container">
          <div className="benefits-txt-header">
            <h3 className="centered-txt">Remember Everything</h3>
          </div>
          <div className="benefits-txt-body">
            <h4 className="centered-txt">
              Organize your work and declutter your life. Collect everything
              that matters in one place and find it when you need it, fast.
            </h4>
          </div>
          <div className="benefits-txt-create-profile-btn-container">
            <p>
              <a className="create-account-link" href="/auth/google">Create your free account</a>
            </p>
          </div>
        </div>
      </div>;
  }
}

export default Benefits;