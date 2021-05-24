import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {message} from 'antd';
import NewsItem from "./NewsItem";
import axios from "axios";

let News = ({headnews,history }) => {
    let [data, setData] = useState([])
    let getObject = () => {
        axios.get('/api/rest/news/getLastNews').then(res => {
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
        <div className='content-box-grid'>
            <div className='news-box-home'>
                <div className='headBox'>
                    <div className='title'>
                        {headnews === true?"Похожие новости":"Новости"}
                    </div>
                </div>
                <div className='row'>
                {data.map(el => {
                    return (
                        <div key={el.id} className='col-md-4  d-flex flex-column'>
                            <NewsItem data={el} history={history}/>
                        </div>
                    )
                })}
                </div>
                { headnews === true?"":<div className='action-btn'>
                    <Link className="btn button-action-bg-body" to={'/news'} >смотреть больше</Link>
                </div>}
            </div>
        </div>
    )
}
export default News
