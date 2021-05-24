import React, {useEffect, useState} from "react";
import {Form, Input, message, Upload, Button, Popconfirm} from "antd";
import axios from "axios";
import ListData from "../../Components/AdminComponent/ListData";

let PartnerAdmin = ({history})=>{
    const [form] = Form.useForm()
    let [loading, setLoading] = useState(false)
    let [data,setData] = useState(undefined)
    let [reset,setReset] = useState(false)
    let [dataNew,seDatanew] = useState(null)
    let [fileList, setFileList] = useState([]);
    let [fileName, setFileName] = useState('');

    let deleteObject = (data)=>{
        axios.delete(`api/rest/partners/objectDelete/${data.id}`,{
            headers:{
                "x-access-token":localStorage.getItem('key')
            }
        }).then(res=>{
            if (res.data.status ===200){
                message.success("Запрос выполнен")
                setFileList([])
                setFileName('')
                seDatanew(null)
                setLoading(false)
                getObject()
            }
        }).catch(error=>{
            message.error(error.response.data.message)
            setLoading(false)
        })
    }
    let EditData =(data) =>{

        seDatanew(data)
        if (data !== null){

            form.setFieldsValue({
                Link:data.Link,
            })
        }else {
            form.setFieldsValue({
                Link:"",

            })
            setFileName("")
            setFileList([])
        }
    }
    const columns = [
        {
            title: 'Удалить',
            key: 'action',
            render: (text,dataRou) =>   <Popconfirm
                title="Удалить ?"
                onConfirm={()=>deleteObject(dataRou)}
                onCancel={()=> null}
                okText="Да"
                cancelText="Нет"
            >
                <div  style={{
                    cursor:"pointer",
                    color:"blue"
                }}>Удалить</div>
            </Popconfirm>,

        },
        {
            title: 'Изменить',
            key: 'edit',
            render: (text,dataRou) =>
                <div onClick={()=>EditData(dataRou)} style={{
                    cursor:"pointer",
                    color:"blue"
                }}>Изменить</div>

        },
        {
            title : 'Заголовок',
            dataIndex: 'Link',
            key: 'Link',
        },
        {
            title: 'Логотип',
            dataIndex: 'Logo',
            key: 'Logo',
            render:(text)=> <div>
                <img src={`/uploads/${text}`}
                     style={{
                         width:50,
                         height:50
                     }}
                     alt=""/>
            </div>

        },
    ];
    let getObject = ()=>{
        axios.get('api/rest/partners/getObject/').then(res=>{
            if (res.data.status ===200){
                setData(res.data.data)
            }else{
                message.error(res.data.message)

            }
        })
    }
    useEffect(()=>{
        getObject()
    },[])
    const senddata =  () => {

        form
            .validateFields()
            .then(async (values) => {
                setLoading(true)
                let body = {
                    "Link": values.Link,
                }
                if (fileName !==""){
                    body.Logo=fileName
                    let fileData = new FormData()
                    fileData.append("file",fileList)
                    axios.post('api/rest/doc_file/newFile', fileData,{
                        headers:{
                            'Content-Type': 'multipart/form-data',
                            "x-access-token":localStorage.getItem('key')
                        }
                    }).then((res) => {
                        if (res.data.status === 200) {
                            if (dataNew !==null){
                                axios.put(`api/rest/partners/objectUpdate/${dataNew.id}`, body,{
                                    headers:{
                                        "x-access-token":localStorage.getItem('key')
                                    }
                                }).then((res) => {
                                    if (res.data.status === 200) {
                                        message.success("Запрос выполнен")

                                        setFileName('')
                                        setFileList([])
                                        seDatanew(null)
                                        setLoading(false)
                                        getObject()
                                        EditData(null)
                                    }
                                }).catch(error=>{
                                    message.error(error.response.data.message)
                                    setLoading(false)
                                })
                            }else{
                                axios.post(`api/rest/partners/objectCreate`, body,{
                                    headers:{
                                        "x-access-token":localStorage.getItem('key')
                                    }
                                }).then((res) => {
                                    if (res.data.status === 200) {
                                        message.success("Запрос выполнен")

                                        setFileName('')
                                        setFileList([])
                                        seDatanew(null)
                                        setLoading(false)
                                        getObject()
                                        EditData(null)

                                    }
                                }).catch(error=>{
                                    message.error(error.response.data.message)
                                    setLoading(false)
                                })
                            }
                        }
                    }).catch(error=>{
                        message.error(error.response.data.message)
                        setLoading(false)
                    })
                }else {
                    if (dataNew !==null){
                        axios.put(`api/rest/partners/objectUpdate/${dataNew.id}`, body,{
                            headers:{
                                "x-access-token":localStorage.getItem('key')
                            }
                        }).then((res) => {
                            if (res.data.status === 200) {
                                message.success("Запрос выполнен")
                                setFileList([])
                                setFileName('')
                                seDatanew(null)
                                setLoading(false)
                                EditData(null)

                                getObject()
                            }
                        }).catch(error=>{
                            message.error(error.response.data.message)
                            setLoading(false)
                        })
                    }else{
                        axios.post(`api/rest/partners/objectCreate`, body,{
                            headers:{
                                "x-access-token":localStorage.getItem('key')
                            }
                        }).then((res) => {
                            if (res.data.status === 200) {
                                message.success("Запрос выполнен")
                                setFileList([])
                                setFileName('')
                                seDatanew(null)
                                setLoading(false)
                                getObject()
                                EditData(null)

                            }
                        }).catch(error=>{
                            message.error(error.response.data.message)
                            setLoading(false)
                        })
                    }
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
            <ListData columns={columns} EditData={EditData} dataSource={data}/>
            <hr/>
            <br/>
            <button className='btn button-action-bg-body' style={{marginBottom:10}} onClick={()=> EditData(null)}>Сбросить данные </button>

            <div className='form-box'>
                {reset===true?'':
                    <Form
                        form={form}
                        layout="vertical"
                        name="form_in_modal"
                        initialValues={{
                            modifier: 'public',
                            Link:dataNew!==null? dataNew.Link:"",

                        }}
                    >
                        <Form.Item
                            name="Link"
                            label={"Ссылка "}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="Full_Pic"
                            label="Логотип"
                            rules={[
                                {
                                    required: false,
                                },
                            ]}
                        >
                            {fileName===""?
                                    <Upload {...propsFile} listType="picture">
                                        <Button > Выбрать файл</Button>
                                        <p> Размеры width: 100.77px;
                                            height: 69.82px; </p>
                                    </Upload>:
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
export default PartnerAdmin