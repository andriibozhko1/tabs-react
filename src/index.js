import React, { Component } from "react";
import ReactDOM from "react-dom";
import Tabs from "./component/Tabs";
import Tab from "./component/Tab";
import "./style/style.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Tabs
          onTabSelected={data => {
            console.log(data.title, data.text);
          }}
        >
          <Tab title="Tab 1">Some text 1</Tab>
          <Tab title="Tab 2">Some text 2</Tab>
          <Tab title="Tab 3">Some text 3</Tab>
        </Tabs>
        <Tabs>
          <Tab title="Tab 1">asd text 1</Tab>
          <Tab title="Tab 2">Some text 2</Tab>
          <Tab title="Tab 3">Some text 3</Tab>
        </Tabs>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
