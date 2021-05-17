import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import images from "./images.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.shuffle(images),
      chosen: [],
      score: 0,
      topScore: 0
    };
  }

  shuffle = (array) => {
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
    };
    return array;
  };

  clicky = (id) => {
    let chosen1 = this.state.chosen;
    let score = this.state.score;
    let topScore = this.state.topScore;
    if (chosen1.includes(id)) {
      score = 0;
      chosen1 = [];
    } else {
      score++;
      chosen1.push(id);
      if(topScore < score) {
        topScore = score;
      };
    };
    this.setState({
      images: this.shuffle(this.state.images),
      chosen: chosen1,
      score: score,
      topScore: topScore
    });
  };

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
              clicky={this.clicky}
            />
          ))}
        </div>
      </Wrapper>
    );
  };
}

export default App;