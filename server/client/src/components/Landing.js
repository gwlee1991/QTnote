import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/landing.css';

import Intro from './landing_sub/Intro';
import Benefits from './landing_sub/Benefits';
import SocialProof from './landing_sub/SocialProof';
import Language from './landing_sub/Language';

class Landing extends Component {
  render(){
    return(
      <div className="landing-container"> 
        <section className="section-intro"><Intro /></section>
        <section className="section-benefits"><Benefits /></section>
        <section className="section-socialproof"><SocialProof /></section>
        <section className="section-language"><Language /></section>
      </div>
    )
  }
}

export default connect(null)(Landing);