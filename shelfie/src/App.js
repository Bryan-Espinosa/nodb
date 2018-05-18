import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Component/Dashboard/Dashboard";
import Form from "./Component/Form/Form";
import Header from "./Component/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventoryList: [
        {
          name: "mjolnir",
          Price: 10000000,
          imageUrl:
            "https://vignette.wikia.nocookie.net/halo/images/0/0f/Halo3MC.png/revision/latest?cb=20131125070217"
        },
        {
          name: "Chozo battle suit",
          Price: 100000000,
          imageUrl:
            "https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/e/e9/Samus_Aran.jpg/revision/latest?cb=20131112160721"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Dashboard props={this.state.inventoryList} />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
