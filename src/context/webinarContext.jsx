import { createContext, useState, useContext } from "react";


//using useContext to update webinars on the home page as well as the manage page
const WebinarContext = createContext();

export const useWebinar = () => useContext(WebinarContext);

export const WebinarProvider = ({ children }) => {
  const [webinars, setWebinars] = useState([
    { id: 1, title: "State Management in React", time: "5:00 PM" },
  ]);

  return (
    <WebinarContext.Provider value={{ webinars, setWebinars }}>
      {children}
    </WebinarContext.Provider>
  );
};