import React from "react";
import {ReactComponent as Icon} from "../../Assets/icon/file_pdf.svg";

let DocumentLIst = ({data})=>{
    return(
        <div className='DocumentLIst'>
            {data && data.length>0? data.map(el=>{
                return(
                    <div key={el.id} className='documemt-item'>
                        <a  href={`/uploads/${el.Name}`} download target='_blank'><Icon/>{el.Name}</a>
                    </div>
                )
            }):""
            }

        </div>
    )
}
export default DocumentLIst