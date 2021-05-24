import React from 'react'
import Slider from "react-slick";
import Item1 from '../../Assets/img/homeCarusel1.png'
import Item2 from '../../Assets/img/homeCarusel2.png'
import Item3 from '../../Assets/img/homeCarusel3.png'

let CaruselHome = ()=>{
    const settings = {
        dots: true,
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
    return(
        <div className='content-box-grid'>
            <div className='carusel-home'>
                <Slider {...settings}>
                    <div>
                    <div className='carusel-home-item'>
                        <div className='content-text'>
                            <div className='title'>
                                Почему мы
                            </div>
                            <div className='sub-title'>
                                200 000 устройств в сети
                            </div>
                            <div className='text'>
                                Ежедневно счетчики передают показани <br/>
                                ресурсным компаниям в 12 регионах <br/>
                                республики
                            </div>
                        </div>
                        <div className='img-item'>
                            <img className='img-fluid' src={Item1} alt=""/>
                        </div>
                    </div>
                    </div>
                    <div>
                        <div className='carusel-home-item'>
                            <div className='content-text'>
                                <div className='title'>
                                    Почему мы
                                </div>
                                <div className='sub-title'>
                                    Значимые проекты
                                </div>
                                <div className='text'>
                                    Инвест проект «Умный район» в г. Нур-Султан, <br/>
                                    Внедрение 4 000 общедомовых <br/>
                                    приборов учета в г. Шымкент <br/>
                                </div>
                            </div>
                            <div className='img-item'>
                                <img className='img-fluid' src={Item2} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='carusel-home-item'>
                            <div className='content-text'>
                                <div className='title'>
                                    Почему мы
                                </div>
                                <div className='sub-title'>
                                    Более 120 ЖК г.Нур-Султан
                                </div>
                                <div className='text'>
                                    Установлено 100 000 индивидуальных <br/>
                                    и 6 200 общедомовых приборов учета <br/>
                                    в новостройках столицы
                                </div>
                            </div>
                            <div className='img-item'>
                                <img className='img-fluid' src={Item3} alt=""/>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}
export default CaruselHome