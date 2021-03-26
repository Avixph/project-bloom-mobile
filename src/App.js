import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import store from "./redux/store";
import RootStackScreen from "./navigations/RootStack";
import { UserProvider } from "./contexts/HandleScreen";
import { LightProvider } from

export default function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
      </UserProvider>
    </Provider>
  );
}


//UserProvider has all the Provider each with a value being fed in the object context. This Providers are being given to the RootStackScreen component. The user value is being fed into the UserContext object context, and the handle function is being fed into the UpdateContext object context
