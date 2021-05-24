import React from "react";
import {Link} from "react-router-dom";
import img from '../../Assets/img/news.png'
import moment from "moment";
import News from "../News/NewsHome";

let NewsHead = ({data, buttoOfn}) => {
    return (
        <div>
        <div className='news-head'>
            <div className='title'>
                {data.Title}
            </div>
            <div className='img-prev'>
                <img src={`/uploads/${data.Full_Pic}`} alt=""/>
            </div>
            <div dangerouslySetInnerHTML={{__html:buttoOfn===true?data.Description:data.Description.slice(0,100)+"..." }}
                className='description'/>
            {buttoOfn === true ? "" : <div className='link'>
                <Link to={`/news/${data.id}`}>
                    Подробнее
                </Link>
            </div>}
            <div className='date-item'>
                {moment(data.createdAt).format("DD.MM.YYYY")}

            </div>

        </div>
            <News headnews={true}  />
        </div>
    )
}
export default NewsHead