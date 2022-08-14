import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {productDetailSlice} from '../../redux/productDetail/slice' 
import {useSelector, useDispatch } from "react-redux"
import { RootState,AppDispatch } from "../../redux/store";
import axios from "axios";
import { changeLanguage } from "i18next";
import {addLanguageActionCreator, changeLanguageActionCreator} from "../../redux/language/languageActions"
import {getProductDetail} from '../../redux/productDetail/slice'


type params = {
  id: string,
}

export const DetailPage: React.FC = () => {

  const loading = useSelector((state:RootState)=> state.productDetail.loading)
  const error = useSelector((state:RootState)=> state.productDetail.error)
  const data = useSelector((state:RootState)=> state.productDetail.data )

  const dispatch = useDispatch<AppDispatch>()
  useEffect(()=>{
     if(params.id) {
      dispatch (getProductDetail(params.id))
     }
  },[])
  const params = useParams<params>();
  return <h1>{params.id} </h1>
}