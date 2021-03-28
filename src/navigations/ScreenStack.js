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

  return (
    <LandingStack.Navigator>
      <LandingStack.Screen
        name="Landing"
        component={LandingScreen}
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerStyle: {
            backgroundColor: lightDarkColor,
            borderBottomColor: lightDarkColor,
            borderBottomWidth: 0.004,
          },
          headerRight: () => <LightsOut />,
        }}
      />
    </LandingStack.Navigator>
  );
};

export const HomeStackScreen = () => {
  const lightState = useLight();
  const lightDarkColor = lightState ? "#250246" : "#d9bbf2";

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
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
      <HomeStack.Screen
        name="Details"
        component={JobDescriptionScreen}
        options={{
          // tabBarVisible: false,
          headerStyle: {
            backgroundColor: lightDarkColor,
            borderBottomColor: lightDarkColor,
            borderBottomWidth: 1.5,
          },
          headerRight: () => <LightsOut />,
        }}
      />
    </HomeStack.Navigator>
  );
};

export const SearchStackScreen = () => {
  const lightState = useLight();
  const lightDarkColor = lightState ? "#240046" : "#d9bbf2";

  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
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
      <SearchStack.Screen
        name="Details"
        component={JobDescriptionScreen}
        options={{
          // tabBarVisible: false,
          headerStyle: {
            backgroundColor: lightDarkColor,
            borderBottomColor: lightDarkColor,
            borderBottomWidth: 1.5,
          },
          headerRight: () => <LightsOut />,
        }}
      />
    </SearchStack.Navigator>
  );
};

export const AboutStackScreen = () => {
  const lightState = useLight();
  const lightDarkColor = lightState ? "#250246" : "#d9bbf2";

  return (
    <AboutStack.Navigator>
      <AboutStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerTitle: () => <Header />,
          headerStyle: {
            backgroundColor: lightDarkColor,
            borderBottomColor: lightDarkColor,
            borderBottomWidth: 1.5,
          },
          headerRight: () => <LightsOut />,
        }}
      />
    </AboutStack.Navigator>
  );
};
