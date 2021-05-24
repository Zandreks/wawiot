import React, {useEffect, useState} from "react";
import Feedback from "../../Components/Feedback/Feedback";
import Servises from  '../../Assets/img/Servises.png'
let ServisePage = ()=>{

    return(
        <div className='ServisePage'>
            <div   style={{
                backgroundImage:`url(${Servises})`
            }} className='img-content'>
                <div className='content-box-grid heitch'>
                    <div className={'head-title'}>
                        <div className='text'>
                            сервисная <br/>
                            служба
                        </div>
                    </div>
                </div>
            </div>
            <div className='content-box-grid'>
                <Feedback/>
            </div>
        </div>
    )
}
export default ServisePage