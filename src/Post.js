import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// Component showing main view with summaries of the 3 blog posts
class Post extends Component {
constructor(props) {
    super(props);


  }

setPost(post){
  this.props.setPost(post);
}

  render() {
    return (

      <div>
      <div className="title pointer">
        <h1 onClick={this.setPost.bind(this, this.props.id)} >{this.props.title} </h1>
        <span>{this.props.date}</span>
      </div>
      
      <div className="summary">
      <img src={this.props.image}></img>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur lorem donec massa sapien faucibus et molestie ac. Viverra maecenas accumsan lacus vel facilisis volutpat est. Pharetra sit amet aliquam id diam maecenas ultricies. Eros in cursus turpis massa. Et tortor at risus viverra adipiscing at in tellus integer. </p>   
      </div>
    </div>
    );
  }
}

export default Post;
