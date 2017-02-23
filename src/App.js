import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-background">
          <img src="https://s3.us-east-2.amazonaws.com/restaurant.ericbutler.info/Restaurant.JPG" className="App-logo" alt="logo" />
        </div>
        <section className="App-content">
			Welcome to <i>React Ristorante</i>
        </section>
      </div>
    );
  }
}

export default App;
