import React,{useState, useEffect} from 'react'
import axios from "axios";
import {message, Skeleton} from "antd";
import {Link} from "react-router-dom";
import BlokHelloImg from '../../Assets/img/helloblok.png'
import BlokHelloImg2 from '../../Assets/img/helloblok2.png'
import Dat from '../../Assets/img/datchik.png'
import Slider from "react-slick";
let BlokHello = () => {
    let [data,setData] = useState({})
    let getObject = ()=>{
        axios.get('api/rest/hello_block/getObject/1').then(res=>{
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
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            <div>
                <div className='blokHello'
                     style={{
                         backgroundImage:`url(${BlokHelloImg})`
                     }}
                >
                    <div className='content-info-blok'>
                        <div  className='head-title'>
                            Счетчик <br/>
                            с радиомодулем
                        </div>
                        <div className='head-sub-title'>
                            3в1
                        </div>
                        <div className='item-title'>
                            <div className='line'>

                            </div>
                            <div className='text'>
                                счетчик
                            </div>

                        </div>
                        <div className='item-title'>
                            <div className='line'>

                            </div>
                            <div className='text'>
                                счетчик
                            </div>

                        </div>
                        <div className='item-title'>
                            <div className='line'>

                            </div>
                            <div className='text'>
                                связь включена
                            </div>

                        </div>

                        <div className='action-btn'>
                            <Link className="btn button-action-bg-body" to={'/products'} >перейти в каталог</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='blokHello'
                     style={{
                         backgroundImage:`url(${BlokHelloImg2})`
                     }}
                >
                    <div className='content-info-blok2'>
                        <div  className='head-title'>
                            Счетчик <br/>
                            с радиомодулем
                        </div>
                        <div className='head-sub-title'>
                            3в1
                        </div>
                        <div className='item-title'>
                            <div className='line'>

                            </div>
                            <div className='text'>
                                счетчик
                            </div>

                        </div>
                        <div className='item-title'>
                            <div className='line'>

                            </div>
                            <div className='text'>
                                счетчик
                            </div>

                        </div>
                        <div className='item-title'>
                            <div className='line'>

                            </div>
                            <div className='text'>
                                связь включена
                            </div>

                        </div>

                        <div className='action-btn'>
                            <Link className="btn button-action-bg-body" to={'/products'} >перейти в каталог</Link>
                        </div>

                    </div>
                    <div >
                    </div>
                    <img className='dat' src={Dat} alt=""/>


                </div>
            </div>
        </Slider>
    )
}
export default BlokHello
