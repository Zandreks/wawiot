import React, {useEffect, useState} from 'react'
import NewsHead from "../../Components/NewsHead/NewsHead";
import NewsItem from "../../Components/News/NewsItem";
import axios from "axios";
import {message, Skeleton} from "antd";
import Servises from "../../Assets/img/newspage.png";
let NewsPage = ({history})=>{
    let [data,setData] = useState([])
    let getObject = ()=>{
        axios.get('api/rest/news/getObject').then(res=>{
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
        <div className='ServisePage'>
            <div   style={{
                backgroundImage:`url(${Servises})`
            }} className='img-content'>
                <div className='content-box-grid heitch'>
                    <div className={'head-title'}>
                        <div className='text'>
                            важные <br/>
                            новости
                        </div>
                    </div>
                </div>
            </div>
                <Skeleton active paragraph={{
                    rows: 6
                }} loading={data.length === 0}>
            {data.length>0?<div className='content-box-grid'>
                <div className='row'>
                    {data.map(el=>{
                        return (
                            <div style={{
                                marginBottom:70
                            }} className='col-md-6  '>
                                <NewsItem data ={el} history={history}/>
                            </div>
                        )
                    })}

                </div>
            </div>:""}
            </Skeleton>

        </div>
    )
}
export default NewsPage