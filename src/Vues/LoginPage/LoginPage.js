import React,{useEffect} from "react";
import HeaderLogin from "./HeaderLogin";
import {Form, Input, message} from 'antd';
import axios from "axios";
let LoginPage =  ({history})=>{
    const onFinish = async values => {
        let json = {
            login:values.username,
            password:values.password,
        }
        axios.post('api/rest/auth/signin',json).then(res=>{
            if (!!res){
                localStorage.setItem('key', res.data.data.accessToken)
                history.push('/adminPartner')
            }
        }).catch(error=>{
            message.error(error.response.data.message)
        })
    };
    useEffect(()=>{
        if (localStorage.getItem('key') !== null){
            history.push('/adminPartner')

        }
    },[])


    return(
        <React.Fragment>
            <div className='Login-wrap' >

                    <HeaderLogin/>
                <div className='Login-box'>
                    <div className='login-box-content'>
                        <div className='login-title'>
                            Вход в систему
                        </div>
                        <Form
                            name="login_form"
                            layout="vertical"

                            className="login-form"
                            initialValues={{
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                label="Логин"

                                rules={[
                                    {
                                        required: true,
                                        message: 'Введите логин...!',
                                    },
                                ]}
                            >
                                <Input  className='form-control'  placeholder="Введите логин..." />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                label="Пароль"

                                rules={[
                                    {
                                        required: true,
                                        message: 'Введите пароль...!',
                                    },
                                ]}
                            >
                                <Input
                                    className='form-control'
                                    type="password"
                                    placeholder="Введите пароль..."
                                />
                            </Form.Item>
                            <Form.Item>
                                <button type="submit" className="btn button-action-bg-body">
                                    Войти
                                </button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>

        </React.Fragment>

    )
}
export default LoginPage
