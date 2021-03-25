import React from "react";
import * as WebBrowser from "expo-web-browser";
import { WebView } from "react-native-webview";

const noImage = require("../images/logos/no-image-logo.png");

import {
  StyleSheet,
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

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={companyLogo} style={styles.companyLogo} />
        <Text>{params.title}</Text>
        <Text>{params.company}</Text>
        <View>
          <Text>Category: {params.catergory}</Text>
          <Text>Hiring: {params.requirements}</Text>
          <Text>Job Hours: {params.hours}</Text>
        </View>
        <ScrollView style={styles.scrollView}>
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
