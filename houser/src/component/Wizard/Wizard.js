import React, { Component } from "react";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };
  }
  render() {
    return (
      <div>
        <input onChange={e => this.setState({ name: e.target.value })} />
        <input onChange={e => this.setState({ address: e.target.value })} />
        <input onChange={e => this.setState({ city: e.target.value })} />
        <input onChange={e => this.setState({ state: e.target.value })} />
        <input onChange={e => this.setState({ zipcode: e.target.value })} />
        <link to="/Wizard">
          <button>Cancel</button>
        </link>
      </div>
    );
  }
}

export default Wizard;
