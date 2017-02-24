import React, { Component } from 'react';
import Hours from './Hours';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="App-content">
          <span className="slide-in">Welcome to <i>React Ristorante</i></span>
        </section>
        <Hours />
      </div>
    );
  }
}

export default App;
