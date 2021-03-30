import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  HomeStackScreen as Home,
  SearchStackScreen as Search,
  AboutStackScreen as About,
} from "./ScreenStack.js";
import LightsOut from "../components/LightsOut";
import { useLight } from "../contexts/HandleLightsOut";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  const lightState = useLight();
  const lightDarkColor = lightState ? "#7a559a" : "#aa88c6";
  const lightDarkActiveFontColor = lightState ? "#e5e5e5" : "#ffd085";

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: lightDarkActiveFontColor,
        inactiveTintColor: "#121212",
        style: {
          backgroundColor: lightDarkColor,
          borderColor: "#20232a",
          fontFamily: "Roboto",
          borderTopColor: lightDarkActiveFontColor,
          borderTopWidth: 1.45,
        },
      }}
    >
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
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
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
    </Tab.Navigator>
  );
}
