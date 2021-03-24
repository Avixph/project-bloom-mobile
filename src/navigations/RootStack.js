import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LandingStackScreen as Landing } from "./ScreenStack";
import BottomTab from "./BottomTab";
import Loading from "../components/Loading";
import Header from "../components/Header";
import LightsOut from "../components/LightsOut";
import { useUser, UserUpdate } from "../HandleScreen";

const RootStack = createStackNavigator();

export default function RootStackScreen() {
  const [loading, setLoading] = useState(false);
  // const [user, setUser] = useState(null);
  const user = useUser();

  return (
    <RootStack.Navigator>
      {loading ? (
        <RootStack.Screen
          name="Loading"
          component={Loading}
          options={{
            animationEnabled: false,
            headerShown: false,
          }}
        />
      ) : user ? (
        <RootStack.Screen
          name="mainApp"
          component={BottomTab}
          options={{
            animationEnabled: false,
            headerShown: false,
          }}
        />
      ) : (
        <RootStack.Screen
          name="enterance"
          component={Landing}
          options={{
            animationEnabled: false,
            headerShown: false,
          }}
        />
      )}

      {/* {userToken ? (
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
      )} */}
    </RootStack.Navigator>
  );
}
