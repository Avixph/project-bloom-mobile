import React, { useState, useEffect, useMemo } from "react";
import LandingContext from "./context/LandingContext";
import RootStackScreen from "./navigations/RootStack";
import Loading from "./components/Loading";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const [userToken, setUserToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const landingContext = useMemo(() => {
    return {
      landing: () => {
        setLoading(false);
        setUserToken("go");
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <LandingContext.Provider value={landingContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </LandingContext.Provider>
  );
}
