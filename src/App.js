import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import LandingScreen from "./screens/Landing";
import {
  HomeStackScreen as Home,
  SearchStackScreen as Search,
  AboutStackScreen as About,
} from "./stacks/ScreenStacks.js";
// import JobDescriptionScreen from "./screens/JobDescription";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#ffd085",
          inactiveTintColor: "#121212",
          style: {
            backgroundColor: "#aa88c6",
            borderColor: "#20232a",
            fontFamily: "Roboto",
            borderTopColor: "#ffd085",
            borderTopWidth: 1.45,
          },
        }}
      >
        {/* <Tab.Screen
          name="Landing"
          component={LandingScreen}
        /> */}
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            headerTitle: (props) => {
              <HeaderLogo {...props} />;
            },
            tabBarLabel: "Search",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="magnify"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarLabel: "About",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="information"
                color={color}
                size={size}
              />
            ),
          }}
        />
        {/* <Tab.Screen
          name="JobDescription"
          component={JobDescriptionScreen}
         /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
