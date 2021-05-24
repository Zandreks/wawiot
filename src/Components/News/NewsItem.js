import React from "react";
import { Card } from 'antd';
import moment from "moment";
import {Link, useHistory } from "react-router-dom";
import {ReactComponent as Icom} from "../../Assets/icon/chevron_right.svg";
const { Meta } = Card;

let NewsItem = ({ data}) =>{
    let history = useHistory();

    function handleClick() {
        history.push(`/news/${data.id}`);
    }

    let funcstr = ()=>{
        const regex = /(<([^>]+)>)/ig
        const result = data.Description.replace(regex, '')
        console.log(result)
        return result.slice(0,100)+"..."
    }
    return(
        <div onClick={handleClick} className='news-box-item'>
            <div className='news-prev'>
                <img
                    className='img-fluid'
                    alt=""
                    src={`/uploads/${data.Preview}`}
                />
            </div>
            <div className='news-title'>
                {data.Title}
            </div>
            <div className='news-content'>
                {funcstr()}
            </div>
            <div className='news-footer'>
                <div className='date'>
                    {moment(data.createdAt).format("DD.MM.YYYY")}

                </div>
                <div className='link'>
                    <Link className='link-custom' to={`/news/${data.id}`}> далее  <Icom/></Link>
                </div>
            </div>

        </div>
    )
}
export default NewsItem