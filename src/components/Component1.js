import React from "react";
import { useSelector } from 'react-redux';

import Component2 from "./Component2"

const Component1 = () => {
  const banana = useSelector((state) => state.banana.value);
    return (
      <>
        {banana}
        <Component2 />
      </>
    )
}

export default Component1