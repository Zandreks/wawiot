import React from 'react'
import moment from "moment";
import LogoF from '../../../Assets/img/logoF.png'
import {Link} from "react-router-dom";

let Footer = () => {
    return (
        <footer>
            <div className='content-box-grid'>

                <div className='content-footer'>
                    <div className='section-1'>
                        {/*<div>*/}
                        {/*    <Icon/>*/}
                        {/*</div>*/}
                        <div className='title'>
                            <img src={LogoF} alt="Logo"/>
                        </div>
                    </div>
                    <div className='section-2'>
                        <div className='title'>
                            Контакты
                        </div>
                        <div className='cont-item'>
                            Мангилик Ел, EXPO С2.3,

                        </div>
                        <div className='cont-item'>
                            Астана, Казахстан, 010000

                        </div>
                        <div className='cont-item'>

                            <a href="tel:87780075601"> 8 778 007 56 01</a>

                        </div>
                        <div className='cont-item'>
                            <a href="mailto:info@waviot.kz">info@waviot.kz</a>

                        </div>
                    </div>
                    <div className='section-2'>
                        <div className='title'>
                            Режим работы
                        </div>
                        <div className='cont-item'>
                            ПН-ПТ: 10:00 - 18:00

                        </div>
                        <div className='cont-item'>
                            СБ-ВС: выходной
                        </div>

                    </div>
                    <div className='section-2'>
                        <div className='title'>
                            Полезная информация
                        </div>

                        <div className='cont-item'>
                            <Link disabled={true} to={"/Politic"}> Положения и политика конфиденциальности</Link>
                        </div>
                        <div className='cont-item'>
                            <Link disabled={true} to={"/PublicOffer"}>Публичная оферта</Link>
                        </div>
                        <div className='cont-item'>
                            <Link disabled={true} to={"/CookieOffer"}>Оферта сookies</Link>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='copyr'>
                    © ТОО “Waviot Asia” {moment().format("YYYY")} Все права защищены
                </div>
            </div>
        </footer>
    )

}
export default Footer