import React, { useEffect, useState } from "react";
import './App.css';
import UseContextParent from "./Components/Hooks/useContext/useContext-parent";
import UseCallBackExample from "./Components/Hooks/useCallback & React.memo/useCallback&React.memoExample";
import Header from "./Components/Header";
import UseStateIndex from "./Components/Hooks/useState/useStateIndex";
import UseEffectIndex from "./Components/Hooks/useEffect/useEffectIndex";
import CustomHookIndex from "./Components/Hooks/Custom Hooks/CustomHookIndex";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import UseReducerExample1 from "./Components/Hooks/useReducer/useReducer-Example-1";
import Success from "./Components/React Router/Success";
import NotFound from "./Components/React Router/NotFound";
import NestedRouteIndex from "./Components/React Router/NestedRouteIndex";
import NestedRoute1 from "./Components/React Router/NestedRoute1";
import NestedRoute2 from "./Components/React Router/NestedRoute2";
import LifeCycleDemo from "./Components/LifeCycleDemo/LifeCycleDemo";
import DynamicRoutesUsers from "./Components/React Router/DynamicRoutesUsers";
import DynamicRoutesUserDetails from "./Components/React Router/DynamicRoutesUserDetails";

const PrintTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
    }, 1000); // Update time every second

    // Clean up function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <React.Fragment>
      <h3 className="time">{time}</h3>
    </React.Fragment>
  );

};

function App() {
  return (
    <div className="App">
      <Header />
      <PrintTime />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* useState Examples */}
        <Route path='/useState' element={<UseStateIndex />} />

        {/* useEffect Examples */}
        <Route path='/useEffect' element={<UseEffectIndex />} />
        
        {/* useContext Examples */}
        <Route path='/useContext' element={<UseContextParent />} />

        {/* useReducer Examples */}
        <Route path='/useReducer' element={<UseReducerExample1 />} />
        
        {/* useCallback & React.memo Examples */}
        <Route path='/useCallback' element={<UseCallBackExample />} />
        
        {/* Custom Hook Examples */}
        <Route path='/customHooks' element={<CustomHookIndex />} />

        {/* React Router Examples */}
        <Route path='/success' element={<Success />} />

        <Route path='/nestedRoutes' element={<NestedRouteIndex />}>
          <Route index element={<NestedRoute1 />} />
          <Route path='1' element={<NestedRoute1 />} />
          <Route path='2' element={<NestedRoute2 />} />
        </Route>

        <Route path="/users" element={<DynamicRoutesUsers />} />
        <Route path="/users/:userID" element={<DynamicRoutesUserDetails />} />

        {/* React Life Cycle Examples */}
        <Route path='/lifecycle' element={<LifeCycleDemo />} />

        {/* Default Router */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
