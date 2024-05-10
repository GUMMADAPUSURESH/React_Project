import React from "react";
import CustomHookOne from "./CustomHook-Example-1";
import CustomHookCounterOne from "./CustomHook-Counter-1";
import CustomHookCounterTwo from "./CustomHook-Counter-2";
import FetchAPIOne from "./FetchAPIOne";
import FetchAPITwo from "./FetchAPITwo";

const CustomHookIndex = () => {
  return (
    <div>
      <CustomHookOne />
      <hr/>
      <CustomHookCounterOne />
      <hr/>
      <CustomHookCounterTwo />
      <hr/>
      <FetchAPIOne />
      <hr/>
      <FetchAPITwo />
    </div>
  );
};

export default CustomHookIndex;
