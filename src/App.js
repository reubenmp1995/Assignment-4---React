import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';
import FullPost from './FullPost';
import Headline from './Headline';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };

    this.loadData = this.loadData.bind(this);
    this.setPost = this.setPost.bind(this);
  }

  
  // Makes an ajax call to neww API and calls load data function every 5 seconds
  componentDidMount() {
    this.loadData()
    setInterval(this.loadData, 5000);
  }

  
  // Sets which post so the FullPost component knows which to display.
  setPost(post){
  this.setState(state => ({
            post: post
        }));
}

  
  // API call getting 5 recent news stories from google. Sets the state with the new data each time.
  loadData(){
    var url = 'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=71700fe98f8f489bae3b7d917f75b8d6&pageSize=5';
var req = new Request(url);
fetch(req)
    .then(result => result.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  
  // Main display of site. If a user has clicked on one of the posts, the Full post component will be displayed
  // Otherwise, the value of post will be null and then the main view with all 3 posts will be shown
  // Used a ternary operator for this logic.
  // The home button in the nav sets the value of post to null so it returns to the main view
  render() {

  if (!this.state.isLoaded) {
            return (<div></div>);
        }

  
  var view = this.state.post ? <div> <FullPost setPost = {this.setPost} id = {this.state.post}/> </div> : 
          <div>
        <Post setPost = {this.setPost} id = "1" 
        image = "https://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg" 
        title = "Best Speakers of 2019" date = "April 18th, 2019" />
        <Post setPost = {this.setPost} id = "2" 
        image = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Silhouette_hand.svg" 
        title = "Why You Should Never Wash Your Hands" date = "April 10th, 2019"/>
        <Post setPost = {this.setPost} 
        id = "3" image = "https://upload.wikimedia.org/wikipedia/commons/5/50/Snow_flake.svg" 
        title = "My Experience with Cryotherapy" date = "April 6th, 2019"/></div>
  
    return (
      <div className="App">
      
      <header>
        REUBEN'S BLOG
      </header>
      
      <nav>
      <button onClick={this.setPost.bind(this, null)}> HOME </button>
       <Headline headline = {this.state.items}/>
      </nav>
      
      <div className="main">
        {view}
      </div>
      
      <footer>
      <strong>Copyright © HelloWorld.com</strong>
      </footer>
      
      </div>
    );
  }
}

export default App;
