import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Alert from "./components/Alert";
import Shipbuilder from "./components/Shipbuilder";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    Alert("Commander: A ship dispatch is required");
    axios.get(`/api/getPerson`).then(data => {
      this.setState({ data: data.data.results });
    });
  }

  render() {
    return (
      <div className="backgroundColor">
        <Header />
        <div>
          <Shipbuilder data={this.state.data} />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
