import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class FullPost extends Component {
  
setPost(post){
  this.props.setPost(post);
}

  // Component to show the full blog post when clicked
  // Takes in the id of the blog post from the props and shows the relevant information using if statements below.
  render() {
  var title = "";
  var image = "";
  var post = "";

  if (this.props.id == 1){
      title = "Best Speakers of 2019"
      image = "https://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg"
      post = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Amet tellus cras adipiscing enim eu. Faucibus in ornare quam viverra. In hac habitasse platea dictumst vestibulum rhoncus est. Eget nullam non nisi est sit. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Odio tempor orci dapibus ultrices in iaculis. Sit amet venenatis urna cursus. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Tortor condimentum lacinia quis vel eros donec ac odio. Aliquam nulla facilisi cras fermentum. Accumsan lacus vel facilisis volutpat est velit. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Nec feugiat in fermentum posuere. Mattis nunc sed blandit libero volutpat sed."
  }

  if (this.props.id == 2){
      title = "Why You Should Never Wash Your Hands"
      image = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Silhouette_hand.svg" 
      post = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Amet tellus cras adipiscing enim eu. Faucibus in ornare quam viverra. In hac habitasse platea dictumst vestibulum rhoncus est. Eget nullam non nisi est sit. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Odio tempor orci dapibus ultrices in iaculis. Sit amet venenatis urna cursus. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Tortor condimentum lacinia quis vel eros donec ac odio. Aliquam nulla facilisi cras fermentum. Accumsan lacus vel facilisis volutpat est velit. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Nec feugiat in fermentum posuere. Mattis nunc sed blandit libero volutpat sed."
  }

  if (this.props.id == 3){
      title = "My Experience with Cryotherapy"
      image = "https://upload.wikimedia.org/wikipedia/commons/5/50/Snow_flake.svg" 
      post = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Amet tellus cras adipiscing enim eu. Faucibus in ornare quam viverra. In hac habitasse platea dictumst vestibulum rhoncus est. Eget nullam non nisi est sit. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Odio tempor orci dapibus ultrices in iaculis. Sit amet venenatis urna cursus. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Tortor condimentum lacinia quis vel eros donec ac odio. Aliquam nulla facilisi cras fermentum. Accumsan lacus vel facilisis volutpat est velit. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Nec feugiat in fermentum posuere. Mattis nunc sed blandit libero volutpat sed."
  }




console.log(post);
    return (
      <div>
      <strong className="blogTitle">{title}</strong>
      <img className="picture" src={image}></img>
      <div className="content">
        {post}
      </div>    

    </div>
    );
  }
}

export default FullPost;
