import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import images from "./images.json";

class App extends Component {
  state = {
    images: this.shuffle(images),
    choosen: [],
    score: 0,
    topScore: 0,
  };

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  render() {
    return (
      <Wrapper>
        <header>
          <h1>Clicky Game</h1>
          <h2>Score: {this.state.score} ||| Top Score: {this.state.topScore}</h2>
        </header>
        <div>
          {this.state.images.map(images => (
            <Card 
              id={images.id}
              key={images.id}
              image={images.image}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;