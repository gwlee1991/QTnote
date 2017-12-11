import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
  render(){
    return(
      <div className="landing-container"> 
        Landing
      </div>
    )
  }
}

export default connect(null)(Landing);