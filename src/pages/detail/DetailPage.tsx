import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {productDetailSlice} from '../../redux/productDetail/slice' 
import {useSelector, useDispatch } from "react-redux"
import { RootState,AppDispatch } from "../../redux/store";
import axios from "axios";
import { Spin, Row, Col, Divider, Typography } from "antd";
import { changeLanguage } from "i18next";
import {addLanguageActionCreator, changeLanguageActionCreator} from "../../redux/language/languageActions"
import {getProductDetail} from '../../redux/productDetail/slice'
import {Header, Footer, ProductIntro, ProductComments } from '../../components'
import styles from './DetailPage.module.css'
import { DatePicker, Space } from "antd";
import {commentMockData as data} from './mockup'


const { RangePicker } = DatePicker;

type params = {
  touristRouteId: string,
}

export const DetailPage: React.FC = () => {

  // const loading = useSelector((state:RootState)=> state.productDetail.loading)
  // const error = useSelector((state:RootState)=> state.productDetail.error)
  // const data = useSelector((state:RootState)=> state.productDetail.data )
  // const language = useSelector((state:RootState)=> state.language.language )
  const {touristRouteId} = useParams<params>();
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(()=> {
    const fetchData = async () => {
      setLoading(true)

      try {
        const {data} =  await axios.get(`http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error instanceof Error? error.message : "error")
        setLoading(false)
      }
    } 
    fetchData()
  }, [])

  if (loading) {
    return (
      <Spin 
        size="large" 
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}/>
    ) 
   }
   if(error !=null) {
     
    return <h1>网站出错</h1>
   }
  return (
    <>
      <Header/>
      <div className={styles["page-content"]}>
        <div className={styles['product-intro-container']}>
          <Row>
            <Col span={13}>
              <ProductIntro
                title={product.title}
                shortDescription={product.description}
                price={product.originalPrice}
                coupons={product.coupons}
                points={product.points}
                discount={product.price}
                rating={product.rating}
                pictures={product.touristRoutePictures.map((p) => p.url)}
              />
            </Col>
            <Col span={11}>
              <RangePicker open style={{marginTop:20}}/>
            </Col>
          </Row>
        </div>
        <div className={styles['product-detail-anchor']}></div>
        <div id='feature' className={styles['product-detail-container']}>
          <Divider orientation={"center"}>
            <Typography.Title level={3}>
              产品特色
            </Typography.Title>
          </Divider>
          <div dangerouslySetInnerHTML={{__html: product.features}} style={{margin: 50}}></div>
        </div>
        <div id='fees' className={styles['product-detail-container']}></div>
        <Divider orientation={"center"}>
            <Typography.Title level={3}>
              费用
            </Typography.Title>
          </Divider>
          <div dangerouslySetInnerHTML={{__html: product.fees}} style={{margin: 50}}></div>
        <div id='notes' className={styles['product-detail-container']}></div>
        <Divider orientation={"center"}>
            <Typography.Title level={3}>
              预定须知
            </Typography.Title>
          </Divider>
          <div dangerouslySetInnerHTML={{__html: product.notes}} style={{margin: 50}}></div>
        <div id='comments' className={styles['product-detail-container']} >
        <Divider orientation={"center"}>
            <Typography.Title level={3}>
              评论
            </Typography.Title>
          </Divider>
          <div style={{margin: 40}}>
             <ProductComments data={data}/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}