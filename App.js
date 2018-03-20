/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Login from "./app/components/login/Login";
import Secured from "./app/components/secured/Secured";

type Props = {};
export default class App extends Component<{}> {
  state = {
    isLoggedIn: false
  };
  render() {
    if (this.state.isLoggedIn)
      return (
        <Secured onLogoutPress={() => this.setState({ isLoggedIn: false })} />
      );
    else
      return <Login onLoginPress={() => this.setState({ isLoggedIn: true })} />;
  }
}
