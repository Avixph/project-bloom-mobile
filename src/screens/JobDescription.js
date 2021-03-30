import React from "react";
import * as WebBrowser from "expo-web-browser";
import AutoHeightWebView from "react-native-autoheight-webview";
import { useLight } from "../contexts/HandleLightsOut";

const noImage = require("../images/logos/no-image-logo.png");

import {
  Dimensions,
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
  companyLogo: {
    width: 128,
    height: 128,
    borderRadius: 20,
    marginHorizontal: "30%",
    borderColor: "#aa88c6",
    borderWidth: 1,
    marginHorizontal: "30%",
  },
  jobTitle: {
    color: "#240046",
    fontSize: 34,
    fontWeight: "bold",
    marginHorizontal: "1%",
    marginBottom: "2%",
    textAlign: "center",
  },
  jobCompany: {
    color: "#7a559a",
    fontSize: 28,
    marginHorizontal: "1%",
    textAlign: "center",
    marginBottom: "2%",
  },
  jobItems: {
    color: "#121212",
    fontSize: 18,
    display: "flex",
    justifyContent: "center",
  },
  jobItemText: {
    color: "#121212",
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "2%",
  },
  descriptionView: {
    flex: 1,
    marginTop: "1%",
    width: "100%",
    justifyContent: "center",
  },
  applyButton: {
    backgroundColor: "#240046",
    borderRadius: 10,
    width: "70%",
    height: "7%",
    justifyContent: "center",
    marginHorizontal: "15%",
    marginTop: "2%",
    marginBottom: "-4%",
  },
  applyButtonText: {
    color: "#ffd085",
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
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
  companyLogo: {
    width: 128,
    height: 128,
    borderRadius: 20,
    borderColor: "#7a559a",
    borderWidth: 1,
    marginHorizontal: "30%",
  },
  jobTitle: {
    color: "#240046",
    fontSize: 34,
    fontWeight: "bold",
    marginHorizontal: "1%",
    marginBottom: "2%",
    textAlign: "center",
  },
  jobCompany: {
    color: "#7a559a",
    fontSize: 28,
    marginHorizontal: "1%",
    marginBottom: "2%",
    textAlign: "center",
  },
  jobItems: {
    color: "#121212",
    fontSize: 20,
    display: "flex",
    justifyContent: "center",
  },
  jobItemText: {
    color: "#121212",
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "2%",
  },
  descriptionView: {
    flex: 1,
    marginTop: "1%",
    width: "100%",
    fontSize: 100,
    justifyContent: "center",
  },
  applyButton: {
    backgroundColor: "#ffd085",
    borderRadius: 10,
    width: "70%",
    height: "7%",
    justifyContent: "center",
    marginHorizontal: "15%",
    marginTop: "2%",
    marginBottom: "-4%",
  },
  applyButtonText: {
    color: "#240046",
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
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
    <SafeAreaView
      style={lightState ? stylesDark.container : stylesLight.container}
    >
      <StatusBar barStyle={lightDarkStatusColor} />

      <View
        style={
          lightState
            ? stylesDark.jobDescriptionParent
            : stylesLight.jobDescriptionParent
        }
      >
        <Image
          source={companyLogo}
          style={lightState ? stylesDark.companyLogo : stylesLight.companyLogo}
        />
        <Text style={lightState ? stylesDark.jobTitle : stylesLight.jobTitle}>
          {params.title}
        </Text>
        <Text
          style={lightState ? stylesDark.jobCompany : stylesLight.jobCompany}
        >
          {params.company}
        </Text>

        <View style={lightState ? stylesDark.jobItems : stylesLight.jobItems}>
          <Text
            style={
              lightState ? stylesDark.jobItemText : stylesLight.jobItemText
            }
          >
            Category: {params.catergory}
          </Text>
          <Text
            style={
              lightState ? stylesDark.jobItemText : stylesLight.jobItemText
            }
          >
            Hiring: {params.requirements}
          </Text>
          <Text
            style={
              lightState ? stylesDark.jobItemText : stylesLight.jobItemText
            }
          >
            Job Hours: {params.hours}
          </Text>
        </View>
        <AutoHeightWebView
          originWhitelist={["*"]}
          source={{ html: `${params.description}` }}
          style={
            lightState
              ? stylesDark.descriptionView
              : stylesLight.descriptionView
          }
          customStyle={`* {font-size: 20px; font-family: 'Roboto';}`}
          scalesPageToFit={true}
          viewportContent={"width=device-width, user-scalable=no"}
          showsVerticalScrollIndicator={true}
        />

        <TouchableOpacity
          onPress={openLink}
          style={lightState ? stylesDark.applyButton : stylesLight.applyButton}
        >
          <Text
            style={
              lightState
                ? stylesDark.applyButtonText
                : stylesLight.applyButtonText
            }
          >
            Apply
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
