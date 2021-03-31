import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, SafeAreaView, View, ScrollView, TouchableOpacity, Text, Image } from "react-native";
import JobPost from "./JobPost";
import { useLight } from "../contexts/HandleLightsOut";

const lightLoadingSpinner = require("../images/loading/spinner.gif");
const darkLoadingSpinner = require("../images/loading/darkSpinner.gif");

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
  emptyFieldMessage: {

  },
  scrollView: {
    width: '75%',
  },
  spinner: {
    flex: 1,
    marginTop: 20,
    width: 200,
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
  emptyFieldMessage: {

  },
  scrollView: {
    width: '75%',
  },
  spinner: {
    flex: 1,
    marginTop: 20,
    width: 200,
  }
});

export default function SearchJobList({ navigate }) {
  const lightState = useLight();

  const jobsRequest = useSelector((state) => state.searches.searchJobs);
  const status = useSelector((state) => state.searches.status);

  const renderSearchList = () => {
    if (status === "loading") {
      return <Image  
      source = { lightState? darkLoadingSpinner: lightLoadingSpinner }
      style={lightState ? stylesDark.spinner : stylesLight.spinner}
      resizeMode="contain"
      />
    } else if (jobsRequest[0] === "Fill in search field") {
      return <Text style={lightState ? darkLoadingSpinner : lightLoadingSpinner}>Complete search field.</Text>
    } else if (status === "success") {
      return jobsRequest.map((jobInfo, index) => {
        return <JobPost {...jobInfo} navigate={navigate} key={index} />;
      });
    } else {
      <Text>Error: Please Try Again!</Text>;
    }
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
