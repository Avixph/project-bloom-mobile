import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import JobPost from "./JobPost";
import { useLight } from "../contexts/HandleLightsOut";

const stylesLight = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
  flatList: {
    backgroundColor: "pink",
    marginTop: -25,
    width: "99.53%",
  },
  companyLogo: {
    width: 128,
    height: 128,
  },
  scrollView: {
    width: '75%',
  }
});

const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#240046",
  },
  flatList: {
    backgroundColor: "pink",
    marginTop: -25,
    width: "99.53%",
  },
  companyLogo: {
    width: 128,
    height: 128,
  },
  scrollView: {
    width: '75%',
  }
});

export default function SearchJobList({ navigate }) {
  const lightState = useLight();

  const jobsRequest = useSelector((state) => state.searches.searchJobs);

  const renderSearchList = () => {
    return jobsRequest.map((jobInfo, index) => {
      return <JobPost {...jobInfo} navigate={navigate} key={index} />;
    });
  };

  return (
    <SafeAreaView style={lightState ? stylesDark.container : stylesLight.container}>
      <View>
        <ScrollView style={lightState ? stylesDark.scrollView : stylesLight.scrollView}>
          <View>{renderSearchList()}</View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
