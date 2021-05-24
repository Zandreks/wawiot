import React, { useState, useEffect} from "react";
import { Upload, Button, message } from 'antd';
import axios from "axios";

let Full_pictureAdminProduct = ({data,id,getObject})=>{
    let [fileList, setFileList]=useState([])
    useEffect(()=>{
        let arr = []

        if (data.length>0){
            for (let val of data){
                arr.push(
                    {
                        uid: '-1',
                        idPie:val.id,
                        name: val.Name,
                        status: 'done',
                        url: `/uploads/${val.Name}`
                    },
                )
            }
            setFileList(arr)
        }

    },[data])
    const props = {
        onRemove: file => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            axios.delete(`api/rest/full_picture/objectDelete/${file.idPie}`,{
                headers:{
                    "x-access-token":localStorage.getItem('key')
                }
            }).then((res) => {
                if (res.data.status === 200) {
                    message.success("Запрос выполнен")
                    setFileList(newFileList)

                }
            }).catch(error=>{
                message.error(error.response.data.message)
            })

            setFileList(newFileList)
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
            let fileData = new FormData()
            fileData.append("file",file)
            let body = {
                Name:newName,
                productId:id
            }
            axios.post('api/rest/doc_file/newFile', fileData,{
                headers:{
                    'Content-Type': 'multipart/form-data',
                    "x-access-token":localStorage.getItem('key')
                }
            }).then((res) => {
                if (res.data.status === 200) {

                    axios.post('api/rest/full_picture/objectCreate', body,{
                        headers:{
                            "x-access-token":localStorage.getItem('key')
                        }
                    }).then((res) => {
                        if (res.data.status === 200) {
                            message.success("Запрос выполнен")
                            getObject()

                        }
                    }).catch(error=>{
                        message.error(error.response.data.message)

                    })
                }
            }).catch(error=>{
                message.error(error.response.data.message)

            })
            return false;
        },
        fileList,
    };

    return(
        <Upload
            {...props}
            listType="picture"
            defaultFileList={[...fileList]}
        >
            <Button > Выбрать файл</Button>
            <p> Размеры width: 461px;
                height: 461px; </p>
        </Upload>
    )
}
export default Full_pictureAdminProduct
