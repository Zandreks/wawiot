import React from "react";
import {Card} from "antd";
const { Meta } = Card;

let ProductItem = ({history,data})=>{
    let Rewdirect =(id)=>{
        history.push(`/products/${id}`)
    }
    return(

        <div onClick={()=>Rewdirect(data.id)} className='col-lg-4 col-md-6 col-sm-12'>
            <div className='product-item'>

            <Card
                cover={
                    <img
                        alt="example"
                        src={`/uploads/${data.Preview}`}
                    />
                }
            >
                <Meta
                    description={<div className='title-card'>
                        {data.Subtitle.slice(0,50)+"..."}
                    </div>}
                />
            </Card>
        </div>
        </div>
    )
}
export default ProductItem