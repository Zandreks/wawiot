import React, { useState} from "react";
import {Form, Input, message} from "antd";
import axios from "axios";

let ChekAdmin= ({data,getObject,id})=>{
    const [form] = Form.useForm()
    let [loading, setLoading] = useState(false)
    let deleteCgek = ()=>{
        axios.delete(`api/rest/checklist/objectDelete/${data.id}`,{
            headers:{
                "x-access-token":localStorage.getItem('key')
            }
        }).then((res) => {
            if (res.data.status === 200) {
                message.success("Запрос выполнен")
                setLoading(false)
                getObject()
            }
        }).catch(error=>{
            message.error(error.response.data.message)
            setLoading(false)
        })

    }
    const senddata =  () => {
        form
            .validateFields()
            .then(async (values) => {
                setLoading(true)
                let body = {
                    "Title": values.Title,
                    // "Full_Pic": fileName
                }
                axios.put(`api/rest/checklist/objectUpdate/${data.id}`, body,{
                    headers:{
                        "x-access-token":localStorage.getItem('key')
                    }
                }).then((res) => {
                    if (res.data.status === 200) {
                        message.success("Запрос выполнен")
                        setLoading(false)
                        getObject()
                    }
                }).catch(error=>{
                    message.error(error.response.data.message)
                    setLoading(false)
                })

            })
            .catch(info => {
                // console.log('Validate Failed:', info)
            })
    }

    return (
        <div>
            <br/>
            <div className='form-box'>
                {data===undefined?'':
                    <Form
                        form={form}
                        layout="vertical"
                        name={"cheAdmin"+data.id}
                        initialValues={{
                            modifier: 'public',
                            Title:data.Title,
                        }}
                    >
                        <Form.Item
                            name="Title"
                            label={"Заголовок "}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <button type='submit' disabled={loading} onClick={senddata} style={{
                            marginRight: 10
                        }}
                                className="btn button-action-bg-body"> Сохранить</button>
                        <button type='button' disabled={loading} onClick={deleteCgek} style={{
                            // marginTop: 10
                        }}
                                className="btn button-action-body"> Удалить</button>
                    </Form>}
            </div>

        </div>
    )
}
export default ChekAdmin
