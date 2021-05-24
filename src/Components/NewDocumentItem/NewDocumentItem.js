import React from 'react'
import {ReactComponent as Icon} from "../../Assets/icon/downs.svg";
import {ReactComponent as IconFile} from "../../Assets/icon/2file_pdf.svg";

let NewDocumentItem = ({data}) =>{
    return(
        <div className='document-item'>
           <div className='head-box-doc'>
               <div className='icon'>
                    <IconFile/>
               </div>
               <div className='title'>
                   {data.Name}

               </div>
           </div>
            <div className='footerDocument'>
                <div className='link'>
                    <a  href={`/uploads/${data.Name}`} download target='_blank'>скачать <Icon style={{
                        marginLeft:12
                    }}/></a>
                </div>
            </div>
        </div>
    )
}
export default NewDocumentItem