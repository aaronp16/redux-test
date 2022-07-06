import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter';
import bananaReducer from './banana';

export default configureStore({
  reducer: {
    counter: counterReducer,
    banana: bananaReducer,
  },
})