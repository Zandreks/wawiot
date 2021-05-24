import React from "react";
let Description = ({data})=>{
    return(
        <div style={{
            fontFamily: "Roboto",
            color: "#282828",
            fontStyle:"normal",
            fontSize:24,
            fontWeight:"normal"
        }} dangerouslySetInnerHTML={{__html:data}}   className='description-text'/>
    )
}
export default Description