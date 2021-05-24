import React, { useState} from "react";
import ReactQuill, {Quill} from "react-quill";
import axios from "axios";
import {message, Form, Input} from "antd";
var Block = Quill.import('blots/block');
Block.tagName = 'DIV';
Quill.register(Block, true);
let TehnologyAdmin =({data,getObject})=>{
    const [form] = Form.useForm()
    let [loading, setLoading] = useState(false)
    const senddata =  () => {

        form
            .validateFields()
            .then(async (values) => {
                setLoading(true)
                let body = {
                    "Title": values.Title,
                    "Description": values.Description,
                    // "Full_Pic": fileName
                }
                axios.put(`api/rest/technology/objectUpdate/${data.id}`, body,{
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
        <div className='form-box admin-border'>

            <p>
                Описание технологии
            </p>
            <div className='form-box'>
                {data===undefined?'':
                    <Form
                        form={form}
                        layout="vertical"
                        name={"techologyAdmin"+data.id}
                        initialValues={{
                            modifier: 'public',
                            Title:data.Title,
                            Description:!!data.Description?data.Description: ""
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
                        <Form.Item
                            name="Description"
                            label="Описание"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <ReactQuill  value={""} onChange={(va)=>null} />
                        </Form.Item>
                        <button type='submit' disabled={loading} onClick={senddata} style={{
                            // marginTop: 10
                        }}
                                className="btn button-action-bg-body"> Сохранить</button>
                    </Form>}
            </div>

        </div>
    )
}
export default TehnologyAdmin
