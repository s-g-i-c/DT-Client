import "antd/dist/antd.css";
import { Empty } from "antd";
import React, { Component } from "react";

class Emptyfile extends Component {
  render() {
    return (
      <Empty
        imageStyle={{
          height: 300
        }}
      />
    );
  }
}

export default Emptyfile;
