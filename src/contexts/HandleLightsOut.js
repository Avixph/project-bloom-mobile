import React, { useState, useContext, createContext } from "react";




const LightContext = createContext();
const UpdateLight = createContext();

export const useLight = () => {
  return useContext(LightContext);
}

export const useUpdateLight = () => {
  return useContext(UpdateLight);
}


export default function LightProvider() {

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
      <UpdateLight value={handleLight}>

      </UpdateLight>
    </LightContext.Provider>
  )
}
