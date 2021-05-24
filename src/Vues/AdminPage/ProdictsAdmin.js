import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, message, Tabs} from "antd";
import TabItemProduct from "../../Components/AdminComponent/Product/TabItemProduct";
const {TabPane} = Tabs;

let ProductsAdmin = ()=>{
    let [data,setData] = useState([])
    let addNewProduct = () => {
        let body = {
            "Title": "Новый продукт",

        }
        axios.post(`api/rest/products/objectCreate`, body, {
            headers: {
                "x-access-token": localStorage.getItem('key')
            }
        }).then((res) => {
            if (res.data.status === 200) {
                message.success("Запрос выполнен")
                getObject()
            }
        }).catch(error => {
            message.error(error.response.data.message)

        })

    }

    let getObject = ()=>{
        axios.get('api/rest/products/getObject/').then(res=>{
            if (res.data.status ===200){
                setData(res.data.data)
            }else{
                message.error(res.data.message)

            }
        })
    }
    useEffect(()=>{
        getObject()
    },[])
    const operations = <Button onClick={addNewProduct} >Добавить</Button>;

    return(
        <div >
            <Tabs tabBarExtraContent={operations}>
                {data.map(el => {
                    return <TabPane  tab={el.Title} key={el.id}>
                        <TabItemProduct  data={el}  getObject={getObject}/>
                    </TabPane>
                })}

            </Tabs>
        </div>

    )
}
export default ProductsAdmin