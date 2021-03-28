import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import store from "./redux/store";
import RootStackScreen from "./navigations/RootStack";
import { UserProvider } from "./context/HandleScreen";

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
