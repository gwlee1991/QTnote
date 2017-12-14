import React, { Component } from 'react';
import '../../css/landing_sub/benefits.css';

class Benefits extends Component {

  constructor(props){
    super(props);

  }

  
  componentDidMount() {
    let container = document.querySelector('div.benefits-container');

    window.addEventListener("load", (e) => {
      e.preventDefault();
      this.setFlexDirection(container)
    });
    
    window.addEventListener("resize", (e) => {
      e.preventDefault();
      this.setFlexDirection(container);
    });  
  }
  
  setFlexDirection(element){
    if (element.clientWidth > 800) {
      element.style.flexDirection = "row";
    } else {
      element.style.flexDirection = "column";
    }
  }
  

  render () {
    return <div className="benefits-container">
        <div className="benefits-image-container">
          <img alt="remember" src="http://res.cloudinary.com/dbtdkqyeo/image/upload/c_scale,w_415/v1513292353/remember-brain_cxbujk.jpg" />
        </div>
        <div className="benefits-txt-container">
          <div className="benefits-txt-header">
            <h3>Remember Everything</h3>
          </div>
          <div className="benefits-txt-body">
            <h4>
              Organize your work and declutter your life. Collect everything
              that matters in one place and find it when you need it, fast.
            </h4>
          </div>
          <div className="benefits-txt-create-profile-btn-container">
            <button className="create-account-link">
              <a href="/auth/google">Create your free account</a>
            </button>
          </div>
        </div>
      </div>;
  }
}

export default Benefits;