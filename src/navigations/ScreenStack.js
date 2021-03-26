import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "../screens/Landing";
import HomeScreen from "../screens/Home";
import SearchScreen from "../screens/Search";
import AboutScreen from "../screens/About";
import JobDescriptionScreen from "../screens/JobDescription";
import Header from "../components/Header";
import LightsOut from "../components/LightsOut";
import { useLight } from "../contexts/HandleLightsOut";

const LandingStack = createStackNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const AboutStack = createStackNavigator();



export const LandingStackScreen = () => {
 
  const lightState = useLight();

  const lightDarkColor = lightState ? "#250246" : "#d9bbf2";
  
  return  (<LandingStack.Navigator>
    <LandingStack.Screen
      name="Landing"
      component={LandingScreen}
      options={{
        headerTitle: (props) => <Header {...props} />,
        headerStyle: {
          backgroundColor: lightDarkColor,
          borderBottomColor: lightDarkColor,
          borderBottomWidth: 1.5,
        },
        headerRight: () => <LightsOut />,
      }}
    />
  </LandingStack.Navigator>
  )
};

export const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerTitle: (props) => <Header {...props} />,
        headerStyle: {
          backgroundColor: "#d9bbf2",
          borderBottomColor: "#d9bbf2",
          borderBottomWidth: 1.5,
        },
        headerRight: () => <LightsOut />,
      }}
    />
    <HomeStack.Screen
      name="Details"
      component={JobDescriptionScreen}
      options={{
        // tabBarVisible: false,
        headerStyle: {
          backgroundColor: "#d9bbf2",
          borderBottomColor: "#d9bbf2",
          borderBottomWidth: 1.5,
        },
        headerRight: () => <LightsOut />,
      }}
    />
  </HomeStack.Navigator>
);

export const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name="Search"
      component={SearchScreen}
      options={{
        headerTitle: (props) => <Header {...props} />,
        headerStyle: {
          backgroundColor: "#d9bbf2",
          borderBottomColor: "#d9bbf2",
          borderBottomWidth: 1.5,
        },
        headerRight: () => <LightsOut />,
      }}
    />
    <SearchStack.Screen
      name="Details"
      component={JobDescriptionScreen}
      options={{
        // tabBarVisible: false,
        headerStyle: {
          backgroundColor: "#d9bbf2",
          borderBottomColor: "#d9bbf2",
          borderBottomWidth: 1.5,
        },
        headerRight: () => <LightsOut />,
      }}
    />
  </SearchStack.Navigator>
);

export const AboutStackScreen = () => (
  <AboutStack.Navigator>
    <AboutStack.Screen
      name="About"
      component={AboutScreen}
      options={{
        headerTitle: () => <Header />,
        headerStyle: {
          backgroundColor: "#d9bbf2",
          borderBottomColor: "#d9bbf2",
          borderBottomWidth: 1.5,
        },
        headerRight: () => <LightsOut />,
      }}
    />
  </AboutStack.Navigator>
);
