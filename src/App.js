import React, { Component } from 'react';
import './App.css';
import Flexi from './components/Flexi'

class App extends Component {
  constructor() {
    super();
    this.handleFlexiSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    console.log(data);
  }

  render() {
    const flexiConfig = {
      items: [
        {
          "name": "personname",
          "label": "Person's Name",
          "type": "TextField",
        },
        {
          "name": "states",
          "label": "Person's state",
          "type": "DropDown",
          "values": [
            "Maharashtra",
            "Kerala",
            "Tamil Nadu"
          ]
        }
      ]
    };
    return (
      <div className="App">
        <Flexi onSubmit={this.handleSubmit} config={flexiConfig} />
        <br />
        <p>Check the user provided data on browser console.</p>
      </div>
    );
  }
}

export default App;
