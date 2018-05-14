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
    Alert();
    axios.get(`/api/getPerson`).then(data => {
      this.setState({ data: data.data.results });
    });
  }

  render() {
    return (
      <div className="backgroundColor">
        <Header />
        <body>
          <Shipbuilder data={this.state.data} />
        </body>
        <Footer />
      </div>
    );
  }
}
export default App;
