import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Button,
  TouchableHighlight
} from "react-native";
import styles from "./SecuredStyles";
import Background from "../background/Background";
import Constants from "../../utilities/Constants";

class Secured extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Background look={Constants.backgroundLookSecured} />
        <View style={styles.securedHeaderPanel}>
          <Text style={styles.securedHeaderText}>
            {Constants.securedHeader}
          </Text>
        </View>
        <ScrollView style={styles.securedScroll}>
          <View style={styles.separatorView} />
          <TouchableHighlight
            style={styles.logoutButton}
            activeOpacity={1}
            underlayColor={Constants.accessButtonUnderlayColor}
            onPress={this.props.onLogoutPress}
          >
            <Text style={styles.logoutButtonText}>
              {Constants.securedLogout}
            </Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}

export default Secured;
