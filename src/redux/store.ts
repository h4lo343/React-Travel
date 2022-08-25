import {createStore, applyMiddleware} from 'redux'
import languageReducer from './language/languageReducer';
import recommendProductsReducer from './recommendProducts/recommendProductsReducer';
import thunk from "redux-thunk"
import { actionLog } from './middlewares/actionLog';
import { productDetailSlice } from "./productDetail/slice"
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {persistStore, persistReducer} from "redux-persist"
import storage  from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["language"] //只保存reducer中language reduer
                          //也有白名单，一个都不写就全部保存
}

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer ,
  productDetail: productDetailSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));
const store = configureStore({
  reducer: persistedReducer ,
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(actionLog), //do not overwrite thunk, it is default
  devTools: true // enable redux devtools in browserz
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch  

export default {store, persistor}