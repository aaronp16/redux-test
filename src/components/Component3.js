import React from 'react'
import { useSelector } from 'react-redux';
import CounterComponent from "./CounterComponent"

const Component3 = () => {
  const banana = useSelector((state) => state.banana.value);
  return (
    <>
      {banana}
      <CounterComponent />
    </>
  )
}

export default Component3