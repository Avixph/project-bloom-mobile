import React from "react";

import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

const landingBannerLight = require("../images/design_elements/project-bloom-landing-banner-light.png");

const landingBannerDark = require("../images/design_elements/project-bloom-landing-banner-dark.png");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
  bannerImage: {
    flex: 1,
    marginHorizontal: 40,
    marginTop: "10%",
    width: "95%",
  },
  slogan: {
    fontSize: 40,
    fontWeight: "200",
    textAlign: "center",
    marginHorizontal: "6%",
    marginVertical: "10%",
  },
  button: {
    width: 280,
    height: 80,
    marginBottom: 30,
    backgroundColor: "#240046",
    alignItems: "center",
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 40,
    fontWeight: "500",
    color: "#ffd085",
    textAlign: "center",
    marginVertical: "5%",
  },
});

export default function Landing({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={landingBannerLight}
        resizeMode="contain"
        style={styles.bannerImage}
      />
      <Text style={styles.slogan}>
        “Helping you blossom into your next career”
      </Text>

      <TouchableOpacity
        title="Enter"
        style={styles.button}
        onPress={() => navigation.navigate("BottomTab")}
      >
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
