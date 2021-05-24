import React, {useState} from "react";
import {Form, Input, message, Select, Upload} from 'antd'
import InputMask from 'react-input-mask'
import axios from "axios";

const {TextArea} = Input;

let Feedback = ()=>{
    const [form] = Form.useForm()
    let [loading, setLoading] = useState(false)

    let senddata = ()=>{
        form
            .validateFields()
            .then(async (values) => {
                let body = {
                    "question": values.question,
                    "phone": values.phone,
                    "email": values.email
                }
                axios.post('api/rest/contacts/contactUs', body).then((res) => {
                    if (res.data.status === 200) {
                        message.success("Спасибо ваша заявка принята")
                        form.resetFields()
                        setLoading(false)
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
    return(
        <div className='Feedback-box'>
            <div className='row'>
                <div className='col-md-8'>
                    <div className='left-box'>
                        <div className='title'>
                            Нужна помощь?
                        </div>
                        <div className='sub-title'>
                            Свяжитесь с нами в любое время <br/> и мы ответим
                            на ваши вопросы!
                        </div>
                        <div className='phone'>
                            <a href="tel:87780075601">8 778 007 56 01</a>
                        </div>
                        <div className='sub-title'>
                            или отправьте заявку по адресу
                        </div>
                        <div className='phone'>
                            <a href="mailto:info@waviot.kz">info@waviot.kz</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='right-box'>

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
                                    name="phone"
                                    label={"Телефон"}
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <InputMask className='form-control-form'  mask="+7 (999) 999 99 99" placeholder='Номер телефона'  />
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
                                    <Input className='form-control-form'  placeholder='Электронная почта' />
                                </Form.Item>
                                <Form.Item
                                    name="question"
                                    label="Вопрос"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <TextArea className='form-control-form' rows={4} placeholder='Ваш вопрос'/>
                                </Form.Item>
                                <button type='submit' disabled={loading} onClick={senddata}
                                        className="btn button-action-bg-body">Оставить заявку</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Feedback