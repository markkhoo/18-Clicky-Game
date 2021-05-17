import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import images from "./images.json";

class App extends Component {
  state = {
    images: images,
    choosen: [],
    score: 0,
    topScore: 0,
  };

  render() {
    return (
      <Wrapper>
        <h1>Clicky Game</h1>
        <h2>Score: {this.state.score} ||| Top Score: {this.state.topScore}</h2>
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