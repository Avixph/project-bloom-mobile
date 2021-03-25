import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LandingStackScreen as Landing } from "./ScreenStack";
import BottomTab from "./BottomTab";
import Loading from "../components/Loading";
// import Header from "../components/Header";
// import LightsOut from "../components/LightsOut";

import { useUser } from "../HandleScreen"; //this is how we're getting the value from the UserContext (object context) which has the user state of null


const RootStack = createStackNavigator();


export default function RootStackScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000)
    }
  , [])

  //the RootStack child component is getting the null value from UserContext context component
  const user = useUser();
  console.log(user)

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
          name="MainApp"
          component={BottomTab}
          options={{
            animationEnabled: false,
            headerShown: false,
          }}
        />
      ) : (
        <RootStack.Screen
          name="Enterance"
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
