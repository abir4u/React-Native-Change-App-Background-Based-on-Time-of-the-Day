import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableHighlight
} from "react-native";
import styles from "./LoginStyles";
import Background from "../background/Background";
import Constants from "../../utilities/Constants";

class Login extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Background look={Constants.backgroundLookLogin} />
        <ScrollView style={styles.loginScroll}>
          <Text style={styles.loginHeader}>{Constants.loginHeader}</Text>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>{Constants.usernameText}</Text>
            <TextInput
              style={styles.loginTextField}
              placeholder={Constants.usernamePlaceholder}
            />
            <Text style={styles.loginText}>{Constants.passwordText}</Text>
            <TextInput
              style={styles.loginTextField}
              placeholder={Constants.passwordPlaceholder}
            />
            <View style={{ margin: 7 }} />
            <TouchableHighlight
              style={styles.loginButton}
              activeOpacity={1}
              underlayColor={Constants.accessButtonUnderlayColor}
              onPress={this.props.onLoginPress}
            >
              <Text style={styles.loginButtonText}>
                {Constants.accessButtonText}
              </Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Login;
