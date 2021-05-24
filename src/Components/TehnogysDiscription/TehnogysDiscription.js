import React, {useEffect, useState} from 'react'
import {Carousel} from '3d-react-carousal';
import {ReactComponent as Icon} from '../../Assets/icon/check 1.svg'


let TehnogysDiscription = ({data, btn })=>{
    let [slides,setSlides] = useState([])
    useEffect(()=>{
        if(!!data.full_picture && data.full_picture.length>0 ){
            let newData = []

            for (let val of data.full_picture){
                newData.push(
                    <img key={val.id} className='ing-curesel' src={`/uploads/${val.Name}`} alt=""/>
                )
            }

            setSlides(newData)
        }
    },[data])
    return(
        <div className='TehnogysDiscription'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='title'>
                        {data.technology && data.technology.Title}
                    </div>
                    <div dangerouslySetInnerHTML={{__html:data.technology && data.technology.Description}} className='description'/>
                    {data.checklist && data.checklist.map(el=>{
                        return (
                            <div key={el.id} className='item-chec'>
                                <Icon/> <span>{el.Title} </span>
                            </div>
                        )
                    })}
                    {btn===true?                    <div className='action-box'>
                        <a href={'https://wingate.winext.kz/login'} target="_blank" className="btn button-action-bg-body" >Подробнее</a>
                    </div>:""}

                </div>
                <div className='col-md-8'>
                    <div className='cerusel-img'>
                        {slides.length>0?<Carousel slides={slides} autoplay={true} interval={3000}/>:""}

                    </div>
                </div>
            </div>
        </div>
    )
}
export default TehnogysDiscription
