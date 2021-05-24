import React from 'react'
import BlokHello from "./BlokHello";
import Servise from "./Servise";
import News from "../../Components/News/NewsHome";
import ProductsBlok from "../../Components/Products/ProductBlok";
import PartnersBox from "../../Components/Partners/PartnersBoxHome";
import CaruselHome from "../../Components/CaruselHome/CaruselHome";
import Reviews from "../Reviews/Reviews";
import BlokHelloMobile from "./BlokHelloMobile";
let HomePage = ({history}) =>{
    return(
        <div>
           <BlokHello/>
           <BlokHelloMobile/>
           <CaruselHome/>
           {/*<Servise/>*/}
            <ProductsBlok history={history} />
            <PartnersBox/>
            <Reviews/>
           <News history={history}/>

        </div>
    )
}
export default HomePage
