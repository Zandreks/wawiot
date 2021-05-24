import React from "react";
import {Link} from 'react-router-dom'
import logo from '../../Assets/img/logoH.png'

let HeaderLogin = () => {
    return (

        <div className='login-header'>
            <Link to={'/'}>
                <div className='logo-login-box'>
                    <div>
                        <img src={logo} alt=""/>
                    </div>

                </div>
            </Link>

        </div>

    )
}
export default HeaderLogin
