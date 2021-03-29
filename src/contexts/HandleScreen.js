import React, { useState, useContext, createContext } from "react";

//We're creating two object contexts;
const UserContext = createContext();
const UserUpdate = createContext();

//this function will be called in children components so they have access to the context object called 'UserContext' to get the value stored in there.
export const useUser = () => {
  return useContext(UserContext);
};

//this function will be called in children components so they have access to the context object called 'UserUpdate' to get the value stored in there.
export const useUpdate = () => {
  return useContext(UserUpdate);
};

export const UserProvider = (props) => {
  
  console.log(props.children)

  const [user, setUser] = useState(null);
  const handleUser = () => setUser({});

  //This function will return nested Providers one for each object contexts (UserContext & UserUpdate). Remember Provider will allow parent component to add values into the object contexts so that the children components can have access to these values when these values become available in the object context. 
  //UserContext object context will have the user state value of null
  //UserUpdate object context will have the handleUser function
  return (
    <UserContext.Provider value={user}>
      {/* the props.children is the RootStackScreen component which is coming from the App.js  */}
      <UserUpdate.Provider value={handleUser}>{props.children}</UserUpdate.Provider> 
    </UserContext.Provider>
  );
};



