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
  companyLogo: {
    width: 100,
    height: 100,
  },
  scrollView: {
    backgroundColor: "pink",
    // marginTop: -25,
    width: 385,
  },
});

const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#250246",
  },
  companyLogo: {
    width: 100,
    height: 100,
  },
  scrollView: {
    backgroundColor: "pink",
    // marginTop: -25,
    width: 385,
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
        <Text>{params.title}</Text>
        <Text>{params.company}</Text>
        <View>
          <Text>Category: {params.catergory}</Text>
          <Text>Hiring: {params.requirements}</Text>
          <Text>Job Hours: {params.hours}</Text>
        </View>
        <ScrollView style={lightState ? stylesDark.scrollView : stylesLight.scrollView}>
          <WebView
            originWhitelist={["*"]}
            source={{ html: `${params.description}` }}
          />
        </ScrollView>

        <TouchableOpacity onPress={openLink}>
          <Text>Apply</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
