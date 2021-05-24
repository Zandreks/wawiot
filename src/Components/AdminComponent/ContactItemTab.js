import React, { useState} from "react";

import {Button, Form, Input, message, Tabs} from "antd";
import axios from "axios";
import ObjectItem from "./ObjectItem";

const {TabPane} = Tabs

let ContactItemTab = ({data, getObject}) => {
    const [form] = Form.useForm()
    let [loading, setLoading] = useState(false)

    const senddata = () => {
        form
            .validateFields()
            .then(async (values) => {
                let body = {
                    Name:values.Name
                }
                setLoading(true)
                axios.put(`api/rest/city/objectUpdate/${data.id}`, body, {
                    headers: {
                        "x-access-token": localStorage.getItem('key')
                    }
                }).then((res) => {
                    if (res.data.status === 200) {
                        message.success("Запрос выполнен")
                        getObject()
                        setLoading(false)
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
    let deleteCgek = () => {
        axios.delete(`api/rest/city/objectDelete/${data.id}`, {
            headers: {
                "x-access-token": localStorage.getItem('key')
            }
        }).then((res) => {
            if (res.data.status === 200) {
                message.success("Запрос выполнен")
                getObject()
            }
        }).catch(error => {
            message.error(error.response.data.message)

        })

    }
    let addNewObject = () => {
        let body = {
            "Name": "Новый Объект",
            cityId: data.id

        }
        axios.post(`api/rest/objects/objectCreate`, body, {
            headers: {
                "x-access-token": localStorage.getItem('key')
            }
        }).then((res) => {
            if (res.data.status === 200) {
                message.success("Запрос выполнен")
                getObject()
            }
        }).catch(error => {
            message.error(error.response.data.message)

        })

    }
    const operations = <Button onClick={addNewObject}>Добавить обьект</Button>;

    return (
        <div>
            <div className='form-box admin-border'>
                {data === undefined ? '' :
                    <Form
                        form={form}
                        layout="vertical"
                        name={"form"+data.id}
                        initialValues={{
                            modifier: 'public',
                            Name:data.Name
                        }}
                    >
                        <Form.Item
                            name="Name"
                            label="Наименование"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                         <Input/>
                        </Form.Item>
                        <button type='submit' disabled={loading} onClick={senddata} style={{
                            // marginTop: 10
                        }}
                                className="btn button-action-bg-body"> Сохранить
                        </button>
                    </Form>}
            </div>
            <br/>
            <Tabs tabBarExtraContent={operations}>
                {data.objects.map(el=>{
                    return (
                        <TabPane tab={el.Name} key={el.id}>
                            <ObjectItem data={el} getObject={getObject}/>
                        </TabPane>
                    )
                })}



            </Tabs>
            <br/>
            <button type='button' onClick={deleteCgek} style={{
                // marginTop: 10
            }}
                    className="btn button-action-body"> Удалить город
            </button>
        </div>


    )
}
export default ContactItemTab