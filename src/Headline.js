import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Headline extends Component {
  // Component to display the 5 news articles from Google
  render() {
  console.log(this.props.headline);
    return (
      <div>
        <span className="headline">GOOGLE HEADLINES</span><br></br>
        •{this.props.headline.articles[0].title}<br></br>
        •{this.props.headline.articles[1].title}<br></br>
        •{this.props.headline.articles[2].title}<br></br>
        •{this.props.headline.articles[3].title}<br></br>
        •{this.props.headline.articles[4].title}<br></br>
    </div>
    );
  }
}

export default Headline;
