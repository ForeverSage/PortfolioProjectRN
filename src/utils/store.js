import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import appReducer from 'slices/app.slice';

const rootReducer = combineReducers({
  app: appReducer,

})

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: false,
  immutableCheck: false,
})

const store = configureStore({
  reducer: rootReducer,
  
  middleware: __DEV__ ? defaultMiddleware.concat(logger) : defaultMiddleware,
})

export default store;