import React, { Component } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import "typeface-roboto";
import { Input } from "@material-ui/core";
import ContractForm from "./ContractForm.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      company: "",
      contractDetails: "",
      contactList: []
    };
  }

  updateField(field, newValue) {
    this.setState({
      [field]: newValue
    });
  }

  submitClick(e) {
    let person = {
      name: this.state.name,
      company: this.state.company,
      contractDetails: this.state.contractDetails
    };
    let tempArray = this.state.contactList;
    let duplicateEmployee = tempArray.some(
      employee => JSON.stringify(employee) === JSON.stringify(person)
    );
    if (
      !duplicateEmployee &&
      person.name !== "" &&
      person.company !== "" &&
      person.contractDetails !== ""
    ) {
      tempArray.push(person);
      this.setState({
        contactList: tempArray
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Button variant="raised" color="primary">
          Hello World
        </Button>
        asl'djf;awesf;lwfrl;wajrwlRRRASDLKFWENE;
        {/* aslja;lkdjsf*/}
        <Input
          updateParent={newValue => this.updateField("currentInput", newValue)}
        />
        <ContractForm
          currentName={this.state.name}
          updateName={newName => this.updateField("name", newName)}
          currentCompany={this.state.company}
          updateCompany={newCompany => this.updateField("company", newCompany)}
          currentContractDetails={this.contractDetails}
          updateContractDetails={newContractDetails =>
            this.updateField("contractDetails", newContractDetails)
          }
          submitClick={e => this.submitClick(e)}
          currentContactList={this.state.contactList}
        />
        {this.state.contactList.map(e => (
          <p>
            Name: {e.name}
            <br />
            Company: {e.company}
            <br />
            Contract Details: {e.contractDetails}
            <br />
            <br />
          </p>
        ))}
      </div>
    );
  }
}

export default App;
