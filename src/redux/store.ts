import {createStore, applyMiddleware} from 'redux'
import languageReducer from './language/languageReducer';
import recommendProductsReducer from './recommendProducts/recommendProductsReducer';
import thunk from "redux-thunk"
import { actionLog } from './middlewares/actionLog';
import { productDetailSlice } from "./productDetail/slice"
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer ,
  productDetail: productDetailSlice.reducer
})

// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(actionLog), //do not overwrite thunk, it is default
  devTools: true // enable redux devtools in browserz
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch  

export default store