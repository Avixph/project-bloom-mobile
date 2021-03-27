import React, { useState, useContext, createContext } from "react";




const LightContext = createContext();
const UpdateLight = createContext();

export const useLight = () => {
  return useContext(LightContext);
}

export const useUpdateLight = () => {
  return useContext(UpdateLight);
}


export const LightProvider = (props) => {

  const [light, setLight] = useState(false);
  const handleLight = () => {
    if (light === false) {
      setLight(true)
    } else {
      setLight(false)
    }
  }


  return (
    <LightContext.Provider value={light}>
      <UpdateLight.Provider value={handleLight}>
        {props.children}
      </UpdateLight.Provider>
    </LightContext.Provider>
  )
}
