import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  StatusBar,
} from "react-native";
import { fetchRandom } from "../redux/randomJobSlice";
import JobPost from "./JobPost";
import { useLight } from "../contexts/HandleLightsOut";

const homeBannerLight = require("../images/design_elements/project-bloom-home-banner-light.png");

const homeBannerDark = require("../images/design_elements/project-bloom-home-banner-dark.png");

const stylesLight = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    // marginTop: -25,
    width: 385,
  },
  bannerImage: {
    flex: 1,
    marginHorizontal: 40,
    marginTop: -200,
    marginBottom: -200,
    width: "80%",
  },
});

const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#250246",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    // marginTop: -25,
    width: 385,
  },
  bannerImage: {
    flex: 1,
    marginHorizontal: 40,
    marginTop: -200,
    marginBottom: -200,
    width: "80%",
  },
});

export default function RandomJobList({ navigate }) {
  const RandomJobRequest = useSelector((state) => {
    return state.randoms.randomJobs;
  });

  const lightState = useLight();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandom());
  }, [dispatch]);

  const handleReload = () => {
    dispatch(fetchRandom());
  };

  const renderRandomList = () => {
    return RandomJobRequest.map((jobInfo, index) => {
      return <JobPost {...jobInfo} navigate={navigate} key={index} />;
    });
  };

  return (
    <SafeAreaView
      style={lightState ? stylesDark.container : stylesLight.container}
    >
      <ScrollView
        style={lightState ? stylesDark.scrollView : stylesLight.scrollView}
      >
        <View></View>
        <Text>Welcome</Text>
        <Image
          source={lightState ? homeBannerDark : homeBannerLight}
          resizeMode="contain"
          style={lightState ? stylesDark.bannerImage : stylesLight.bannerImage}
        />
        <Text>Remote Jobs available</Text>
        <TouchableOpacity
          style={lightState ? stylesDark.button : stylesLight.button}
          onPress={handleReload}
        >
          <Text>reload</Text>
        </TouchableOpacity>
        <View>{renderRandomList()}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
