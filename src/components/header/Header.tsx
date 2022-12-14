import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Layout, Typography, Input, Menu, Button, Dropdown} from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useTranslation, WithTranslation } from "react-i18next";
import {addLanguageActionCreator, changeLanguageActionCreator} from "../../redux/language/languageActions"
import {useSelector } from "react-redux"
import {RootState} from "../../redux/store"
import { useDispatch } from "react-redux";

 

export const Header: React.FC = () => {
  
  const {t} = useTranslation()
  const language = useSelector((state:RootState) => state.language.language);
  const languageList = useSelector((state:RootState) => state.language.languageList);
  const navigate = useNavigate();
  const location = useLocation();
  const param = useParams();
  const dispatch = useDispatch()
  
  

  const menuClickHandler = (e) => {
    if(e.key === "new") {
      const action =  addLanguageActionCreator("new_language","new_language")
      dispatch(action)
      return;
    }

    const action = changeLanguageActionCreator(e.key)
    dispatch(action)
  }

  return (
    <div className={styles["app-header"]}>
      {/* top-header */}
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text>{t("header.slogan")}</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu
                onClick={menuClickHandler}
                items={[
                  ...languageList.map((l) => {
                    return { key: l.code, label: l.name };
                  }),
                  { key: "new", label: t("header.add_new_language") },
                ]}
              />
            }
            icon={<GlobalOutlined />}
          >
            {language === "zh" ? "zh":"en"}
          </Dropdown.Button>
          <Button.Group className={styles["button-group"]}>
            <Button onClick={()=>{navigate("/register")}}>{t("header.register")}</Button>
            <Button onClick={()=>{navigate("/signin")}}>{t("header.signin")}</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles["main-header"]}>
        <span onClick={()=>{navigate("/")}} className={styles["span"]}>
          <img src={logo} alt="logo" className={styles["App-logo"]} />
          <Typography.Title level={3} className={styles.title}>
            {t("header.title")}
          </Typography.Title>
        </span>
        
        <Input.Search
          placeholder={"????????????????????????????????????????????????"}
          className={styles["search-input"]}
        />
      </Layout.Header>
      <Menu
        mode={"horizontal"}
        className={styles["main-menu"]}
        items={[
          { key: "1", label: t("header.home_page") },
          { key: "2", label: t("header.weekend") },
          { key: "3", label: t("header.group") },
          { key: "4", label: t("header.backpack") },
          { key: "5", label: t("header.private") },
          { key: "6", label: t("header.cruise") },
          { key: "7", label: t("header.hotel") },
          { key: "8", label: t("header.local") },
          { key: "9", label: t("header.theme") },
          { key: "10", label: t("header.custom") },
          { key: "11", label: t("header.study") },
          { key: "12", label: t("header.visa") },
          { key: "13", label: t("header.enterprise") },
          { key: "14", label: t("header.high_end") },
          { key: "15", label: t("header.outdoor") },
          { key: "16", label: t("header.insurance") },
        ]}
      />
    </div>
  );
};
