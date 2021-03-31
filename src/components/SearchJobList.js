import React, { useState } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, SafeAreaView, View, ScrollView, TouchableOpacity, Text } from "react-native";
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

    width: '95%',
  },
  loadMoreButton: {
    marginBottom: 200,
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

    width: '95%',
  },
  loadMoreButton: {
  }

});

export default function SearchJobList({ navigate }) {
  const lightState = useLight();

  const jobsRequest = useSelector((state) => state.searches.searchJobs);

  const [nextJobPosts, setNextJobPosts] = useState(5);

  const handleLoadMore = () => {
    setNextJobPosts(nextJobPosts + 5);
  };

  const renderSearchList = () => {  
      return jobsRequest.slice(0, nextJobPosts).map((jobInfo, index) => {
        return <JobPost {...jobInfo} navigate={navigate} key={index} />;
      });
  };

  const messageLoadMore = jobsRequest.length === 0 ? <Text>Complete search field.</Text> :  <Text>Load More</Text>

  return (
    <SafeAreaView
      style={lightState ? stylesDark.container : stylesLight.container}
    >
      <View>
        <ScrollView
          style={lightState ? stylesDark.scrollView : stylesLight.scrollView}
        >
          <View>{renderSearchList()}</View>
          <TouchableOpacity onPress={handleLoadMore} style={lightState ? stylesDark.loadMoreButton : stylesLight.loadMoreButton}>
            { messageLoadMore}
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
