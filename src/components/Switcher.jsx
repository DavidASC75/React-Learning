import React, { Component, useState } from 'react';
import Pagelayout from './Pagelayout';
import OldnNew from './OldnNew';
import {TestingComponent} from './TestingComponent';
import FrontPageLayout from './FrontPageLayout';

const Switcher = () => {
  const [switcher, setSwitcher] = useState(3);

  const switchScreens = () => {
    switch (switcher) {
      case 0:
        return <Pagelayout />;
     
        case 1:
        return    <OldnNew />;
        case 2:
          return <TestingComponent />;
        case 3:
          return <FrontPageLayout/>;

  
    }
  };

  return <>{switchScreens()}</>;
};

export default Switcher;
