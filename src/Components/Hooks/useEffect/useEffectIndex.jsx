import React from "react";
import UseEffectBasic from "./useEffect-Basic";
import FetchAPI from "./useEffect-FetchAPI";
import CocktailAPIFetch from "./useEffect-CocktailAPI-Fetch";
//import LocalAPI from './useEffect-LocalAPI';

const UseEffectIndex = () => {
  return (
    <div>
      {/* <LocalAPI /> */}
      <UseEffectBasic />s
      <FetchAPI />
      <CocktailAPIFetch />
    </div>
  );
};

export default UseEffectIndex;
