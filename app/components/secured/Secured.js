import React, { Component } from "react";
import { Text, View, ScrollView, Button } from "react-native";
import styles from "./SecuredStyles";
import Background from "../background/Background";
import Constants from "../../utilities/Constants";

class Secured extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Background look={Constants.backgroundLookSecured} />
        <ScrollView style={{ padding: 20 }}>
          <Text style={{ fontSize: 27 }}>{Constants.securedHeader}</Text>
          <View style={{ margin: 20 }} />
          <Button
            onPress={this.props.onLogoutPress}
            title={Constants.securedLogout}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Secured;
