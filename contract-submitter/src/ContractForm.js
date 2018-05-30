import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import firebase from "./firebase.js";

export default class ContractForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ContractForm">
        <AppBar positition="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Contract Form
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <TextField
          label="Name"
          margin="normal"
          onChange={e => this.props.updateName(e.target.value)}
        />
        <br />
        <TextField
          label="Company"
          margin="normal"
          onChange={e => this.props.updateCompany(e.target.value)}
        />
        <br />
        <TextField
          label="Contract Details"
          margin="normal"
          onChange={e => this.props.updateContractDetails(e.target.value)}
        />
        <br />
        <Button color="primary" onClick={e => this.props.submitClick()}>
          submit
        </Button>
      </div>
    );
  }
}
