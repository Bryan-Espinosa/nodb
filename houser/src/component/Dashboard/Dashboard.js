import React, { Component } from "react";
import House from "../House/House";
import axios from "axios";
import { Link } from "react-router-dom";
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houseList: []
    };
  }
  componentDidMount() {
    axios.get("/api/houses").then(response => {
      this.setState({ houseList: response });
    });
  }
  render() {
    let house = this.state.houseList.map((house, index) => {
      return <div key={index}> {house}</div>;
    });
    return (
      <div>
        <Link to="/Dashboard">
          <button> Add New Property</button>
        </Link>
        <House />
      </div>
    );
  }
}

export default Dashboard;
