import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { useUpdate } from "../contexts/HandleScreen"; //Here we have the two functions that will allow us to get the values from both object contexts (UserContext has the use state of null) & (UserUpdate has the handleUser function which will update the use state from null -> {})
import { useLight } from "../contexts/HandleLightsOut";

const landingBannerLight = require("../images/design_elements/project-bloom-landing-banner-light.png");
const landingBannerDark = require("../images/design_elements/project-bloom-landing-banner-dark.png");

const stylesLight = StyleSheet.create({
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
    color: "#240046",
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

const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#250246",
  },
  bannerImage: {
    flex: 1,
    marginHorizontal: 40,
    marginTop: "10%",
    width: "95%",
  },
  slogan: {
    color: "#e5e5e5",
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
    backgroundColor: "#ffd085",
    alignItems: "center",
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 40,
    fontWeight: "500",
    color: "#240046",
    textAlign: "center",
    marginVertical: "5%",
  },
});

export default function Landing() {
  
  //the landing child component is getting the handleUser function from UserUpdate (object context)
  const updateUser = useUpdate();

  const lightState = useLight();
  console.log(lightState);

  return (
    <SafeAreaView style={lightState ? stylesDark.container : stylesLight.container}>
      <Image
        source={lightState ? landingBannerDark : landingBannerLight}
        resizeMode="contain"
        style={lightState ? stylesDark.bannerImage : stylesLight.bannerImage}
      />
      <Text style={lightState ? stylesDark.slogan : stylesLight.slogan}>
        “Helping you blossom into your next career”
      </Text>

      <TouchableOpacity
        title="Enter"
        style={lightState ? stylesDark.button : stylesLight.button}
        //when button is pressed, the handleUser function will change the use state from null -> {}. Go to RootStack.js to see what happens to the use state which is being access from UserContext
        onPress={updateUser}
      >
        <Text style={lightState ? stylesDark.buttonText : stylesLight.buttonText}>Enter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
