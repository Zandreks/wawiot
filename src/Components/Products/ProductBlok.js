import React, {useEffect, useState} from 'react'
import ProductItem from "./ProductItem";
import axios from "axios";
import {message} from "antd";
import {Link} from "react-router-dom";

let ProductsBlok = ({history}) => {
    let [data, setData] = useState([])
    let getObject = () => {
        axios.get('api/rest/products/getLastProducts').then(res => {
            if (res.data.status === 200) {
                setData(res.data.data)
            } else {
                message.error(res.data.message)

            }
        })
    }
    useEffect(() => {
        getObject()
    }, [])
    return (
        <div className='content-box-grid'>
            <div className='product-blok'>
                <div className='product-head'>
                    <div className='title'>
                        Продукция
                    </div>
                </div>
                <div className='row'>


                {
                    data.map(el => {
                        return <ProductItem key={el.id} history={history} data={el}/>
                    })
                }
                </div>
                <div className='action-btn'>
                    <Link className="btn button-action-bg-body" to={'/products'} >смотреть еще</Link>
                </div>
            </div>
        </div>
    )
}
export default ProductsBlok