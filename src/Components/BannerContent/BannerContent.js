import React from "react";
import img from '../../Assets/img/fon.png'
let BannerContent = ({data}) =>{
    return(
        <div className='BannerContent'>
            <h2>
                {data.Title}
            </h2>
            <div className='logo'>
                <img src={`/uploads/${data.Full_Pic}`} alt=""/>
            </div>
            <div dangerouslySetInnerHTML={{__html:data.Description}}   className='description'/>

        </div>
    )
}
export default BannerContent