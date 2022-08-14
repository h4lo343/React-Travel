import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"
import axios from "axios"
import { productList1 } from "../../mockup"

export const FETCH_RECOMMEND_PRODUCTS_START = "FETCH_RECOMMEND_PRODUCTS_START"
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS = "FETCH_RECOMMEND_PRODUCTS_SUCCESS"
export const FETCH_RECOMMEND_PRODUCTS_FAIL = "FETCH_RECOMMEND_PRODUCTS_FAIL"


interface FetchRecommendProductStartAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_START, 
}

interface FetchRecommendProductSuccessAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS, 
  payload: any
}

interface FetchRecommendProductFailAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL, 
  payload: any 
}

export type RecomendProductsActions = FetchRecommendProductStartAction | FetchRecommendProductSuccessAction | FetchRecommendProductFailAction

export const fetchRecommendProductStartActionCreator =
  (): FetchRecommendProductStartAction => {
    return {
      type: FETCH_RECOMMEND_PRODUCTS_START,
    };
  };

export const fetchRecommendProductSuccessActionCreator = (
  data
): FetchRecommendProductSuccessAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const fetchRecommendProductFailActionCreator = (
  error
): FetchRecommendProductFailAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: error,
  };
};

export const giveMeDataActionCreator = ():ThunkAction<void, RootState, any, RecomendProductsActions> =>async (dispatch, getState) => {
  dispatch(fetchRecommendProductFailActionCreator) 
  try {
    const data = productList1 
    dispatch(fetchRecommendProductSuccessActionCreator(data))
  } catch (error) {
    if (error instanceof Error) {
      dispatch(fetchRecommendProductFailActionCreator(error))
    }
  } 
}