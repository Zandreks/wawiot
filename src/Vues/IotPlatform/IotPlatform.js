import React, {useEffect, useState} from 'react'
import Servises from "../../Assets/img/IotPlatform.png";
import Img1 from '../../Assets/img/iotimg1.png'
import Img2 from '../../Assets/img/iotimg2.png'
import Img3 from '../../Assets/img/iotimg3.png'
import Img4 from '../../Assets/img/iotimg4.png'
import Img5 from '../../Assets/img/iotimg5.png'
import Img6 from '../../Assets/img/iotimg6.png'
import Img7 from '../../Assets/img/iotimg7.png'
import Img8 from '../../Assets/img/iotimg8.png'
import Img9 from '../../Assets/img/iotimg9.png'
import Img10 from '../../Assets/img/iotimg10.png'
import Img11 from '../../Assets/img/iotimg11.png'
import LogoList from '../../Assets/img/logolist.png'
import {ReactComponent as Icon} from "../../Assets/icon/chekiot.svg";
import {ReactComponent as Icon1} from "../../Assets/icon/iconiot1.svg";
import {ReactComponent as Icon2} from "../../Assets/icon/iconiot2.svg";
import {ReactComponent as Icon3} from "../../Assets/icon/iconiot3.svg";
import {ReactComponent as Icon4} from "../../Assets/icon/iconiot4.svg";
import {ReactComponent as Icon5} from "../../Assets/icon/iconiot5.svg";
import {ReactComponent as Icon6} from "../../Assets/icon/iconiot6.svg";
import {ReactComponent as Icon7} from "../../Assets/icon/iconiot7.svg";
import {ReactComponent as Icon8} from "../../Assets/icon/iconiot8.svg";
import Slider from "react-slick";

let IotPlatform = () => {
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
    return (
        <div className='IOT-Platform'>
            <div   style={{
                backgroundImage:`url(${Servises})`
            }} className='img-content'>
                <div className='content-box-grid heitch'>
                    <div className={'head-title'}>
                        <div className='text'>
                            WinHub — <br/>
                            iot платформа
                        </div>
                    </div>
                </div>
            </div>
            <div className='content-box-grid'>
                <div className='iot-content'>
                    <div className='img-baner'>
                        <img className='img-fluid' src={Img1} alt=""/>
                    </div>
                    <div className='description-iot'>
                        <span>Интеграционная платформа «Интернета вещей»</span> , предлагающая быстрое и надёжное решение задач любого IoT-приложения: получение, хранение, обработка, расширенная аналитика и визуализация данных, а также интеграция с приложениями уровня предприятия <br/> <br/>
                        В отличие от других решений, предоставляющих базовую инфраструктуру и SDK для разработки вертикальных приложений, <span className='colo-iot'>WinHub</span> предлагает не только инструменты визуальной разработки для построения интерфейсов конечных пользователей, но и конвейер обработки данных на сервере <br/>
                        <br/>
                        Платформа IoT включает более ста драйверов устройств, делающих возможным подключение любого промышленного или пользовательского IoT-устройства
                    </div>
                    <div className='Features-iot'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='Features-box'>
                                    <div className='title'>
                                        Особенности
                                    </div>
                                    <div className='description-features'>
                                        Тысячи инсталляций и миллионы подключённых устройств, отправляющих миллиарды событий в день, доказывают, что WinHub обладает всем необходимым, чтобы помочь вам разработать IoT-приложение буквально за недели и вывести его на рынок в течение месяцев <br/> <br/>
                                        Сэкономьте на дорогостоящем найме команды разработчиков и дайте вашим бизнес-аналитикам сделать всю работу — для создания приложений практически не требуется навыков программирования
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='img-features'>
                                    <img className='img-fluid' src={Img2} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='chek-list-iot'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='chek-iot-item'>
                                    <div className='icon'>
                                        <Icon/>
                                    </div>
                                    <div className='title-chek-iot'>
                                        Неограниченные возможности подключения IoT-устройств
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='chek-iot-item'>
                                    <div className='icon'>
                                        <Icon/>
                                    </div>
                                    <div className='title-chek-iot'>
                                        Единый реестр M2M-активов
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='chek-iot-item'>
                                    <div className='icon'>
                                        <Icon/>
                                    </div>
                                    <div className='title-chek-iot'>
                                        Адаптировано для M2M-коммуникаций
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='chek-iot-item'>
                                    <div className='icon'>
                                        <Icon/>
                                    </div>
                                    <div className='title-chek-iot'>
                                        Запатентованная технология
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='chek-iot-item'>
                                    <div className='icon'>
                                        <Icon/>
                                    </div>
                                    <div className='title-chek-iot'>
                                        Единая модель данных
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='chek-iot-item'>
                                    <div className='icon'>
                                        <Icon/>
                                    </div>
                                    <div className='title-chek-iot'>
                                        Тревоги и обработка событий
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='chek-iot-item'>
                                    <div className='icon'>
                                        <Icon/>
                                    </div>
                                    <div className='title-chek-iot'>
                                        Модульная, масштабируемая и надёжная IoT-архитектура
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='chek-iot-item'>
                                    <div className='icon'>
                                        <Icon/>
                                    </div>
                                    <div className='title-chek-iot'>
                                        Графики и тренды
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='chek-iot-item'>
                                    <div className='icon'>
                                        <Icon/>
                                    </div>
                                    <div className='title-chek-iot'>
                                        Пакетная отложенная настройка устройств
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='chek-iot-item'>
                                    <div className='icon'>
                                        <Icon/>
                                    </div>
                                    <div className='title-chek-iot'>
                                        Подробные отчёты
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='chek-iot-item'>
                                    <div className='icon'>
                                        <Icon/>
                                    </div>
                                    <div className='title-chek-iot'>
                                        Централизованное управление микрокодом устройств
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='chek-iot-item'>
                                    <div className='icon'>
                                        <Icon/>
                                    </div>
                                    <div className='title-chek-iot'>
                                        Комплект разработчика ПО с открытым исходным кодом
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='chek-iot-item'>
                                    <div className='icon'>
                                        <Icon/>
                                    </div>
                                    <div className='title-chek-iot'>
                                        Дизайнер планов объектов
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='chek-iot-item'>
                                    <div className='icon'>
                                        <Icon/>
                                    </div>
                                    <div className='title-chek-iot'>
                                        Гибкая модель безопасности
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='chek-iot-item'>
                                    <div className='icon'>
                                        <Icon/>
                                    </div>
                                    <div className='title-chek-iot'>
                                        Динамические карты
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='chek-iot-item'>
                                    <div className='icon'>
                                        <Icon/>
                                    </div>
                                    <div className='title-chek-iot'>
                                        Отказоустойчивый кластер
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='chek-iot-item'>
                                    <div className='icon'>
                                        <Icon/>
                                    </div>
                                    <div className='title-chek-iot'>
                                        Сводные инфопанели состояний
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='chek-iot-item'>
                                    <div className='icon'>
                                        <Icon/>
                                    </div>
                                    <div className='title-chek-iot'>
                                        Распределённая архитектура
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='chek-iot-item'>
                                    <div className='icon'>
                                        <Icon/>
                                    </div>
                                    <div className='title-chek-iot'>
                                        Безопасные коммуникации между устройствами
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='chek-iot-item'>
                                    <div className='icon'>
                                        <Icon/>
                                    </div>
                                    <div className='title-chek-iot'>
                                        IoT-аналитика
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='arhit-iot'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='img-features'>
                                    <img className='img-fluid' src={Img3} alt=""/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='Features-box'>
                                    <div className='title'>
                                        Архитектура
                                    </div>
                                    <div className='description-features'>
                                        WinHub представляет собой набор «кирпичиков» — программных модулей, использующихся для сбора, хранения, анализа и визуализации данных с различных устройств, а также дальнейшей интеграции этих данных в другие элементы корпоративной инфраструктуры <br/> <br/>
                                        Мы потратили годы, чтобы найти общий знаменатель для разнообразных программных продуктов по мониторингу, управлению и аналитике <br/> <br/>
                                        Техническая архитектура IoT-платформы WinHub объединяет в себе накопленные нами знания
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='box-iot-list'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='item-bov-iot'>
                                    <div className='iot-box-title'>
                                        <div className='icon'>
                                            <Icon1/>
                                        </div>
                                        <div className='title'>
                                            Цифровизация
                                        </div>
                                    </div>
                                    <div className='description-box-iot'>
                                        Единая модель данных, поддержка масштабирования и высокой доступности, комплексный подход к безопасности, открытые протоколы и другие технологии платформы корпоративного уровня <br/> <br/>
                                        Модульный дизайн позволяет использовать платформу как в небольших локальных инсталляциях, так и в высокопроизводительном облачном окружении
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='item-bov-iot'>
                                    <div className='iot-box-title'>
                                        <div className='icon'>
                                            <Icon2/>
                                        </div>
                                        <div className='title'>
                                            Подключение устройств
                                        </div>
                                    </div>
                                    <div className='description-box-iot'>
                                        Поддержка «из коробки» более 100 коммуникационных протоколов через высокопроизводительные драйвера на стороне сервера или агенты на стороне устройств <br/> <br/>
                                        Запуск платформы на IoT-шлюзах, ПЛК на базе Linux, сенсорных панелях и промышленных ПК позволяет получить доступ к данным с разнородных устройств
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='item-bov-iot'>
                                    <div className='iot-box-title'>
                                        <div className='icon'>
                                            <Icon3/>
                                        </div>
                                        <div className='title'>
                                            Хранение
                                        </div>
                                    </div>
                                    <div className='description-box-iot'>
                                        Унифицированный подход к сохранению IoT-событий, исторических значений, обогащающих данных и конфигурации приложений <br/> <br/>
                                        Возможность выбора технологии хранения между реляционными, NoSQL, графовыми, кольцевыми, файловыми базами данных и БД «ключ-значение» обеспечивает оптимальную структуру данных и высочайшую производительность
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='item-bov-iot'>
                                    <div className='iot-box-title'>
                                        <div className='icon'>
                                            <Icon4/>
                                        </div>
                                        <div className='title'>
                                            Управление
                                        </div>
                                    </div>
                                    <div className='description-box-iot'>
                                        Мы способны обслуживать многомиллионные парки устройств <br/> <br/>
                                        Возможности управления включают автоматическое обнаружение и настройку, работу с отключёнными устройствами, групповые и пакетные операции, гибкую работу с событиями, комплексные уведомления, планировщик задач, централизованное обновление, репликацию настроек и многое другое
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='item-bov-iot'>
                                    <div className='iot-box-title'>
                                        <div className='icon'>
                                            <Icon5/>
                                        </div>
                                        <div className='title'>
                                            Визуализация
                                        </div>
                                    </div>
                                    <div className='description-box-iot'>
                                        Визуальные редакторы позволяют за несколько минут создать интерактивные инфопанели или сложные графические интерфейсы с динамическими векторными изображениями, многослойными картами, графами топологий, статистическими диаграммами, видеопотоками, полями ввода и управления — всё это связано вместе без единой строчки программного кода
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='item-bov-iot'>
                                    <div className='iot-box-title'>
                                        <div className='icon'>
                                            <Icon6/>
                                        </div>
                                        <div className='title'>
                                            Аналитика
                                        </div>
                                    </div>
                                    <div className='description-box-iot'>
                                        Инструменты расширенной аналитики, управляемые искусственным интеллектом — важнейшая часть WinHub <br/> <br/>
                                        Модели объектов и процессов, предметно-ориентированные языки, визуальные бизнес-процессы и алгоритмы машинного обучения — всё это позволяет извлекать дополнительную выгоду из данных и упрощает принятие решений
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='item-bov-iot'>
                                    <div className='iot-box-title'>
                                        <div className='icon'>
                                            <Icon7/>
                                        </div>
                                        <div className='title'>
                                            Расширение
                                        </div>
                                    </div>
                                    <div className='description-box-iot'>
                                        Иногда существующих возможностей визуальной разработки недостаточно для решения сложных задач <br/> <br/>
                                        В этом случае помогают расширения с поддержкой сценариев, API и SDK, которые позволяют разработать и добавить в платформу новый драйвер устройства или модуль обработки информации, компоненты пользовательского интерфейса и даже полноценное веб-приложение
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='item-bov-iot'>
                                    <div className='iot-box-title'>
                                        <div className='icon'>
                                            <Icon8/>
                                        </div>
                                        <div className='title'>
                                            Интеграция
                                        </div>
                                    </div>
                                    <div className='description-box-iot'>
                                        Библиотеки серверных API позволяют сторонним приложениям получить полный контроль над установленной платформой и данными устройств, а веб-сервисы делают это возможным даже без встраивания программных библиотек в ваше приложение <br/> <br/>
                                        И, конечно, все внешние операции также находятся под управлением модели безопасности платформы
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bissnes-box-iot'>
                        <div className='img'>
                            <img className='img-fluid' src={Img4} alt=""/>
                        </div>
                        <div className='title-bissnes-box'>
                            Бизнес-пользователи
                        </div>
                        <div className='description-bissnes-box'>
                            Платформа WinHub доступна и как публичный облачный сервис, и как продукт с возможностью ребрендинга, работающий в центре обработки данных заказчика <br/> <br/>
                            Её уникальные возможности по масштабированию позволяют WinHub работать, как на высокопроизводительных кластерах провайдеров облачных услуг, так и на устройствах периферийной аналитики, таких как IoT-шлюзы или ПЛК на базе Linux <br/> <br/>
                            Это позволяет удовлетворить потребности любого бизнеса, помогая нашим партнёрам запускать новые продукты Интернета вещей и внедрять крупные корпоративные решения буквально за недели
                        </div>
                    </div>
                    <div className='carusel-box-iot'>
                        <Slider {...settings}>
                            <div>
                                <div className='carusel-iot-item'>
                                    <div className='img'>
                                        <img className='img-fluid' src={Img5} alt=""/>
                                    </div>
                                    <div className='carusel-title-iot'>
                                        Системные интеграторы и инжиниринговые компании
                                    </div>
                                    <div className='carusel-description-iot'>
                                        Расширенный набор модулей для локального развёртывания приложений промышленного Интернета вещей
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='carusel-iot-item'>
                                    <div className='img'>
                                        <img className='img-fluid' src={Img6} alt=""/>
                                    </div>
                                    <div className='carusel-title-iot'>
                                        Крупные корпорации
                                    </div>
                                    <div className='carusel-description-iot'>
                                        Зонтичный ситуационный центр для цифровых активов и сервисов
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='carusel-iot-item'>
                                    <div className='img'>
                                        <img className='img-fluid' src={Img7} alt=""/>
                                    </div>
                                    <div className='carusel-title-iot'>
                                        Производители оборудования
                                    </div>
                                    <div className='carusel-description-iot'>
                                        Фреймворк для мониторинга и управления вашими устройствами с возможностью ребрендинга
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='carusel-iot-item'>
                                    <div className='img'>
                                        <img className='img-fluid' src={Img8} alt=""/>
                                    </div>
                                    <div className='carusel-title-iot'>
                                        Производители iot-шлюзов
                                    </div>
                                    <div className='carusel-description-iot'>
                                        Развитая и крайне гибкая операционная система для периферийных вычислений и аналитики
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='carusel-iot-item'>
                                    <div className='img'>
                                        <img className='img-fluid' src={Img9} alt=""/>
                                    </div>
                                    <div className='carusel-title-iot'>
                                        Операторы связи
                                    </div>
                                    <div className='carusel-description-iot'>
                                        Единая основа для iot-сервисов в ваших сетях и облаках
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                    <div className='Features-iot'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='Features-box'>
                                    <div className='title'>
                                        Отрасли
                                    </div>
                                    <div className='description-features'>
                                        Организации в различных отраслях ежедневно пользуются продуктами на основе WinHub, чтобы упростить ИТ-задачи, сократить расходы и автоматизировать бизнес <br/> <br/>
                                        WinHub соединяет ваши интеллектуальные устройства с предприятием, самостоятельно решая огромное количество задач по управлению и визуализации, часто заменяя инструменты бизнес-аналитики. И, конечно, он предоставляет актуальные данные до и во время их обработки <br/> <br/>
                                        Неважно, какой бизнес вы представляете, IoT-платформа WinHub нацелена на повышение удовлетворённости конечных клиентов и предоставление разнообразных преимуществ
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='img-features'>
                                    <img className='img-fluid' src={Img10} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carusel-box-iot2'>
                        <Slider {...settings}>
                            <div>
                                <div className='carusel-iot-item'>
                                    <div className='img'>
                                        <img className='img-fluid' src={Img11} alt=""/>
                                    </div>
                                    <div className='content-item-iot'>
                                        <div className='title'>
                                            Сельское хозяйство
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='description-item'>
                                                    Мониторинг автотранспорта и сельскохозяйственной спецтехники, управление технологическими процессами, сортировкой, хранением и переработкой сырья <br/> <br/>
                                                    Реализованные проекты на платформе IoT:
                                                </div>
                                                <div className='logo-list'>
                                                    <img className='img-fluid' src={LogoList} alt=""/>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='chekList'>
                                                    <div className='chekItem'>
                                                        <div className='icon'>
                                                            <Icon/>
                                                        </div>
                                                        <div className='titleChek'>
                                                            Автоматическое распознавание подачи сырья
                                                        </div>
                                                    </div>
                                                    <div className='chekItem'>
                                                        <div className='icon'>
                                                            <Icon/>
                                                        </div>
                                                        <div className='titleChek'>
                                                            Мониторинг условий хранения сахарной свёклы
                                                        </div>
                                                    </div>
                                                    <div className='chekItem'>
                                                        <div className='icon'>
                                                            <Icon/>
                                                        </div>
                                                        <div className='titleChek'>
                                                            Управление активной вентиляцией кагатов
                                                        </div>
                                                    </div>
                                                    <div className='chekItem'>
                                                        <div className='icon'>
                                                            <Icon/>
                                                        </div>
                                                        <div className='titleChek'>
                                                            Автоматизация заводов по производству сахара
                                                        </div>
                                                    </div>
                                                    <div className='chekItem'>
                                                        <div className='icon'>
                                                            <Icon/>
                                                        </div>
                                                        <div className='titleChek'>
                                                            Мобильное приложение для умного животноводства
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default IotPlatform
