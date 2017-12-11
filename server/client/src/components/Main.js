import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
  render(){
    return(
      <div className="main-container">
        Main
      </div>
    )
  }
}

export default connect(null)(Main);