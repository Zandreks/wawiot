import React, {useState,useEffect} from "react";
import Map from "../../Components/Map/Map";
import ContactData from "../../Components/ContactData/ContactData";
import axios from "axios";
import {message, Skeleton, Select} from "antd";
import Servises from "../../Assets/img/contactPage.png";

const { Option } = Select;
let ContactPage = ()=>{
    let [data,setData] = useState( {})
    let [objects ,setObjects] = useState([])
    let [objectSelect ,setObjectSelect] = useState(null)
    let getObject = ()=>{
        axios.get('api/rest/contacts/getObject/1').then(res=>{
            if (res.data.status ===200){
                setData(res.data.data)
                if (res.data.data.city && res.data.data.city.length>0 ){
                    setSelectButton(res.data.data.city[0].id)

                    let filterObject = res.data.data.objects.filter(el=> el.cityId=== res.data.data.city[0].id)
                    setObjects(filterObject)

                }
            }else{
                message.error(res.data.message)

            }
        })
    }
    useEffect(()=>{
        getObject()
    },[])
    let findElement = (id)=>{
        setSelectButton(id)

        let filterObject = data.objects.filter(el=> el.cityId=== id)
        setObjects(filterObject)
    }
    let [selectButton,setSelectButton]=useState(1)
    return(
        <div className='ServisePage'>
            <div   style={{
                backgroundImage:`url(${Servises})`
            }} className='img-content'>
                <div className='content-box-grid heitch'>
                    <div className={'head-title'}>
                        <div className='text'>
                            наши <br/>
                            контакты
                        </div>
                    </div>
                </div>
            </div>
            <Skeleton active paragraph={{
                rows: 6
            }} loading={Object.keys(data).length === 0}>
            <div className='content-box-grid'>
                <div className='button-group'>
                    <Select defaultValue={ data.city && data.city[0].id} onChange={(val)=>findElement(val)}>
                        {data.city&& data.city.length>0? data.city.map(el=>{
                            return    <Option onClick={()=> findElement(el.id)} key={el.id} value={el.id}>{el.Name}</Option>
                        }):""}
                    </Select>

                </div>

                <ContactData data={objects}/>
            </div>
                <Map setObjectSelect ={setObjectSelect} data={objects}/>
            </Skeleton>
        </div>
    )
}
export default ContactPage