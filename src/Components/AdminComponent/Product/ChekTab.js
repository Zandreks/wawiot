import React from "react"
import axios from "axios";
import {message} from "antd";
import ChekAdmin from "../ChekAdmin";

let ChekTab =({data,id,getObject})=>{
    let addChek = ()=>{
            let body = {
                "Title": "",
                "productId":id
            }
            axios.post(`api/rest/checklist/objectCreate`, body,{
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
          {data.map(el=> <ChekAdmin data={el} getObject={getObject} key={el.id} />)}
      </div>
    )
}
export default ChekTab