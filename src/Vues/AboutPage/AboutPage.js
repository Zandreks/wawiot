import React, {useEffect, useState} from 'react'
import Fon from '../../Assets/img/About.png'
import {message,Skeleton} from "antd";
import axios from "axios";
import Img from '../../Assets/img/About ing.png'
import Img2 from '../../Assets/img/aboutimg.png'
import Img3 from '../../Assets/img/abouttech.png'
import {ReactComponent as Icon} from "../../Assets/icon/check 1.svg";

let AboutPage =({history})=>{
    let [data,setData] = useState( {})
    let getObject = ()=>{
        axios.get('api/rest/company/getObject/1').then(res=>{
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
        <div className='about-page'>
            <div  style={{
                backgroundImage:`url(${Fon})`
            }} className='about-fon'>
                <div className='content-box-grid heitch'>
                    <div className={'head-title'}>
                        <div className='text'>
                            наша <br/>
                            компания
                        </div>
                        <div className='img'>
                            <img className='img-fluid' src={Img} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content-box-grid'>
                <div className='content-about'>
                    <div className='img-box'>
                        <img className='img-fluid' src={Img2} alt=""/>
                    </div>
                    <div className='description'>
                        <span>ТОО «Вавиот Азия»  </span> - Казахстанская компания-интегратор по внедрению умных решений в секторе ЖКХ <br/>
                        Нами создана сеть NB-Fi на территории 12 регионов республики, которая обеспечивает передачу показаний в ресурсные компании от 200 000 устройств и предоставляет прозрачность услуг населению <br/>
                        Компания производит полную линейку приборов учета ресурсов ЖКХ (счетчики электроэнергии, воды, газа, тепла), устройства для сбора, обработки и передачи измерительной информации и телеметрических данных, и предлагает заказчикам системы автоматизированного сбора показаний и систем мониторинга, в том числе для учета энергетических ресурсов ЖКХ, теплосетевых, электросетевых и энергосбытовых компаниях
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='img-about-product'>
                                <img className='img-fluid' src={Img3} alt=""/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='title-tech'>
                                Наша технология
                            </div>
                            <div className='description-tech'>
                                Технология NB-Fi— разработана компанией WAVIoT, обеспечивает связь между устройствами на больших расстояниях при плотной городской застройке, идеально подходит для построения сетей Интернета вещей
                            </div>
                            <div className='about-chek-item'>
                                <div className='icon'>
                                    <Icon/>
                                </div>
                                <div className='title'>
                                    Открытый протокол передачи данных
                                </div>
                            </div>
                            <div className='about-chek-item'>
                                <div className='icon'>
                                    <Icon/>
                                </div>
                                <div className='title'>
                                    Частотный диапазон 864,0 МГц
                                </div>
                            </div>
                            <div className='about-chek-item'>
                                <div className='icon'>
                                    <Icon/>
                                </div>
                                <div className='title'>
                                    Ширина канала 100 кГц
                                </div>
                            </div>
                            <div className='about-chek-item'>
                                <div className='icon'>
                                    <Icon/>
                                </div>
                                <div className='title'>
                                    Мощность сигнала 25 мВт, что в 4 раза меньше Wifi
                                </div>
                            </div>
                            <div className='about-chek-item'>
                                <div className='icon'>
                                    <Icon/>
                                </div>
                                <div className='title'>
                                    Номерная емкость сети 4,3 млрд устройств
                                </div>
                            </div>
                            <div className='about-chek-item'>
                                <div className='icon'>
                                    <Icon/>
                                </div>
                                <div className='title'>
                                    Алгоритм шифрования «Магма» ГОСТ Р 34.12-2015
                                </div>
                            </div>
                            <div className='about-chek-item'>
                                <div className='icon'>
                                    <Icon/>
                                </div>
                                <div className='title'>
                                    Поддержка двухсторонней связи в устройствах
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutPage