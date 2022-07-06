import React from 'react';
import { useDispatch } from 'react-redux'

import { decrement, increment } from '../reducers/counter';

const ButtonComponent = () => {
  const dispatch = useDispatch()
  return (
    <button onClick={() => {
      dispatch(increment())
    
    }}>Click me!</button>
  )
}

export default ButtonComponent;
