import React from 'react'
let ContactData = ({data}) =>{
    return(
        <div className='ContactData'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='title'>
                        Адрес
                    </div>
                    {data.length > 0 ?data.map(el=>                    <div className='description'>
                        {el.Address !== null ? el.Address:""}
                    </div> ):""}

                </div>
                <div className='col-md-5'>
                    <div className='title'>
                        Номер телефона
                    </div>
                    <div className='row'>
                        {data.length > 0 ?data.map(el=>                   <div className='col-6'> <div className='description'>
                            {el.Contacts !== null ? el.Contacts:""}
                        </div></div> ):""}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactData