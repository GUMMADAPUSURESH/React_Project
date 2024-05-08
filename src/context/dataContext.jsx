import React from "react";

const data = {
  id: "1",
  Text: "Coming from Context",
};

export const DataContext = React.createContext();

export const DataContextProvider = ({ children }) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
