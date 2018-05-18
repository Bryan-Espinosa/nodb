import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ImageURL: "",
      Name: "",
      Price: ""
    };
    console.log(this.state);
    this.updateImageURL = this.updateImageURL.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    this.cancelClick = this.cancelClick.bind(this);
  }
  updateImageURL(e) {
    this.setState({ ImageURL: e });
    console.log(this.state.ImageURL);
  }
  updateName(e) {
    this.setState({ Name: e });
    console.log(this.state.Name);
  }
  updatePrice(e) {
    this.setState({ Price: e });
    console.log(this.state.Price);
  }
  cancelClick(e) {
    this.setState({
      ImageURL: [],
      Name: [],
      Price: []
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <img src="" alt="alt" />
        Image Url:
        <input onChange={e => this.updateImageURL(e.target.value)} /> Name:
        <input onChange={e => this.updateName(e.target.value)} />
        Price:
        <input onChange={e => this.updatePrice(e.target.value)} />
        <button onClick={e => this.cancelClick()}>Cancel</button>
        <button> Add to Inventory</button>
      </div>
    );
  }
}

export default Form;
