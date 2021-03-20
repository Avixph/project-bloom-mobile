import React from "react";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import SearchScreen from "../screens/Search";
import AboutScreen from "../screens/About";
import Header from "../components/Header";
import LightsOut from "../components/LightsOut";

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const AboutStack = createStackNavigator();

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
          height: 100,
        },
        headerRight: () => <LightsOut />,
      }}
    />
  </HomeStack.Navigator>
);

export const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name="search"
      component={SearchScreen}
      options={{
        headerTitle: (props) => <Header {...props} />,
        headerStyle: {
          backgroundColor: "#d9bbf2",
          borderBottomColor: "#d9bbf2",
          borderBottomWidth: 4,
          height: 100,
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
          borderBottomWidth: 4,
          height: 100,
        },
        headerRight: () => <LightsOut />,
      }}
    />
  </AboutStack.Navigator>
);
