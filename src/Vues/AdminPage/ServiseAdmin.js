import React, {useEffect, useState} from "react";
import {Button, Form, Input, message, Upload} from "antd";
import axios from "axios";
import CategoryList from "../../Components/AdminComponent/CategoryList";


let ServiseAdmin = ()=>{
    const [form] = Form.useForm()
    let [loading, setLoading] = useState(false)
    let [data,setData] = useState(undefined)
    let [dataCategory,setDataCaterory] = useState([])
    const [fileList, setFileList] = useState([]);
    const [fileName, setFileName] = useState('')
    let parseData = (dataCatgory)=>{
        if (!!dataCatgory.category && dataCatgory.category.length>0){
            let arrResult = []
            for (let val of dataCatgory.category){
                let filter = dataCatgory.doc_file.filter(el=> el.categoryId === val.id)
                let filterSersise = dataCatgory.faq_item.filter(el=> el.categoryId === val.id)
                val.docFile = filter
                val.faq_item = filterSersise
                arrResult.push(val)
            }
            setDataCaterory(arrResult)
        }
    }
    let getObject = ()=>{
        axios.get('api/rest/service/getObject/1').then(res=>{
            if (res.data.status ===200){
                setData(res.data.data)
                parseData(res.data.data)
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
                if (fileName !==""){
                    setLoading(true)

                    let fileData = new FormData()
                    fileData.append("file",fileList)
                    axios.post('api/rest/doc_file/newFile', fileData,{
                        headers:{
                            'Content-Type': 'multipart/form-data',
                            "x-access-token":localStorage.getItem('key')
                        }
                    }).then((res) => {
                        if (res.data.status === 200) {
                            let body = {
                                "Full_Pic": fileName
                            }

                            axios.put('api/rest/service/objectUpdate/1', body,{
                                headers:{
                                    "x-access-token":localStorage.getItem('key')
                                }
                            }).then((res) => {
                                if (res.data.status === 200) {
                                    message.success("Запрос выполнен")
                                    setFileList([])
                                    setFileName('')
                                    setLoading(false)
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
                        name="form_in_modal"
                        initialValues={{
                            modifier: 'public',
                        }}
                    >
                        <Form.Item
                            name="Full_Pic"
                            label="Банер"
                            rules={[
                                {
                                    required: false,
                                },
                            ]}
                        >
                            {fileName===""?
                                <Upload {...propsFile} listType="picture">
                                    <Button > Выбрать файл</Button>
                                    <p> Размеры width: 1390px;
                                        height: 447px; </p>
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
            <br/>
            <p>
                Список категорий
            </p>
            <CategoryList faq={true} getObject={getObject} data={dataCategory} id={ !!data ?data.id:""} type={"serviceId"}/>
        </div>

    )
}
export default ServiseAdmin