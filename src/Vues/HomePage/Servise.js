import React, {useEffect, useState} from 'react'
import axios from "axios";
import {message,Skeleton} from "antd";
let Servise = ()=>{
    let [data,setData] = useState([])
    let getObject = ()=>{
        axios.get('api/rest/hello_service/getObject/').then(res=>{
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
    return(
        <div className='Servise-blok'>
            <Skeleton loading={data.length===0} active paragraph={{
                rows:4
            }}>
                <h2>
                    Система удаленного учета ресурсов по радиоканалу
                </h2>
                <div className='row'>
                    {data.map(el=>{
                        return(
                            <div key={el.id} className='col-md-4'>
                                <div className='icon'>
                                    <img src={`/uploads/${el.Icon}`} alt=""/>
                                </div>
                                <div dangerouslySetInnerHTML={{__html:el.Title }} className='title'/>
                                <div dangerouslySetInnerHTML={{__html:el.Description }} className='description'/>
                            </div>
                        )
                    })}

                </div>
            </Skeleton>

        </div>
    )
}
export default Servise
