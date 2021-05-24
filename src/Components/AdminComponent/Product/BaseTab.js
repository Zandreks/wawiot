import React, {useEffect, useState} from "react";
import {Button, Form, Input, message, Upload} from "antd";
import axios from "axios";
import ReactQuill, {Quill} from "react-quill";

var Block = Quill.import('blots/block');
Block.tagName = 'DIV';
Quill.register(Block, true);

let BaseTab = ({data,getObject})=>{
    const [form] = Form.useForm()
    let [loading, setLoading] = useState(false)
    const [fileList, setFileList] = useState([]);
    const [fileName, setFileName] = useState('');
    const senddata =  () => {
        form
            .validateFields()
            .then(async (values) => {
                setLoading(true)
                let body = {
                    "Title": values.Title,
                    "Description": values.Description,
                    "Subtitle":values.Subtitle
                    // "Full_Pic": fileName
                }
                if (fileName !==""){
                    body.Preview=fileName
                    let fileData = new FormData()
                    fileData.append("file",fileList)
                    axios.post('api/rest/doc_file/newFile', fileData,{
                        headers:{
                            'Content-Type': 'multipart/form-data',
                            "x-access-token":localStorage.getItem('key')
                        }
                    }).then((res) => {
                        if (res.data.status === 200) {
                            axios.put(`api/rest/products/objectUpdate/${data.id}`, body,{
                                headers:{
                                    "x-access-token":localStorage.getItem('key')
                                }
                            }).then((res) => {
                                if (res.data.status === 200) {
                                    message.success("Запрос выполнен")
                                    setFileList([])
                                    setFileName('')
                                    setLoading(false)
                                    getObject()
                                }
                            }).catch(error=>{
                                message.error(error.response.data.message)
                                setLoading(false)
                            })
                        }
                    }).catch(error=>{
                        message.error(error.response.data.message)
                        setLoading(false)
                    })
                }else {
                    axios.put(`api/rest/products/objectUpdate/${data.id}`, body,{
                        headers:{
                            "x-access-token":localStorage.getItem('key')
                        }
                    }).then((res) => {
                        if (res.data.status === 200) {
                            message.success("Запрос выполнен")
                            setFileList([])
                            setFileName('')
                            setLoading(false)
                            getObject()
                        }
                    }).catch(error=>{
                        message.error(error.response.data.message)
                        setLoading(false)
                    })
                }


            })
            .catch(info => {
                // console.log('Validate Failed:', info)
            })
    }
    const propsFile = {
        multiple: false,
        onRemove: file => {
            setFileList([])
        },
        beforeUpload: file => {
            let ext = file.name.split('.').pop()
            let name = file.name.split('.')[0]
            let date = new Date()
            let type = file.type
            let second = date.getMilliseconds()
            let newName = name + second + '.' + ext
            let blob = file.slice(0, file.size,type)
            file = new File([blob], newName,{type:type})
            setFileList(file)
            setFileName(newName)
            return false
        },
    }
    return(
        <div>

            <div className='form-box admin-border'>
                {data===undefined?'':
                    <Form
                        form={form}
                        layout="vertical"
                        name={"formProduct"+data.id}
                        initialValues={{
                            modifier: 'public',
                            Title:data.Title,
                            Subtitle:data.Subtitle,
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
                            name="Subtitle"
                            label={"Подзаголовок "}
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
                        <Form.Item
                            name="Full_Pic"
                            label="Превью"
                            rules={[
                                {
                                    required: false,
                                },
                            ]}
                        >
                            {fileName===""?
                                <Upload {...propsFile} listType="picture">
                                    <Button > Выбрать файл</Button>
                                    <p> Размеры width: 221px;
                                        height: 315px;</p>
                                </Upload>
                                :
                                <div >
                                    <p>
                                        Файл : {fileName}
                                    </p>
                                    <Button onClick={()=>{
                                        setFileName('')
                                        setFileList([])
                                    }}>
                                        Удалить
                                    </Button>
                                </div>
                            }
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
export default BaseTab