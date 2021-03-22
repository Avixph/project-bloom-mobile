import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  StatusBar,
} from "react-native";
import RandomJobList from "../components/RandomJobList";

const homeBannerLight = require("../images/design_elements/project-bloom-home-banner-light.png");

const homeBannerDark = require("../images/design_elements/project-bloom-home-banner-dark.png");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
    paddingTop: StatusBar.currentHeight,
  },
  // separator: {
  //   marginVertical: 8,
  //   borderBottomColor: "#737373",
  //   borderBottomWidth: StyleSheet.hairlineWidth,
  // },
  scrollView: {
    backgroundColor: "pink",
    marginTop: -25,
    width: "99.53%",
  },
  bannerImage: {
    flex: 1,
    marginHorizontal: 40,
    marginTop: -100,
    width: "80%",
  },
});

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View></View>
        <Text>Home View</Text>
        <Image
          source={homeBannerLight}
          resizeMode="contain"
          style={styles.bannerImage}
        />
        <RandomJobList />
        <Text>Welcome</Text>
        <Text>Welcome</Text>
        <Text>Welcome</Text>
        <Text>Welcome</Text>
        <Text>Welcome</Text>
        <Text>Welcome</Text>
        <Text>Welcome</Text>
        <Text>Welcome</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
