import React, {useState} from 'react'
import LogoH from '../../Assets/img/logoH.png'
import {Form, Input, message, Modal} from "antd";
import InputMask from "react-input-mask";
import axios from "axios";
import {Link} from "react-router-dom";

let Head =()=>{
    let [visible, setVisible] = useState(false)
    let [loading, setLoading] = useState(false)
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
                }).catch(error=>{
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
    return(
        <div className='head-box'>
            <div className='img-logo'>

                <Link to={'/'}><img src={LogoH} alt=""/></Link>
                <div className='text-head'>
                    иновационные технологии
                </div>
            </div>

            <div className="d-flex ">
                <button className="btn button-action-body" onClick={showModal} type="button">стать партнером</button>
                <a href='https://lk.waviot.kz/' target='_blank' style={{marginLeft:20}} className="btn button-action-bg-body" >личный кабинет</a>


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
    )
}
export default Head