import React, {useEffect, useState} from "react";
import fon from "../../Assets/img/FAQ.png";
import FAQ from "../../Components/FAQ/FAQ";
import axios from "axios";
import {message, Skeleton, Tabs} from "antd";
import Servises from "../../Assets/img/FAQ.png";
import NewDocumentItem from "../../Components/NewDocumentItem/NewDocumentItem";
const { TabPane } = Tabs;

let FAQPage = ()=>{
    let [data,setData] = useState( {})
    let getObject = ()=>{
        axios.get('api/rest/faq/getObject/1').then(res=>{
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
            faq_item:[]

        }
        if (Object.keys(data).length !== 0){
            let findDis = data.category.find(el=> el.id === selectButton)
            if (findDis !== undefined){
                res.description = findDis.Description
            }
            let filterfaq_item = data.faq_item.filter(el=> el.categoryId === selectButton)
            res.faq_item=filterfaq_item

        }
        return res
    }
    let [selectButton,setSelectButton]=useState(1)
    function callback(key) {
        setSelectButton(Number(key))
    }

    return(
        <div className='ServisePage suport-page'>

            <div   style={{
                marginBottom:70,

                backgroundImage:`url(${Servises})`
            }} className='img-content'>
                <div className='content-box-grid heitch'>
                    <div className={'head-title'}>
                        <div className='text'>
                            ответы <br/>
                            на вопросы
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
                                    <FAQ data={findElement().faq_item}/>

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
export default FAQPage