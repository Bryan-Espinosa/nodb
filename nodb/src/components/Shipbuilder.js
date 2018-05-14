import React, { Component } from "react";
import "./Shipbuilder.css";
import App from "../App";
import axios from "axios";

class Shipbuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipName: "",
      shipCrew: [],
      crewMemberName: "",
      showCurrentMember: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      crewMemberName: (this.select = this.state.crewMemberName.concat(
        this.select.value
      ))
    });
    axios
      .post("/api/addCrewMember", {
        selectedCrew: this.props.crewMemberName
      })
      .then(res => {
        console.log(res);
      });
  }
  handleCreate() {
    console.log("someyhing");

    this.setState({ showCurrentMember: true });
  }
  render() {
    console.log(this.props.showCurrentMember);
    console.log(this.props.shipName);
    console.log(this.props.crewMemberName);

    let person = this.props.data.map((person, index) => {
      return <option key={index}>{person.name}</option>;
    });

    return (
      <div className="App">
        <h2>Ship Name:</h2>
        <input
          value={this.props.shipName}
          onChange={e => this.setState({ shipName: e.target.value })}
        />

        <select ref={ref => (this.select = ref)}>{person}</select>
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          add to crew
        </button>
        <button onClick={() => this.handleCreate()}> Create Ship </button>
        {this.state.showCurrentMember &&
          this.state.shipName + "" + this.state.crewMemberName}
      </div>
    );
  }
}
export default Shipbuilder;
