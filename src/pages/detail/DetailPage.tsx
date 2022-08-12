import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useParams } from "react-router-dom";
 
type params = {
  id: string,
}

export const DetailPage: React.FC = () => {
  const params = useParams<params>();
  return <h1>{params.id} </h1>
}