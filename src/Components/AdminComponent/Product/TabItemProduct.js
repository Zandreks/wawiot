import React from "react"

import {Form, message, Tabs} from "antd";
import BaseTab from "./BaseTab";
import ChekTab from "./ChekTab";
import Specifications from "./Specifications";
import DocFileAdmin from "../DocFileAdmin";
import Full_pictureAdminProduct from "./Full_pictureAdminProduct";
import axios from "axios";
import FaqTab from "./FaqTab";
const {TabPane} = Tabs

let TabItemProduct =({data,getObject})=>{
    let deleteCgek = ()=> {
        axios.delete(`api/rest/products/objectDelete/${data.id}`, {
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
        return(
            <div>
                <Tabs>
                    <TabPane  tab={"Основная информация"} key={1}>
                        <BaseTab data={data} getObject={getObject}/>
                    </TabPane>
                    <TabPane  tab={"Чек лист"} key={2}>
                        <ChekTab data={data.checklist} id={data.id} getObject={getObject}/>
                    </TabPane>
                    <TabPane  tab={"Характеристики"} key={3}>
                        <Specifications data={data.specifications} id={data.id} getObject={getObject}/>
                    </TabPane>
                    <TabPane  tab={"Фото"} key={4}>
                        <Full_pictureAdminProduct data={data.full_picture} id={data.id} getObject={getObject}/>
                    </TabPane>
                    <TabPane  tab={"Документы"} key={5}>
                        <DocFileAdmin data={data.doc_file} id={data.id} typeCategory={"productId"} getObject={getObject}/>
                    </TabPane>
                    <TabPane  tab={"FAQ"} key={6}>
                        <FaqTab data={data.faq_item} id={data.id} typeCategory={"productId"} getObject={getObject}/>
                    </TabPane>

                </Tabs>
                <br/>
                <button type='button'  onClick={deleteCgek} style={{
                    // marginTop: 10
                }}
                        className="btn button-action-body"> Удалить продукт</button>
            </div>



    )
}
export default TabItemProduct