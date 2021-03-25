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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View></View>
        <Text>Welcome</Text>
        <Image
          source={homeBannerLight}
          resizeMode="contain"
          style={styles.bannerImage}
        />
        <Text>Remote Jobs available</Text>
        <TouchableOpacity style={styles.button} onPress={handleReload}>
          <Text>reload</Text>
        </TouchableOpacity>
        <View>{renderRandomList()}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
