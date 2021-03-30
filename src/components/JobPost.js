import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";
import { useLight } from "../contexts/HandleLightsOut";

const noImage = require("../images/logos/no-image-logo.png");

const stylesLight = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffd085",
    borderRadius: 20,
    marginHorizontal: "8%",
    marginBottom: "10%",
    padding: "20%",
    height: 280,
  },
  jobTitle: {
    color: "#240046",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    marginBottom: "3%",
    marginTop: "3%",
  },
  companyName: {
    color: "#7a559a",
    textAlign: "center",
    fontSize: 20,
  },
  companyLogo: {
    width: 128,
    height: 128,
    borderRadius: 20,
    marginHorizontal: "30%",
    borderColor: "#aa88c6",
    borderWidth: 1,
    marginHorizontal: "30%",
  },
});

const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e5e5e5",
    borderRadius: 20,
    marginHorizontal: "8%",
    marginBottom: "10%",
    padding: "20%",
    height: 280
  },
  jobTitle: {
    color: "#240046",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    marginBottom: "3%",
    marginTop: "3%",
  },
  companyName: {
    color: "#7a559a",
    textAlign: "center",
    fontSize: 20,
  },
  companyLogo: {
    width: 128,
    height: 128,
    borderRadius: 20,
    borderColor: "#7a559a",
    borderWidth: 1,
    marginHorizontal: "30%",
  },
});

export default function JobPost(props) {
  const lightState = useLight();

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
    <SafeAreaView
      style={lightState ? stylesDark.container : stylesLight.container}
    >
      <TouchableOpacity onPress={showDetails}>
        <Image
          source={companyLogo}
          style={lightState ? stylesDark.companyLogo : stylesLight.companyLogo}
        />
        <Text numberOfLines={1} style={lightState ? stylesDark.jobTitle : stylesLight.jobTitle}>
          {props.title}
        </Text>
        <Text style={lightState ? stylesDark.companyName : stylesLight.companyName}>
          {props.company_name}
        </Text>
        {/* <Text style={lightState ? stylesDark.text : stylesLight.text}>
          {props.category}
        </Text> */}
      </TouchableOpacity>
    </SafeAreaView>
  );
}
