import React from 'react';
import CustomHookOne from './CustomHook-Example-1';
import CustomHookTwo from './CustomHook-Example-1-Test';
import CustomHookCounterOne from './CustomHook-Counter-1';
import CustomHookCounterTwo from './CustomHook-Counter-2';
import FetchAPIOne from './FetchAPIOne';
import FetchAPITwo from './FetchAPITwo';

const CustomHookIndex = () => {
  return (
    <div>
      <CustomHookOne />
      <CustomHookTwo />
      <CustomHookCounterOne />
      <CustomHookCounterTwo />
      <FetchAPIOne />
      <FetchAPITwo />
    </div>
  )
}

export default CustomHookIndex
