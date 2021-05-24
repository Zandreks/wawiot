import React, {useEffect, useState} from "react";
import axios from "axios";
import {message, Skeleton,Tabs} from "antd";
import Servises from "../../Assets/img/documentPage.png";
import NewDocumentItem from "../../Components/NewDocumentItem/NewDocumentItem";
const { TabPane } = Tabs;
let DocumentPage = ()=>{
    let [data,setData] = useState( {})
    let getObject = ()=>{
        axios.get('api/rest/documents/getObject/1').then(res=>{
            if (res.data.status ===200){

                setData(res.data.data)
                if (res.data.data.category && res.data.data.category.length>0 ){
                    setSelectButton(res.data.data.category[0].id)
                }
            }else{
                message.error(res.data.message)

            }
        })
    }
    useEffect(()=>{
        getObject()
    },[])
    let findElement = ()=>{
        let res = {
            description:"",
            files:[]

        }
        if (Object.keys(data).length !== 0){
           let findDis = data.category.find(el=> el.id === selectButton)
            if (findDis !== undefined){
                res.description = findDis.Description
            }
        let filterFile = data.doc_file.filter(el=> el.categoryId === selectButton)
        res.files=filterFile

        }
        return res
    }
    function callback(key) {
        setSelectButton(Number(key))
    }

    let [selectButton,setSelectButton]=useState(1)
    return(
        <div className='ServisePage'>
            <div   style={{
                marginBottom:70,
                backgroundImage:`url(${Servises})`
            }} className='img-content'>
                <div className='content-box-grid heitch'>
                    <div className={'head-title'}>
                        <div className='text'>
                            полезные <br/>
                            документы
                        </div>
                    </div>
                </div>
            </div>
                <Skeleton active paragraph={{
                    rows: 6
                }} loading={Object.keys(data).length === 0}>
            <div className='content-box-grid'>
                <div className='documemts-box'>
                    <Tabs onChange={callback} centered>
                        {data.category&& data.category.length>0? data.category.map(el=>{
                            return(
                                <TabPane   onClick={()=> setSelectButton(el.id)} tab={el.Title} key={el.id}>
                                    <div className='row'>
                                        {findElement().files.length>0 ? findElement().files.map(el=><div key={el.id} className='col-lg-3 col-md-6 col-sm-1  d-flex flex-column'> <NewDocumentItem data={el}/></div> ):""}

                                    </div>
                                </TabPane>
                            )
                        }):""}

                    </Tabs>
                </div>

            </div>
            </Skeleton>
        </div>
    )
}
export default DocumentPage