import React, { createContext, useReducer } from "react";
import randomJobsReducer from "../reducers/RandomJobsReducer";
import { fetchJobCollection } from "../services/fetchJobs";

export const RandomJobContext = createContext();
function RandomJobProvider(props) {
  const [randomJobs, dispatch] = useReducer(randomJobsReducer, []);

  const fetchRandom = async () => {
    const data = await fetchJobCollection();

    const randomData = [];
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * data.length);
      randomData.push(data[randomIndex]);
      data.splice(randomIndex, 1);
    }

    return randomData;
  };

  dispatch(randomData);

  return (
    <RandomJobContext.Provider value={{ randomJobs, dispatch }}>
      {props.children}
    </RandomJobContext.Provider>
  );
}
