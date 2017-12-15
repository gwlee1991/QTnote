import React, { Component } from 'react';
import '../../css/landing_sub/socialproof.css';


class SocialProof extends Component {
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