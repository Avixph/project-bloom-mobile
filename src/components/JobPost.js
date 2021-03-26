import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";

const noImage = require("../images/logos/no-image-logo.png");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
  companyLogo: {
    width: 128,
    height: 128,
  },
});

export default function JobPost(props) {
  const companyLogo = props.company_logo_url
    ? { uri: `${props.company_logo_url}` }
    : noImage;

  const showDetails = () => {
    props.navigate("Details", {
      logo: props.company_logo_url,
      title: props.title,
      company: props.company_name,
      catergory: props.category,
      salary: props.salary,
      requirements: props.candidate_required_location,
      hours: props.job_type,
      description: props.description,
      apply: props.url,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={showDetails}>
        <Image source={companyLogo} style={styles.companyLogo} />
        <Text>{props.title}</Text>
        <Text>{props.company_name}</Text>
        <Text>{props.category}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
