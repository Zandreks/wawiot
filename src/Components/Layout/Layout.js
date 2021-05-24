import React from 'react'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Head from "./Head";

let Layout = (props) => {
    return (
        <div className='LayoutComponent'>

            <div className='container-fluid-box'>
                <Head/>
                <hr className='line-layout'/>
                <div className=''>
                    <Header/>
                    {props.children}
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
export default Layout
