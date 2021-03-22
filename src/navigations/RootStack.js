import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LandingStackScreen as Landing } from "./ScreenStack";
import BottomTab from "./BottomTab";

const RootStack = createStackNavigator();

export const RootStackScreen = ({ userToken }) => {
  <RootStack.Navigator>
    {userToken ? (
      <RootStack.Screen
        name="mainApp"
        component={BottomTab}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="enterance"
        component={Landing}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>;
};
