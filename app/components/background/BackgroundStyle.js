// @flow

import { StyleSheet } from "react-native";
import Metrics from "../../utilities/Metrics";

export default StyleSheet.create({
  backgroundView: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: "rgba(0,0,0,0)",
    overflow: "hidden"
  },

  backgroundImage: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: Metrics.screenHeight,
    width: Metrics.screenWidth,
    position: "absolute",
    resizeMode: "repeat"
  }
});
