import React, {useEffect, useState} from 'react'
import ProductItem from "../../Components/Products/ProductItem";
import axios from "axios";
import {message, Skeleton} from "antd";
import FonPruct from "../../Assets/img/fonproduct.png";

let ProductPage = ({history}) => {
    let [data, setData] = useState([])
    let getObject = () => {
        axios.get('api/rest/products/getObject').then(res => {
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
        <div className='box-contents'>
            <div className='product-page'>
                <div  style={{
                    backgroundImage:`url(${FonPruct})`
                }} className='header-page'>
                    <div className='content-box-grid heitch'>
                        <div className='head-title'>
                           <div className='text'>
                               наша <br/>
                               продукция
                           </div>
                        </div>
                    </div>
                </div>
                <Skeleton loading={data.length === 0} active>
                    <div className='content-box-grid'>
                        <div className='product-list'>
                            <div className='row'>

                                {
                                    data.map(el => {
                                        return <ProductItem history={history} key={el.id} data={el}/>
                                    })
                                }
                            </div>


                        </div>
                    </div>
                </Skeleton>
            </div>
        </div>
    )
}
export default ProductPage