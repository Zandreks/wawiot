import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {Form, Input, Menu, message, Modal} from 'antd';
import LogoH from '../../../Assets/img/logoH.png'
import InputMask from "react-input-mask";
import axios from "axios";
import {ReactComponent as MenuNoActive} from '../../../Assets/icon/menuNoactive.svg';
import {ReactComponent as MenuActive} from '../../../Assets/icon/menuActive.svg';

let Header = () => {
    let [navs, setNav] = useState(false)
    let [visible, setVisible] = useState(false)
    let [loading, setLoading] = useState(false)
    let onchangeLang = (val) => {
        localStorage.setItem('lang', val)
        window.location.reload()
    }
    const [form] = Form.useForm()

    let showModal = () => {
        setVisible(true)
    };

    let handleOk = () => {
        setLoading(true)
        form
            .validateFields()
            .then(async (values) => {
                let body = {
                    "name": values.name,
                    "phone": values.phone,
                    "email": values.email
                }
                axios.post('api/rest/partners/becomePartner', body).then((res) => {
                    if (res.data.status === 200) {
                        message.success("Спасибо ваша заявка принята")
                        form.resetFields()
                        setLoading(false)
                        handleCancel()
                    }
                }).catch(error => {
                    message.error(error.data.message)
                    setLoading(false)
                })
            })
            .catch(info => {
                // console.log('Validate Failed:', info)
            })

    }

    let handleCancel = () => {
        setVisible(false)
    };
    let lang = localStorage.getItem('lang')
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <div onClick={() => onchangeLang('RU')} className='menu-item'>
                    RU
                </div>
            </Menu.Item>
            <Menu.Item key="1">
                <div onClick={() => onchangeLang('EN')} className='menu-item'>
                    EN
                </div>
            </Menu.Item>

        </Menu>
    );
    return (

        <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={LogoH} alt="Logo"/></Link>
                {navs === false?<MenuNoActive  onClick={() => setNav(!navs)}/>:<MenuActive  onClick={() => setNav(!navs)}/>}

                    <div className={navs === false ? 'navbar-collapse collapse' : 'navbar-collapse collapse show'}
                     id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink onClick={() => setNav(false)} className="nav-link" to="/about">о компании</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={() => setNav(false)} className="nav-link"
                                     to='/products'>продукция</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={() => setNav(false)} className="nav-link" to='/platform'>IoT
                                платформа</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={() => setNav(false)} className="nav-link"
                                     to='/document'>документы</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={() => setNav(false)} className="nav-link" to='/service'>сервис</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={() => setNav(false)} className="nav-link" to='/contact'>контакты</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={()=>setNav(false)}  className="nav-link" to='/faq'>поддержка</NavLink>
                        </li>
                    </ul>
                    <div className=" action-bar ">
                        <button className="btn button-action-bg-body" onClick={showModal} type="button">стать партнером</button>

                    </div>
                        <div className=" action-bar ">
                            <a href='https://lk.waviot.kz/' target='_blank'  style={{marginTop:20}} className="btn button-action-bg-body" >личный кабинет</a>

                        </div>
                </div>
                <Modal
                    visible={visible}
                    title="Стать партнером"
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                        <button onClick={handleCancel} disabled={loading} className='btn button-action-body' >Отмена </button>,
                        <button onClick={handleOk} disabled={loading} className='btn button-action-bg-body'>Оставить заявку</button>,
                    ]}
                >
                    <div className='form-box'>
                        <Form
                            form={form}
                            layout="vertical"
                            name="form_in_modal"
                            initialValues={{
                                modifier: 'public',
                            }}
                        >
                            <Form.Item
                                name="name"
                                label="Имя"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input className='form-control'  placeholder='Введите Имя' />
                            </Form.Item>
                            <Form.Item
                                name="phone"
                                label={"Телефон"}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <InputMask className='form-control' style={{width: "100%"}} mask="+7 (999) 999 99 99" placeholder='Введите номер'  />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="Почта"
                                rules={[
                                    {
                                        required: true,
                                        type: 'email',

                                    },
                                ]}
                            >
                                <Input className='form-control'  placeholder='Введите почту' />
                            </Form.Item>

                        </Form>
                    </div>
                </Modal>

            </div>
        </nav>

    )
}
export default Header
