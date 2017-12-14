import React, { Component } from 'react';
import '../../css/landing_sub/intro.css';

class Intro extends Component {

  constructor(props){
    super(props);
    this.state = {
      renderImage: null,
      fontSize: undefined,
      imageContainer: null,
    };
  }
  componentDidMount(){
    window.addEventListener("load", (e) => {
      e.preventDefault();
      let container = document.querySelector('div.intro-container');
      if (container.clientWidth < 800) {
        this.setState({ renderImage: false });
      } else {
        this.setState({ renderImage: true });
      }

      let heading = document.querySelector('h2');
      if (container.clientWidth < 500) {
        this.setState({ fontSize: "30px" }, () => {
          heading.style.fontSize = this.state.fontSize
        });
      } else {
        this.setState({ fontSize: "46px"}, () => {
          heading.style.fontSize = this.state.fontSize
        });
      }

    })

    window.addEventListener("resize", (e) => {
      e.preventDefault();
      let container = document.querySelector('div.intro-container');
      if (container.clientWidth < 800) {
        this.setState({ renderImage: false })
      } else {
        this.setState({ renderImage: true })
      }

      let heading = document.querySelector('h2');
      if (container.clientWidth < 500) {
        this.setState({ fontSize: "30px"}, () => {
          heading.style.fontSize = this.state.fontSize
        });
      } else {
        this.setState({ fontSize: "46px"}, () => {
          heading.style.fontSize = this.state.fontSize
        });
      }
    })
  }

  render() {
    return <div className="intro-container">
        <div className="intro-txt-container">
          <div className="intro-txt-heading">
            <h2>Meet Nevernote, your third brain.</h2>
          </div>
          <div className="intro-txt-subheading">
            <h4>
              Capture, organize, and share notes from anywhere. Your best
              ideas are always with you and always in sync.
            </h4>
          </div>
          <div className="intro-txt-create-profile-btn-container">
            <button className="create-account-bttn">
              <a href="/auth/google">Create your free account</a>
            </button>
          </div>
        </div>
        {this.state.renderImage ? <div className="intro-image-container">
            <img alt="note" className="intro-image" src="http://res.cloudinary.com/dbtdkqyeo/image/upload/c_scale,w_448/v1513290464/intro-image_p1aulz.jpg" />
          </div> : ""}
      </div>;
  }
}

export default Intro;