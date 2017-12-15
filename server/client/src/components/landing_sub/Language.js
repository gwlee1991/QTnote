import React, { Component } from 'react';
import '../../css/landing_sub/language.css';

class Language extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
      language: "English (US)"
    };
    this.toggleShowOptions = this.toggleShowOptions.bind(this);
    this.setLanguage = this.setLanguage.bind(this);
  }

  toggleShowOptions(){
    this.setState({ showOptions: !this.state.showOptions})
  }

  renderLanguageOptions(){
    const languages = ["English (US)", "한국어"]
    return(
      <div className="language-selection-container">
        <ul>
        {languages.map(language => (
          <li onClick={(e) => this.setLanguage(e)} className="language-option" key={languages.indexOf(language)}>{language}</li>
        ))}
        </ul>
      </div>
    )
  }

  setLanguage(e){
    let languageTag = e.target;
    console.log(languageTag);
    this.setState({
      language: languageTag.innerHTML
    })
  }
  
  render(){
    return (
      <div className="language-container">
        <p className="language-selection" onClick={this.toggleShowOptions}>Choose a language: {this.state.language} <i className="fa fa-caret-down" aria-hidden="true" /></p>
        {this.state.showOptions ? this.renderLanguageOptions(): ""}
      </div>
    )
  }
}

export default Language;