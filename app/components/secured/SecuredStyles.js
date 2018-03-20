import { StyleSheet } from "react-native";
import Constants from "../../utilities/Constants";

export default StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  securedHeaderPanel: {
    padding: 15
  },
  securedHeaderText: {
    fontSize: 27,
    color: Constants.commonColorWhite,
    textAlign: "center"
  },
  logoutButton: {
    backgroundColor: Constants.buttonBackgroundColor,
    padding: 15,
    borderRadius: 3
  },
  logoutButtonText: {
    color: Constants.commonColorWhite,
    textAlign: "center",
    fontWeight: "bold"
  },
  securedScroll: {
    padding: 20
  },
  separatorView: {
    margin: 20
  }
});
