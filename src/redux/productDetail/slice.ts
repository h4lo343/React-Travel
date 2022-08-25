import { createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import { resolve } from "path"
import thunk from "redux-thunk"
import { json } from "stream/consumers"
import { productList1 } from "../../mockup"

interface ProductDetailState {
  loading: boolean,
  error: any,
  data: any
}

const initialState : ProductDetailState = {
  loading: true,
  error: null,
  data: null
}
 
export const getProductDetail = createAsyncThunk(
  "productDetail/getProductDetail",
     async (touristRoutedID: string, thunkAPI) => {
        
     }
   
)

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    
  },
  extraReducers: { //these 3 actions are automatically created by redux/toolkit
       [getProductDetail.pending.type] : (state) => {
        state.loading =true
       },
       [getProductDetail.fulfilled.type]: (state, action) => {
        state.loading = false
        state.data = action.payload
       }     //to deal with aysnc actio
  }
})