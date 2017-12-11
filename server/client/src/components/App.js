import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Main from './Main';


class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/main" component={Main} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
