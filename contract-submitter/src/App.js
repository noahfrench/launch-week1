import React, { Component } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import "typeface-roboto";
import { Input } from "@material-ui/core";
import ContractForm from "./ContractForm.js";
import firebase from "./firebase.js";

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

  // Update the states given the fields
  updateField(field, newValue) {
    this.setState({
      [field]: newValue
    });
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref("submittedForms");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        let newForm = {
          name: items[item].name,
          company: items[item].company,
          contractDetails: items[item].contractDetails
        };
        newState.push(newForm);
      }
      this.setState({
        contactList: newState
      });
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
    console.log(this.state.contactList);
    if (
      !duplicateEmployee &&
      person.name !== "" &&
      person.company !== "" &&
      person.contractDetails !== ""
    ) {
      const itemsRef = firebase.database().ref("submittedForms");
      itemsRef.push(person);
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
            <strong>Name:</strong> {e.name}
            <br />
            <strong>Company:</strong> {e.company}
            <br />
            <strong>Contract Details:</strong> {e.contractDetails}
            <br />
            <br />
          </p>
        ))}
      </div>
    );
  }
}

export default App;
