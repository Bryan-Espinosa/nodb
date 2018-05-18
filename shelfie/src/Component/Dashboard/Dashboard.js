import React, { Component } from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.inventoryList);

    const inventoryList = this.props.inventoryList.map((val, index) => {
      return (
        <div key={index}>
          {val.imageUrl}
          {val.name}
          {val.price}
        </div>
      );
    });
    return <div>Product</div>;
  }
}

export default Dashboard;
