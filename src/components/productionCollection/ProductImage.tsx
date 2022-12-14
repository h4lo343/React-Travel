import React from "react";
import {Image, Typography} from "antd";
import {Link} from "react-router-dom"


interface PropsType {
  id: string | number,
  size: "large" | "small",
  imageSrc: string,
  price: string | number,
  title: string
}

export const ProductImage: React.FC<PropsType> = ({id, size, imageSrc, price, title}) => {



  return (
    <Link to={`/detail/${id}`}>
      <div>
        {
        size == "large" ? <Image src={imageSrc} height={250} width={490}/>
        : <Image src={imageSrc} height={120} width={240}/>
        }
        <div>
          <Typography.Text type="secondary">{title.slice(0,25)}</Typography.Text>
          <Typography.Text type="danger" strong>￥{price}</Typography.Text>
        </div>
      </div>
    </Link>
     
  )
}