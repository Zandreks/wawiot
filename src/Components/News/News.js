import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {message} from 'antd';
import NewsItem from "./NewsItem";
import axios from "axios";

let News = ({history})=>{
    let [data,setData] = useState([])
    let getObject = ()=>{
        axios.get('api/rest/news/getLastNews').then(res=>{
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
        <div className='row news-box'>
            <div className='headBox'>
                <div className='title'>
                    Новости
                </div>
                <div className='active-linc'>
                    <Link to={'/news'}>
                        Смотреть все
                    </Link>
                </div>
            </div>
            {data.map(el=>{
                return(
                    <div key={el.id} className='col-md-4'>
                        <NewsItem data ={el} history={history}/>
                    </div>
                )
            })}

        </div>
    )
}
export default News
