import React, { Component } from 'react';
import '../../css/landing_sub/socialproof.css';


class SocialProof extends Component {
  componentDidMount(){
    let spContainer = document.querySelector('.sp-container');
    window.addEventListener("onload",(e) => {
      e.preventDefault();
      this.setPadding(spContainer);
    })

    window.addEventListener("resize", (e) => {
      e.preventDefault();
      this.setPadding(spContainer);
    })
  }

  setPadding(element){
    if (window.innerWidth < 600) {
      element.style.paddingTop = "0px";
      element.style.paddingBottom = "50px";
    } else {
      element.style.paddingTop = "30px";
      element.style.paddingBottom = "80px";
    }
  }
  
  render(){
    return <div className="sp-container">
        <div className="sp-heading">
          <h3>
            A few people rely on Nevernote to stay organized and get
            more done. Find out why.
          </h3>
        </div>
        <div className="create-profile-btn-container">
          <button className="create-account-bttn">
            <a href="/auth/google">Sign up for free</a>
          </button>
        </div>
      </div>;
  }
}

export default SocialProof;