import React from 'react'
import { useSelector } from 'react-redux';
import ButtonComponent from "./ButtonComponent"
import Component3 from "./Component3"

const Component2 = () => {
  const banana = useSelector((state) => state.banana.value);
  return (
    <>
      {banana}
      <ButtonComponent />
      <Component3 />
    </>
  )
}

export default Component2