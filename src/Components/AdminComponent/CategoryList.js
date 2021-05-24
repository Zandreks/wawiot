import React, {useEffect, useState} from "react";
import {Button, message, Tabs} from "antd";
import axios from "axios";
import TabItem from "./TabItem";

const {TabPane} = Tabs;

let CategoryList = ({data,faq, type, id, file, getObject}) => {

    let addNewCategory = () => {

        let body = {
            "Title": "Новая категория",
            "Description": "",
            [type]: id
        }
        axios.post(`api/rest/category/objectCreate`, body, {
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
    const operations = <Button onClick={addNewCategory} >Добавить новую</Button>;

    return (
        <div >
            <Tabs tabBarExtraContent={operations}>
                {data.map(el => {
                    return <TabPane  tab={el.Title} key={el.id}>
                        <TabItem file={file} data={el} faq={faq} getObject={getObject}/>
                    </TabPane>
                })}

            </Tabs>
        </div>
    )
}
export default CategoryList