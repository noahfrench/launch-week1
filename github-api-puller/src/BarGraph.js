import React, { Component } from "react";
import { VictoryBar, VictoryChart } from "victory";

export default class BarGraph extends Component {
  render() {
    console.log(this.props.funData);
    if (this.props.funData !== 0) {
      return (
        <VictoryChart>
          <VictoryBar data={this.props.funData} x="user" y="numContributions" />
        </VictoryChart>
      );
    }
  }
}
