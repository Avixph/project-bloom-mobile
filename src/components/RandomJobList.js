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
  bannerImage: {
    flex: 1,
    marginHorizontal: "9%",
    marginVertical: "-100%",
    width: "85%",
  },
  scrollView: {
    width: '75%',
  },
  jobTitle: {
    fontSize: 40,
    color: "#240046",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 22,
  },
  button: {
    backgroundColor: "#240046",
    borderRadius: 20,
    width: "50%",
    marginHorizontal: "25%",
  },
  reloadText: {
    fontSize: 18,
    color: "#fad085",
    textAlign: "center",
    padding: 20,
  },
  jobList: {
    marginTop: 30,
  }
});

const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#250246",
    paddingTop: StatusBar.currentHeight,
  },
  bannerImage: {
    flex: 1,
    marginHorizontal: "9%",
    marginVertical: "-100%",
    width: "85%",
  },
  scrollView: {
    width: '75%',
  },
  jobTitle: {
    fontSize: 40,
    color: "#e5e5e5",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 22,
  },
  button: {
    backgroundColor: "#d9bbf2",
    borderRadius: 20,
    width: "50%",
    marginHorizontal: "25%",
  },
  reloadText: {
    fontSize: 18,
    color: "#121212",
    textAlign: "center",
    padding: 20,
  },
  jobList: {
    marginTop: 30,
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
        <Image
          source={lightState ? homeBannerDark : homeBannerLight}
          resizeMode="contain"
          style={lightState ? stylesDark.bannerImage : stylesLight.bannerImage}
        />
        <Text style={lightState ? stylesDark.jobTitle : stylesLight.jobTitle}>Remote Jobs Available</Text>
        <TouchableOpacity
          style={lightState ? stylesDark.button : stylesLight.button}
          onPress={handleReload}
        >
          <Text style={lightState ? stylesDark.reloadText : stylesLight.reloadText}>reload</Text>
        </TouchableOpacity>
        <View style={lightState ? stylesDark.jobList : stylesLight.jobList}>{renderRandomList()}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
