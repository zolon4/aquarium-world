import React from "react";
import App from "next/app";
import "../css/application.css";

class MyApp extends App {
  render() {
    const { Component, props } = this.props;
    return <Component {...props} />;
  }
}

export default MyApp;
