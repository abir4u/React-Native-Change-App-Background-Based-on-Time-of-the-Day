// @flow

import * as React from "react";
import { View, Image } from "react-native";
import styles from "./BackgroundStyle";

const Images = {
  backgroundLoginDay: require("./LoginDay.jpg"),
  backgroundLoginNight: require("./LoginNight.jpg"),
  backgroundSecuredDay: require("./SecuredDay.jpg"),
  backgroundSecuredNight: require("./SecuredNight.jpg")
};

export default function Background(props: { look: "Login" | "Secured" }) {
  let backgroundImage;

  const time = new Date().getHours();

  if (props.look === "Secured") {
    backgroundImage =
      time >= 6 && time < 18
        ? Images.backgroundSecuredDay
        : Images.backgroundSecuredNight;
  } else {
    backgroundImage =
      time >= 6 && time < 18
        ? Images.backgroundLoginDay
        : Images.backgroundLoginNight;
  }

  return (
    <View style={styles.backgroundView}>
      <Image source={backgroundImage} style={styles.backgroundImage} />
    </View>
  );
}

Background.defaultProps = {
  look: "Login"
};
