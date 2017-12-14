import React, { Component } from 'react';
import '../../css/landing_sub/intro.css';

class Intro extends Component {

  constructor(props){
    super(props);
    this.state = {
      renderImage: null
    };
  }
  componentDidMount(){
    window.addEventListener("resize", (e) => {
      e.preventDefault();
      let container = document.querySelector('div.intro-container');
      if (container.clientWidth < 800) {
        this.setState({ renderImage: false })
      } else {
        this.setState({ renderImage: true })
      }
    })
  }

  render() {
    return <div className="intro-container">
        <div className="intro-txt-container">
          <div className="intro-txt-heading">
            <h2>Meet Nevernote, your third brain</h2>
          </div>
          <div className="intro-txt-subheading">
            <h4>
              Capture, organize, and share notes from anywhere. Your best
              ideas are always with you and always in sync.
            </h4>
          </div>
          <div className="intro-txt-create-profile-btn-container">
            <button>
              <a href="/auth/google">Create your free account</a>
            </button>
          </div>
        </div>
        <div className="intro-image-container">
          { this.state.renderImage ? <img alt="note" src="http://res.cloudinary.com/dbtdkqyeo/image/upload/v1513284283/note1_duiiun.jpg" /> : ""}
        </div>
      </div>;
  }
}

export default Intro;