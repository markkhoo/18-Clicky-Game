# 18-Clicky-Game

## Description
This is basic memory game powered by [Reactjs](https://reactjs.org/). To earn points, simply click each unique image once. Can you get the highest score? Play the game [HERE](https://markkhoo.github.io/18-Clicky-Game/). 

## Technologies Used
* HTML
* CSS
* Javascript
* [Reactjs](https://reactjs.org/)
    * React-dom
    * eslint

## Code Snipet
The following code snippet showcases the main 'meat' of the application. What looks like HTML syntax is actually JSX syntax in javascript. This syntax makes working with this these React components much more pleseant.
```javascript
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
```

---

## Contact
For any questions contact GitHub user [markkhoo](https://github.com/markkhoo) or at this email: markkhoo95@gmail.com