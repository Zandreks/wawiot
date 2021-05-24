import React, {useEffect, useState} from "react";
import {Form, Input, message} from "antd";
import axios from "axios";
import ReactQuill, {Quill} from "react-quill";
var Block = Quill.import('blots/block');
Block.tagName = 'DIV'
Quill.register(Block, true);

let FaqAdmin =({data,getObject})=>{
    const [form] = Form.useForm()
    let [loading, setLoading] = useState(false)
    let deleteCategory = ()=>{
        setLoading(true)
        axios.delete(`api/rest/faq_item/objectDelete/${data.id}`,{
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
                    "Description": values.Description,
                }
                axios.put(`api/rest/faq_item/objectUpdate/${data.id}`, body,{
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

    return(
        <div>
            <br/>
            <div className='form-box'>
                {data===undefined?'':
                    <Form
                        form={form}
                        layout="vertical"
                        name={"faqAdmin"+data.id}
                        initialValues={{
                            modifier: 'public',
                            Title:data.Title,
                            Description:!!data.Description?data.Description: ""

                        }}
                    >
                        <Form.Item
                            name="Title"
                            label={"Вопрос "}
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
                            label="Ответ"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <ReactQuill  value={""} onChange={(va)=>null} />
                        </Form.Item>
                        <button type='submit' disabled={loading} onClick={senddata} style={{
                            marginRight: 10
                        }}
                                className="btn button-action-bg-body"> Сохранить</button>
                        <button type='button' disabled={loading} onClick={deleteCategory } style={{
                            // marginTop: 10
                        }}
                                className="btn button-action-body"> Удалить</button>
                    </Form>}
            </div>

        </div>
    )
}

export default FaqAdmin