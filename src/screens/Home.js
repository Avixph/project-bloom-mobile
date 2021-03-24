import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
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

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList>
        <View></View>
        <Text>Home View</Text>
        <Image
          source={homeBannerLight}
          resizeMode="contain"
          style={styles.bannerImage}
        />
        <RandomJobList />
      </FlatList>
      <ScrollView style={styles.scrollView}>
        <View></View>

        <Image
          source={homeBannerLight}
          resizeMode="contain"
          style={styles.bannerImage}
        />
        <RandomJobList navigation={ navigation } />
      </ScrollView>
    </SafeAreaView>
  );
}
