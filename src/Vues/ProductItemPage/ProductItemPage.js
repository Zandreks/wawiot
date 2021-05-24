import React, {useState,useEffect} from "react"
import ImageGallery from 'react-image-gallery';
import {ReactComponent as Icon} from "../../Assets/icon/check 1.svg";
import {ReactComponent as IconBack} from "../../Assets/icon/basck.svg";
import {ReactComponent as IconLine} from "../../Assets/icon/line.svg";
import Specifications from "../../Components/Products/Specifications";
import Description from "../../Components/Products/Description";
import DocumentLIst from "../../Components/DocumentLIst/DocumentLIst";
import FAQ from "../../Components/FAQ/FAQ";
import {
    Link,
    useParams
} from "react-router-dom";
import axios from "axios";
import {message, Skeleton, Tabs} from "antd";
const { TabPane } = Tabs;

let ProductItemPage = () => {
    let { id } = useParams();

    let [images,setImages] = useState([])
    let [data,setData] = useState({})
    let getObject = ()=>{
        axios.get(`/api/rest/products/getObject/${id}`).then(res=>{

            if (res.data.status ===200){

                if (res.data.data.full_picture.length>0){
                    let dataImage = [...res.data.data.full_picture]
                    let newArr = []
                    for (let el of dataImage){
                        newArr.push(
                            {
                                original: `/uploads/${el.Name}`,
                                thumbnail: `/uploads/${el.Name}`,
                                thumbnailClass :"productThumbnailImg"
                            },
                        )
                    }
                    setImages(newArr)
                }
                setData(res.data.data)
            }else{
                message.error(res.data.message)

            }
        })
    }
    useEffect(()=>{
        getObject()
    },[])


    return (
        <div className='content-box-grid'>
            <div className='box-contents'>
                <Skeleton active paragraph={{
                    rows: 6
                }} loading={Object.keys(data).length === 0}>
                    <div className='product-page-item'>
                        <div className='head-boxProduct'>
                            <div className='bask-box'>
                                <Link to={'/products'}>
                                   <IconBack/> в каталог
                                </Link>
                            </div>
                            <div className='title-box-product'>
                                <div className='name'>
                                    {data.Title}
                                </div>
                                <div className='box'>
                                    <div className='line'>
                                        <IconLine/>
                                    </div>
                                    <div className={'subtitle-product'}>
                                        {data.Subtitle}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-5'>
                                <div className='carusel-img'>

                                    {images.length>0?<ImageGallery showNav={false} showPlayButton={false} items={images}/>:""}
                                </div>
                            </div>
                            <div className='col-md-7'>
                                <div className='box-description'>
                                    <div className='check-box'>
                                        {data.checklist && data.checklist.length>0? data.checklist.map(el=>{
                                            return(
                                                <div key={el.id} className='item-check'>
                                                    <div>
                                                        <Icon/>
                                                    </div>
                                                    <div>{el.Title} </div>
                                                </div>
                                            )
                                        }):""}

                                    </div>


                                </div>
                            </div>

                        </div>
                        <div className='tab-box'>
                            <Tabs defaultActiveKey="1" >
                                <TabPane tab="описание" key="1">
                                    <Description data={data.Description}/>
                                </TabPane>
                                <TabPane tab="характеристики" key="2">
                                    <Specifications data={data.specifications}/>
                                </TabPane>
                                <TabPane tab="документы" key="3">
                                    <DocumentLIst data={data.doc_file}/>
                                </TabPane>
                                <TabPane tab="ответы на вопросы" key="4">
                                    <FAQ data={data.faq_item}/>
                                </TabPane>
                            </Tabs>
                        </div>


                    </div>
                </Skeleton>
            </div>
        </div>

    )
}
export default ProductItemPage