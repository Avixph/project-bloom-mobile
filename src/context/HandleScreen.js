import React, { useState, useContext, createContext } from "react";
import { StyleSheet, Text, View } from "react-native";

const UserContext = createContext();
const UserUpdate = createContext();
export const useUser = () => {
  return useContext(UserContext);
};
export const useUpdate = () => {
  return useContext(UserUpdate);
};
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const handleUser = () => setUser({});
  return (
    <UserContext.Provider value={user}>
      <UserUpdate.Provider value={handleUser}>{children}</UserUpdate.Provider>
    </UserContext.Provider>
  );
};
