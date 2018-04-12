import React, { Component } from "react";
import LetterCard from "./components/LetterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import letters from "./letters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    letters
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  shuffle = function() {
  var input = this;
   
  for (var i = input.length-1; i >=0; i--) {
   
      var randomIndex = Math.floor(Math.random()*(i+1)); 
      var itemAtIndex = input[randomIndex]; 
       
      input[randomIndex] = input[i]; 
      input[i] = itemAtIndex;
  }
  return input;
  };
  



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
     <Navbar></Navbar>
      <Title></Title>
      <Wrapper >
        {this.state.letters.map(oneletter => (
          

          <LetterCard
            // removeFriend={this.removeFriend}
            
            id={oneletter.id}
            key={oneletter.id}
            image={oneletter.image}
          />
        ))}
      </Wrapper>
      <Footer>&copy; Copyright Susan Marek</Footer>
      </div>
    );
  }
}

export default App;
