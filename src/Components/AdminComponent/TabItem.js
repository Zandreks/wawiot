import React, {useEffect, useState} from "react";
import {Form, Input, message} from "antd";
import axios from "axios";
import DocFileAdmin from "../../Components/AdminComponent/DocFileAdmin"
import ReactQuill, {Quill} from "react-quill";
import FaqAdmin from "./FaqAdmin";

var Block = Quill.import('blots/block');
Block.tagName = 'DIV';
Quill.register(Block, true);
let TabItem = ({data, faq,file, getObject}) => {
    const [form] = Form.useForm()
    let [loading, setLoading] = useState(false)
    let addFaq = () => {
        let body = {
            "Title": "",
            "Description": "",
            "categoryId": data.id
        }
        axios.post(`api/rest/faq_item/objectCreate`, body, {
            headers: {
                "x-access-token": localStorage.getItem('key')
            }
        }).then((res) => {
            if (res.data.status === 200) {
                message.success("Запрос выполнен")
                setLoading(false)
                getObject()
            }
        }).catch(error => {
            message.error(error.response.data.message)
            setLoading(false)
        })
    }
    let deleteCategory = () => {
        setLoading(true)
        axios.delete(`api/rest/category/objectDelete/${data.id}`, {
            headers: {
                "x-access-token": localStorage.getItem('key')
            }
        }).then((res) => {
            if (res.data.status === 200) {
                message.success("Запрос выполнен")
                setLoading(false)
                getObject()
            }
        }).catch(error => {
            message.error(error.response.data.message)
            setLoading(false)
        })

    }
    const senddata = () => {
        form
            .validateFields()
            .then(async (values) => {
                setLoading(true)
                let body = {
                    "Title": values.Title,
                    "Description": values.Description,
                }
                axios.put(`api/rest/category/objectUpdate/${data.id}`, body, {
                    headers: {
                        "x-access-token": localStorage.getItem('key')
                    }
                }).then((res) => {
                    if (res.data.status === 200) {
                        message.success("Запрос выполнен")
                        setLoading(false)
                        getObject()
                    }
                }).catch(error => {
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
            <div className='form-box admin-border'>
                {data === undefined ? '' :
                    <Form
                        form={form}
                        layout="vertical"
                        name={"tabAdmin"+data.id}
                        initialValues={{
                            modifier: 'public',
                            Title: data.Title,
                            Description: !!data.Description ? data.Description : ""

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
                            <Input/>
                        </Form.Item>
                        {/*<Form.Item*/}
                        {/*    name="Description"*/}
                        {/*    label="Описание"*/}
                        {/*    rules={[*/}
                        {/*        {*/}
                        {/*            required: true,*/}
                        {/*        },*/}
                        {/*    ]}*/}
                        {/*>*/}
                        {/*    <ReactQuill value={""} onChange={(va) => null}/>*/}
                        {/*</Form.Item>*/}
                        <button type='submit' disabled={loading} onClick={senddata} style={{
                            marginRight: 10
                        }}
                                className="btn button-action-bg-body"> Сохранить
                        </button>
                        <button type='button' disabled={loading} onClick={deleteCategory} style={{
                            // marginTop: 10
                        }}
                                className="btn button-action-body"> Удалить
                        </button>
                    </Form>}
            </div>
            {file===false?"": <React.Fragment>
                <br/>

                <div className="admin-border">
                    <p>
                        Файлы категории
                    </p>
                    <DocFileAdmin id={data.id} data={data.docFile} getObject={getObject} typeCategory={"categoryId"}/>
                </div>
            </React.Fragment>}

            <br/>
            {faq === true ? <React.Fragment>
                <div className='admin-border'>
                    <p>
                        FAQ
                    </p>
                    <button type='submit' disabled={loading} onClick={addFaq} style={{
                        // marginTop: 10
                    }}
                            className="btn button-action-bg-body"> Добавить
                    </button>
                    {faq === true ? data.faq_item.map(el => {
                        return <FaqAdmin getObject={getObject} data={el} key={el.id}/>
                    }) : ""}
                </div>
            </React.Fragment> : ""}


        </div>
    )
}
export default TabItem