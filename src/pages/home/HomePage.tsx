import React from "react";
import {Header, Footer, Carousel, SideMenu, ProductCollection} from "../../components"  
import {Row, Col, Typography, Spin } from "antd"

import {connect} from "react-redux"
import sideImage1 from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2 .png'
import styles from './HomePage.module.css'
import { withTranslation, WithTranslation } from "react-i18next";
import axios from "axios"
import { RootState } from "../../redux/store";
import { giveMeDataActionCreator}
         
from "../../redux/recommendProducts/recommendProductsActions"
import { ShoppingTwoTone } from "@ant-design/icons";

 

const mapStateToProps = (state: RootState) => {
  return {
    loading: state.recommendProducts.loading,
    error: state.recommendProducts.error,
    productList1: state.recommendProducts.productList
  }
};


const mapDispatchToProps = (dispatch) => {
  return { 
    giveMeData: () => {
      dispatch(giveMeDataActionCreator())
    }
  } 
} 

type PropsType = WithTranslation & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> 

class HomePageComponent extends React.Component<PropsType> {

   
  componentDidMount() {
    this.props.giveMeData()
  } 

 
   
  render():React.ReactNode {
   
    const {t,productList1, loading, error} = this.props;
 
    
     if (loading) {
      return <Spin size="large" style={{margin:"200px 800px"}}></Spin>
     }
     if(error !=null) {
      return <h1>网站出错</h1>
     }
     return <div className={styles["App"]}>
    <Header/>
    <div className={styles["page-content"]}>
      <Row style={{marginTop: "20px"}}>
        <Col span={6}>
          <SideMenu></SideMenu>
        </Col>
        <Col span={18}>
          <Carousel></Carousel>
        </Col>
      </Row>
      <ProductCollection
        title={<Typography.Title level={3} type="warning">{t("home_page.hot_recommended")}</Typography.Title>}
        sideImage={sideImage1}
        products={productList1}
      />
    </div>
    <Footer/>
  </div>         
  }
}
export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(HomePageComponent));