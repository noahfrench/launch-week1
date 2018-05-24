import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import BarGraph from "./BarGraph.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/repos/facebook/react/contributors")
      .then(response => {
        let dataProp = response.data.map(obj => ({
          user: obj.login,
          numContributions: obj.contributions
        }));

        this.setState({
          userList: dataProp
        });
      })

      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <ul>
        {this.state.userList.map(user => (
          <li>
            User: {user.user}
            <br />
            Number of contributions: {user.numContributions}
            <br />
          </li>
        ))}
        <BarGraph funData={this.state.userList} />
      </ul>
    );
  }
}

export default App;
