import React, {useState} from "react";
import {Form, Input, message} from "antd";
import axios from "axios";
import ReactQuill, {Quill} from "react-quill";
import {Map, Placemark, YMaps, Button, GeolocationControl, TypeSelector, ZoomControl} from "react-yandex-maps";

var Block = Quill.import('blots/block');
Block.tagName = 'DIV';
Quill.register(Block, true);
let ObjectItem = ({data, getObject}) => {
    let [loading, setLoading] = useState(false)
    const [dataCordinat, setDataCordinat] = useState([51.150849, 71.419652]);
    const [dataCordinat2, setDataCordinat2] = useState([]);

    const [stateMapGps, setStateMap] = useState([51.150849, 71.419652]);
    const [zoomMap, setZoomMap] = useState(4.5);
    const [latitude, setlatitude] = useState(0);
    const [longitude, setlongitude] = useState(0);
    const [form] = Form.useForm()

    let longitudeChenge = (val)=>{
        let gps = []
        gps[1]=val.target.value
        gps[0]= latitude
        setlongitude(val.target.value)
        setDataCordinat2(gps)
        setStateMap(gps)
        setZoomMap(17)

    }
    let latitudeChenge = (val)=>{
        let gps = []
        gps[0]=val.target.value
        gps[1]= longitude
        setlatitude(val.target.value)
        setDataCordinat2(gps)
        setStateMap(gps)
        setZoomMap(17)
    }
    let onBoundsChange = e => {
        setDataCordinat(e.get('target').getCenter())
        setZoomMap(e.get('target').getZoom())
    }
    let onButton=()=>{
        form.setFieldsValue({
            latitude: dataCordinat[0],
            longitude:dataCordinat[1]
        })
        setDataCordinat2(dataCordinat)
    }
    let gpsGet=()=>{
        function success(position) {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
            setStateMap([latitude,longitude])
            setZoomMap(17)
        }

        function error() {
            message.warning('Не удалось определить ваше местоположение')
        }

        if(!navigator.geolocation) {
            message.warning("Геолокация не поддерживается вашим браузером")
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }
    let deleteCgek = ()=>{
        axios.delete(`api/rest/objects/objectDelete/${data.id}`,{
            headers:{
                "x-access-token":localStorage.getItem('key')
            }
        }).then((res) => {
            if (res.data.status === 200) {
                message.success("Запрос выполнен")
                setLoading(false)
                getObject()
            }
        }).catch(error=>{
            message.error(error.response.data.message)
            setLoading(false)
        })

    }
    let onDragGps = (data)=>{
        setDataCordinat2(data)
        form.setFieldsValue({
            latitude: data[0],
            longitude:data[1]
        })
    }
    const senddata = () => {

        form
            .validateFields()
            .then(async (values) => {
                setLoading(true)
                let body = {
                    "Name": values.Name,
                    "Resource": values.Resource,
                    "Address": values.Address,
                    "Contacts": values.Contacts,
                    "Work_Hours": values.Work_Hours,
                    "Longitude": values.longitude,
                    "Latitude": values.latitude,
                }
                axios.put(`api/rest/objects/objectUpdate/${data.id}`, body, {
                    headers: {
                        "x-access-token": localStorage.getItem('key')
                    }
                }).then((res) => {
                    if (res.data.status === 200) {
                        message.success("Запрос выполнен")
                        getObject()

                        setLoading(false)
                    }
                }).catch(error => {
                    message.error(error.response.data.message)
                    setLoading(false)
                })


            })
            .catch(info => {
                // console.log('Validate Failed:', info)
            })
    }
    return (
        <div>
            <div className='form-box admin-border'>
                {data === undefined ? '' :
                    <Form
                        form={form}
                        layout="vertical"
                        name={"formObject"+data.id}
                        initialValues={{
                            modifier: 'public',
                            Name: data.Name,
                            Resource: data.Resource,
                            Address: data.Address,
                            Contacts: data.Contacts,
                            Work_Hours: data.Work_Hours,
                            longitude: data.Longitude,
                            latitude: data.Latitude,

                        }}
                    >
                        <Form.Item
                            name="Name"
                            label={"Наименование"}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="Resource"
                            label="Ресурс"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="Address"
                            label="Адрес"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="Contacts"
                            label="Контакты"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="Work_Hours"
                            label="Режим работы"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <ReactQuill value={""} onChange={(va)=>null}  />
                        </Form.Item>
                        <Form.Item
                            name="latitude"
                            label="Широта"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input step={0.5} onChange={latitudeChenge} type='number'/>
                        </Form.Item>
                        <Form.Item
                            name="longitude"
                            label="Долгота"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input step={0.5} onChange={longitudeChenge} type='number'/>
                        </Form.Item>
                        <YMaps
                            query={{
                                ns: 'use-load-option',
                                load:
                                    'Map,Placemark,geoObject.addon.balloon,geoObject.addon.hint',
                            }}
                        >
                            <Map
                                width="100%"
                                onBoundsChange={onBoundsChange}
                                height={ 300}

                                state={{
                                    type:"yandex#hybrid",
                                    center: stateMapGps, zoom:zoomMap,
                                    controls: [],

                                }}
                                options={
                                    {
                                        autoFitToViewport: "Always"

                                    }
                                }

                            >


                                <TypeSelector options={{

                                }}   />
                                <ZoomControl options={{

                                }}  />
                                <Button
                                    options={{ maxWidth: 300,selectOnClick:false }}
                                    data={{ content: 'Установить метку' }}
                                    onClick={onButton}
                                />
                                <GeolocationControl
                                    onClick={gpsGet}
                                />

                                {dataCordinat2.length>0?<Placemark
                                    options={{
                                        draggable:true,
                                        preset:"islands#darkGreenDotIcon"
                                    }}
                                    onDragEnd={e => onDragGps(e.get('target').geometry.getCoordinates())}

                                    geometry={dataCordinat2} />:null}

                            </Map>
                        </YMaps>
                        <button type='submit' disabled={loading} onClick={senddata} style={{
                            marginTop: 10,
                            marginRight: 10
                        }}
                                className="btn button-action-bg-body"> Сохранить
                        </button>
                        <button type='button' disabled={loading} onClick={deleteCgek} style={{
                            marginTop: 10
                        }}
                                className="btn button-action-body"> Удалить</button>
                    </Form>}
            </div>
        </div>
    )
}
export default ObjectItem