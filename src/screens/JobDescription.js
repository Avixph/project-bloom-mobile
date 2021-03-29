import React from "react";
import * as WebBrowser from "expo-web-browser";
import { StatsBar } from "react-native";
import { WebView } from "react-native-webview";
import { useLight } from "../contexts/HandleLightsOut";

const noImage = require("../images/logos/no-image-logo.png");

import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
} from "react-native";

const stylesLight = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
  jobDescriptionParent: {
    flex: 1,
    // marginTop: "1%",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    borderRadius: 10,
    width: 360,
    backgroundColor: "#ffd085",
},

  text: {
    color: "#000000",
  },
   companyLogo: {
    width: 128,
    height: 128,
    borderRadius:20,
  },
  descriptionView: {
    flex: 1,
    marginTop: "1%",
    width: "100%",
    fontSize: 1000,
  },
});

const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#240046",
  },
  jobDescriptionParent: {
    flex: 1,
    // marginTop: "1%",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    borderRadius: 10,
    width: 360,
    backgroundColor: "#e5e5e5",
},
  text: {
    color: "#e5e5e5",
  },
   companyLogo: {
    width: 128,
    height: 128,
    borderRadius:20,
  },
  descriptionView: {
    flex: 1,
    marginTop: "1%",
    width: "100%",
    fontSize: 1000,
  },

});

export default function JobDescription({ route: { params } }) {
  const companyLogo = params.logo ? { uri: `${params.logo}` } : noImage;

  const openLink = () => {
    WebBrowser.openBrowserAsync(params.apply);
  };

  const lightState = useLight();
  const lightDarkStatusColor = lightState ? "light-content" : "default";

  return (
    <SafeAreaView style={lightState ? stylesDark.container : stylesLight.container}>
      <StatusBar barStyle={lightDarkStatusColor} />

      <View>
        <Image source={companyLogo} style={lightState ? stylesDark.companyLogo : stylesLight.companyLogo} />
        <Text style={lightState ? stylesDark.text : stylesLight.text}>{params.title}</Text>
        <Text style={lightState ? stylesDark.text : stylesLight.text}>{params.company}</Text>

        <View>
          <Text style={lightState ? stylesDark.text : stylesLight.text}>Category: {params.catergory}</Text>
          <Text style={lightState ? stylesDark.text : stylesLight.text}>Hiring: {params.requirements}</Text>
          <Text style={lightState ? stylesDark.text : stylesLight.text}>Job Hours: {params.hours}</Text>
        </View>


        <WebView
          originWhitelist={["*"]}
          source={{ html: `${params.description}` }}
          style={lightState ? stylesDark.descriptionView : stylesLight.descriptionView}
          textZoom={100}
        />
        <TouchableOpacity onPress={openLink}>
          <Text style={lightState ? stylesDark.text : stylesLight.text}>Apply</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
