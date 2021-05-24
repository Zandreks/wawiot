import React from "react"
import axios from "axios";
import {message} from "antd";
import SpecificationItem from "./SpecificationItem";

let Specifications =({data,id,getObject})=>{
    let addChek = ()=>{
        let body = {
            "Key": "",
            "Value":"",
            "productId":id
        }
        axios.post(`api/rest/specifications/objectCreate`, body,{
            headers:{
                "x-access-token":localStorage.getItem('key')
            }
        }).then((res) => {
            if (res.data.status === 200) {
                message.success("Запрос выполнен")
                getObject()
            }
        }).catch(error=>{
            message.error(error.response.data.message)
        })



    }

    return (
        <div>
            <button type='submit'  onClick={addChek} style={{
                // marginTop: 10
            }}
                    className="btn button-action-bg-body"> Добавить </button>
            <br/>
            {data.map(el=> <SpecificationItem data={el} getObject={getObject} key={el.id} />)}
        </div>
    )
}
export default Specifications