import React from "react";

class TestComponent extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
    const LiveChat = require("@livechat/agent-app-sdk");
    LiveChat.createDetailsWidget().then(function (widget) {
      widget.on("customer_profile", (profile) => {
        console.log(profile);
      });
    });
  }

  render() {
    return <p>test component</p>;
  }
}

export default TestComponent;
