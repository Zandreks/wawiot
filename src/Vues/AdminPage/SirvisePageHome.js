import React, {useEffect, useState} from "react";
import {Form, Input, message, Upload, Button, Popconfirm} from "antd";
import axios from "axios";
import ListData from "../../Components/AdminComponent/ListData";
import ReactQuill, {Quill} from "react-quill";
var Block = Quill.import('blots/block');
Block.tagName = 'DIV';
Quill.register(Block, true);
let SirvisePageHome = ({history})=>{
    const [form] = Form.useForm()
    let [loading, setLoading] = useState(false)
    let [data,setData] = useState(undefined)
    let [reset,setReset] = useState(false)
    let [dataNew,seDatanew] = useState(null)
    let deleteObject = (data)=>{
        axios.delete(`api/rest/hello_service/objectDelete/${data.id}`,{
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
                Title:data.Title,
                Description:data.Description,
            })
        }else {
            form.setFieldsValue({
                Title:"",
                Description:"",
            })
            setFileList([])
            setFileName('')
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
            dataIndex: 'Title',
            key: 'Title',
            render:(text)=> <div dangerouslySetInnerHTML={{__html:text }} />
        },
        {
            title: 'Описание',
            dataIndex: 'Description',
            key: 'Description',
            render:(text)=> <div dangerouslySetInnerHTML={{__html:text }} />

        },
    ];
    let getObject = ()=>{
        axios.get('api/rest/hello_service/getObject/').then(res=>{
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
                    "Title": values.Title,
                    "Description": values.Description,
                    // "Full_Pic": fileName
                }
                if (fileName !==""){
                    body.Icon=fileName
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
                                axios.put(`api/rest/hello_service/objectUpdate/${dataNew.id}`, body,{
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
                            }else{
                                axios.post(`api/rest/hello_service/objectCreate/`, body,{
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
                    }).catch(error=>{
                        message.error(error.response.data.message)
                        setLoading(false)
                    })
                }else {
                    if (dataNew !==null){
                        axios.put(`api/rest/hello_service/objectUpdate/${dataNew.id}`, body,{
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
                        axios.post(`api/rest/hello_service/objectCreate/`, body,{
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
    const [fileList, setFileList] = useState([]);
    const [fileName, setFileName] = useState('');

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
                            Title:dataNew!==null? dataNew.Title:"",
                            Description: dataNew && !!dataNew.Description?dataNew.Description: ""
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
                            <ReactQuill value={""} onChange={(va)=>null} />
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
                            <ReactQuill value={""} onChange={(va)=>null} />
                        </Form.Item>
                        <Form.Item
                            name="Full_Pic"
                            label="Иконка"
                            rules={[
                                {
                                    required: false,
                                },
                            ]}
                        >
                            {fileName===""?
                                    <Upload {...propsFile} listType="picture">
                                        <Button > Выбрать файл</Button>
                                        <p> Размеры width: 70px;
                                            height: 70px; </p>
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
export default SirvisePageHome