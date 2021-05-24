import React,{useState} from "react";
import {ReactComponent as Icon} from "../../Assets/icon/faq 1.svg"
import {ReactComponent as IconDoun} from "../../Assets/icon/doun.svg"
import {ReactComponent as IconRithe} from "../../Assets/icon/rithe.svg"
import { Collapse } from 'antd';

const { Panel } = Collapse;
let FAQ =({data})=>{
    let [select, setSelect] = useState([])
    let callback=(key)=> {
        console.log(key);
        setSelect(key)
    }

    return(
        <div className='FAQ-box'>
            <Collapse   onChange={callback} ghost>
                {data && data.length>0?data.map(el=>{
                    return(
                        <Panel header={<div className='head-faq'><Icon/>{el.Title} {select.find((val)=> val== el.id) !== undefined ?<IconDoun className={'svgFaq'}/> : <IconRithe className={'svgFaq'}/>}</div>} key={el.id}>
                            <div dangerouslySetInnerHTML={{__html:el.Description}} className='description'/>
                        </Panel>
                    )
                }):""

                }

               
            </Collapse>
        </div>
    )
}
export default FAQ