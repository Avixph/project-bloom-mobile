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

const styles = StyleSheet.create({
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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={lightDarkStatusColor} />
      <View style={styles.jobDescriptionParent}>
        <Image source={companyLogo} style={styles.companyLogo} />
        <Text>{params.title}</Text>
        <Text>{params.company}</Text>
        <View>
          <Text>Category: {params.catergory}</Text>
          <Text>Hiring: {params.requirements}</Text>
          <Text>Job Hours: {params.hours}</Text>
        </View>

        <WebView
          originWhitelist={["*"]}
          source={{ html: `${params.description}` }}
          style={styles.descriptionView}
          textZoom={100}
        />
        <TouchableOpacity onPress={openLink}>
          <Text>Apply</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
