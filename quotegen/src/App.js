import React, { Component } from "react";
import "./App.css";
import QuoteGenerator from "./QuoteGenerator.js";

class App extends Component {
  render() {
    const quoteList = [
      "Get busy living or get busy dying.",
      "Those who dare to fail miserably can achieve greatly.",
      "I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down."
    ];

    return (
      // Pass down quoteList as a prop
      <QuoteGenerator x={quoteList} />
    );
  }
}

export default App;
