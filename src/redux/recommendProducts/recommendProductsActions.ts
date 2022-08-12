import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"
import axios from "axios"

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

export type RecoomendProductsActions = FetchRecommendProductStartAction | FetchRecommendProductSuccessAction | FetchRecommendProductFailAction

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

export const giveMeDataActionCreator = ():ThunkAction<void, RootState, any, RecoomendProductsActions> =>async (dispatch, getState) => {
  dispatch(fetchRecommendProductFailActionCreator) 
  try {
    const {data} = await axios.get("https://d8695eab-5355-45ef-9c36-0d34cd1fe4fb.mock.pstmn.io/productList")
    dispatch(fetchRecommendProductSuccessActionCreator(data))
  } catch (error) {
    if (error instanceof Error) {
      dispatch(fetchRecommendProductFailActionCreator(error))
    }
  } 
}