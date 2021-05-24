import React from "react";

let Specifications=({data})=>{
    return(
        <div className='Specifications-box'>
            {data && data.length>0? data.map(el=>{
                return(
                    <div key={el.id} className='row'>
                        <div className='col-md-4'>
                            <div className='key-item'>
                                {el.Key}
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div className='value-item'>
                                {el.Value}
                            </div>
                        </div>
                    </div>
                )
                })
            :""}



        </div>
    )
}

export default Specifications