import React, {useEffect, useState} from 'react'
import NewsHead from "../../Components/NewsHead/NewsHead";
import NewsItem from "../../Components/News/NewsItem";
import axios from "axios";
import {message, Skeleton} from "antd";
import {
    Link,
    useParams
} from "react-router-dom";
import {ReactComponent as IconBack} from "../../Assets/icon/basck.svg";
let ItemNews = ({history})=>{
    let { id } = useParams();

    let [data,setData] = useState({})
    let getObject = ()=>{
        axios.get(`/api/rest/news/getObject/${id}`).then(res=>{

            if (res.data.status ===200){
                setData(res.data.data)
            }else{
                message.error(res.data.message)

            }
        })
    }
    useEffect(()=>{
        getObject()
    },[id])
    return(
        <div className='content-box-grid'>
            <div className='bask-box'>
                <Link to={'/news'}>
                    <IconBack/> к новостям
                </Link>
            </div>
            <Skeleton active paragraph={{
                rows: 6
            }} loading={Object.keys(data).length === 0}>

            <div className='box-contents'>
                {data.Description && <NewsHead data={data} buttoOfn={true}/> }


            </div>
            </Skeleton>
        </div>
    )
}
export default ItemNews