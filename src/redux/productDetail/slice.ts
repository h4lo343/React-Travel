import { createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import { resolve } from "path"
import thunk from "redux-thunk"
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
    (touristRouteID: string, thunkAPI) => {
         new Promise(()=>{
          const data = productList1
          return data
        }) 
         
         
        
      
   }
)

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    
  },
  extraReducers: { //these 3 actions are automatically created by redux/toolkit
                   //to deal with aysnc action
                   //automatically mapping
    [getProductDetail.pending.type]: (state) => {
      // return {...state, loading: true}
      state.loading = true
    },
    [getProductDetail.fulfilled.type]: (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = null 
    },
    [getProductDetail.rejected.type]: (state, action: PayloadAction<string|null>) => {
      state.loading = false
      state.error = action.payload
    } 
  }
})