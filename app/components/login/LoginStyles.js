import { StyleSheet } from "react-native";
import Constants from "../../utilities/Constants";

export default StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  loginScroll: {
    padding: 20
  },
  loginContainer: {
    backgroundColor: "#000000AC",
    padding: 30
  },
  loginText: {
    color: "white"
  },
  loginTextField: {
    color: "#000000",
    backgroundColor: Constants.commonColorWhite,
    fontSize: 16,
    lineHeight: 21,
    height: 35,
    paddingLeft: 10,
    borderRadius: 3
  },
  loginHeader: {
    fontSize: 33,
    textAlign: "center",
    color: Constants.commonColorWhite,
    padding: 30,
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  loginButton: {
    backgroundColor: Constants.buttonBackgroundColor,
    padding: 15,
    borderRadius: 3
  },
  loginButtonText: {
    color: Constants.commonColorWhite,
    textAlign: "center",
    fontWeight: "bold"
  }
});
