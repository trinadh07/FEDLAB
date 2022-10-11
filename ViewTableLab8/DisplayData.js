import React, { Component } from "react";
import { products } from "./data";
export class DisplayData extends Component {
  render() {
    return (
      <div>
        <table border={1}>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          {products.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
export default DisplayData;
