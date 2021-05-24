import React, {useEffect, useState} from 'react'
import Slider from "react-slick";
import next from '../../Assets/icon/Vector (1).png'
import prev from '../../Assets/icon/Vector.png'
import axios from "axios";
import {Form, Input, message, Modal} from "antd";
import InputMask from "react-input-mask";
let PartnersBox=({home})=>{
    let [data,setData] = useState([])
    let [visible, setVisible] = useState(false)
    let [loading, setLoading] = useState(false)
    let getObject = ()=>{
        axios.get('api/rest/partners/getObject/').then(res=>{
            if (res.data.status ===200){
                setData(res.data.data)
            }else{
                message.error(res.data.message)

            }
        })
    }
    useEffect(()=>{
        getObject()
    },[])

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style , height:0, display: "block"}}
                onClick={onClick}
            >
                <img src={next} alt=""/>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style,height:0, display: "block"}}
                onClick={onClick}
            >
                <img src={prev} alt=""/>
            </div>
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        arrows:true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [form] = Form.useForm()

    let showModal = () => {
        setVisible(true)
    };

    let handleOk = () => {
        setLoading(true)
        form
            .validateFields()
            .then(async (values) => {
                let body = {
                    "name": values.name,
                    "phone": values.phone,
                    "email": values.email
                }
                axios.post('api/rest/partners/becomePartner', body).then((res) => {
                    if (res.data.status === 200) {
                        message.success("Спасибо ваша заявка принята")
                        form.resetFields()
                        setLoading(false)
                        handleCancel()
                    }
                }).catch(error=>{
                    message.error(error.data.message)
                    setLoading(false)
                })
            })
            .catch(info => {
                // console.log('Validate Failed:', info)
            })

    }

    let handleCancel = () => {
        setVisible(false)
    };
    return (
        <div className='PartnersBox'>
            <div className='head'>
                <div className='title'>
                    Партнеры
                </div>
            </div>
            <div className='partners-carusel'>
                <Slider {...settings}>
                    {data.map(el=>{
                        return(
                            <div key={el.id}>
                                <a target='_blank' href={el.Link}><img className='carusel-img-item' src={`/uploads/${el.Logo}`} alt=""/></a>
                            </div>
                        )
                    })}

                </Slider>

            </div>
            <div className='box-text-partners'>
                <hr/>
                <div className='title'>
                    Хотите стать нашим партнером?
                </div>
                <div className='box-flex'>
                    <div className='dicription'>
                        Присоединись к партнерской сети Waviot, стань дилером и представителем компании
                    </div>
                    <div className='action-box'>
                        <button className="btn button-action-bg-body" onClick={showModal} type="button">Стать партнером</button>
                    </div>
                </div>
            </div>
            <Modal
                visible={visible}
                title="Стать партнером"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <button onClick={handleCancel} disabled={loading} className='btn button-action-body' >Отмена </button>,
                    <button onClick={handleOk} disabled={loading} className='btn button-action-bg-body'>Оставить заявку</button>,
                ]}
            >
                <div className='form-box'>
                    <Form
                        form={form}
                        layout="vertical"
                        name="form_in_modal"
                        initialValues={{
                            modifier: 'public',
                        }}
                    >
                        <Form.Item
                            name="name"
                            label="Имя"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input className='form-control'  placeholder='Введите Имя' />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label={"Телефон"}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <InputMask className='form-control' style={{width: "100%"}} mask="+7 (999) 999 99 99" placeholder='Введите номер'  />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="Почта"
                            rules={[
                                {
                                    required: true,
                                    type: 'email',

                                },
                            ]}
                        >
                            <Input className='form-control'  placeholder='Введите почту' />
                        </Form.Item>

                    </Form>
                </div>
            </Modal>

        </div>
    )
}
export default PartnersBox