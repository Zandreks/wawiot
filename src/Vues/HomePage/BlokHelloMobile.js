import React from 'react'
import {Link} from "react-router-dom";

let BlokHelloMobile = () => {
    return (
        <div className='BlokHelloMobile'>
            <div className='content-box-grid'>

                    <div className='content-info-blok2'>
                        <div  className='head-title2'>
                            Счетчик <br/>
                            с радиомодулем
                        </div>
                        <div className='head-sub-title2'>
                            3в1
                        </div>
                        <div className='item-title2'>
                            <div className='line2'>

                            </div>
                            <div className='text'>
                                счетчик
                            </div>

                        </div>
                        <div className='item-title2'>
                            <div className='line2'>

                            </div>
                            <div className='text2'>
                                счетчик
                            </div>

                        </div>
                        <div className='item-title2'>
                            <div className='line2'>

                            </div>
                            <div className='text2'>
                                связь включена
                            </div>

                        </div>

                        <div className='action-btn2'>
                            <Link className="btn button-action-bg-body" to={'/products'} >перейти в каталог</Link>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default BlokHelloMobile