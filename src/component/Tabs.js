import React, { Component } from "react";

export default class Tabs extends Component {
  constructor(props) {
    super(props);

    const tabs = this.props.children.map((tab, index) => {
      return {
        title: tab.props.title,
        text: tab.props.children,
        id: index
      };
    });
    this.state = {
      tabs,
      isActiveTab: tabs[0],
    };
  }

  checkTab = id => {
    if(this.props.onTabSelected) {
      this.props.onTabSelected(this.state.tabs[id])
    }
    
    this.setState({
      isActiveTab: this.state.tabs[id]
    });
  };

  render() {
    return (
      <div className="Tabs">
        <div className="Tabs__header">
          {this.state.tabs.map(tab => {
            return (
              <div
                key={tab.id}
                className={`Tabs__header-items${
                  this.state.isActiveTab.title === tab.title ? "--active" : ""
                }`}
                onClick={() => {
                  this.checkTab(tab.id);
                }}
              >
                {tab.title}
              </div>
            );
          })}
        </div>
        <div className="Tabs__content">
          {this.props.children.map(tab => {
            return this.state.isActiveTab.title === tab.props.title ? tab : "";
          })}
        </div>
      </div>
    );
  }
}
