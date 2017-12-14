import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import * as actions from '../actions';

import '../css/app.css';

import HeaderContainer from './HeaderContainer';
import Landing from './Landing';
import Main from './Main';


class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <HeaderContainer />
          <Route exact path="/" component={Landing} />
          <Route exact path="/main" component={Main} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
