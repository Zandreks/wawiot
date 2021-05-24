import React from "react";
import RevTop from '../../Assets/img/revTop.png'
import RevBot from '../../Assets/img/revBot.png'
import UserRev1 from '../../Assets/img/userRev1.png'
import UserRev2 from '../../Assets/img/userRev2.png'
import UserRev3 from '../../Assets/img/userRev3.png'
let Reviews = () => {
    return (
        <div className='content-box-grid'>
            <div className='Reviews-box'>
                <div className='title'>
                    Что о нас говорят
                </div>
                <div className='Reviews-list row '>
                    <div className='col-lg-4 col-md-6 col-sm-12 d-flex flex-column'>

                        <div className='Reviews-item '>
                            <div style={{
                                backgroundImage:`url(${RevTop})`,
                            }} className='rev-top'></div>
                            <div style={{
                                backgroundImage:`url(${RevBot})`,
                            }} className='rev-bot'>
                            </div>
                            <p>
                                Приобрели счётчики с передачей
                                данных, поставка оборудования
                                была своевременная, монтаж
                                и регистрация в АО "Agtobe su-energy"
                                прошла отлично, никаких нареканий
                                нет.
                            </p>
                            <div className='user-info-box'>
                                <div className='avatar-user'>
                                    <img src={UserRev1} alt=""/>
                                </div>
                                <div className='user-info'>
                                    <div className='title-user'>
                                        Шалабаев Д.М.
                                    </div>
                                    <div className='description'>
                                        ТОО «SK QYRULUS» <br/>
                                        (снабженец) г.Актобе
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 d-flex flex-column '>
                        <div className='Reviews-item '>
                            <div style={{
                                backgroundImage:`url(${RevTop})`,
                            }} className='rev-top'></div>
                            <div style={{
                                backgroundImage:`url(${RevBot})`,
                            }} className='rev-bot'>
                            </div>
                            <p>
                                Закупали счетчики с радиомолулем.
                                Председатель компании Бауржан
                                оперативно отработал заявку
                                и сделал доставку товара в срок.
                                Благодаря объяснениям Бауржана,
                                проблем с установкой приборов
                                не возникло. Регистрация приборов
                                в АО "Aqtobe Su-energy grup" прошла
                                успешно. Спасибо за сотрудничество.
                            </p>
                            <div className='user-info-box'>
                                <div className='avatar-user'>
                                    <img src={UserRev2} alt=""/>
                                </div>
                                <div className='user-info'>
                                    <div className='title-user'>
                                        Твердохлебова О.Ю.
                                    </div>
                                    <div className='description'>
                                        ТОО «Завод Светотехника-W» <br/>
                                        (инженер) г.Актобе
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 d-flex flex-column'>
                        <div className='Reviews-item'>
                            <div style={{
                                backgroundImage:`url(${RevTop})`,
                            }} className='rev-top'></div>
                            <div style={{
                                backgroundImage:`url(${RevBot})`,
                            }} className='rev-bot'>
                            </div>
                                <p>
                                    Работаю с компанией уже 3 года.
                                    Система не подводит и работает.
                                    Легкий монтаж, хорошая техническая
                                    поддержка и оперативное решение
                                    возникающих вопросов.
                                </p>
                            <div className='user-info-box'>
                                <div className='avatar-user'>
                                    <img src={UserRev3} alt=""/>
                                </div>
                                <div className='user-info'>
                                    <div className='title-user'>
                                        Тужилкин С.Г.
                                    </div>
                                    <div className='description'>
                                        ТОО «Орал Сауда» <br/>
                                        (директор) г.Уральск
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}
export default Reviews