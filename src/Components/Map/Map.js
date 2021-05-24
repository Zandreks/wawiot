import React, {useState, useEffect} from 'react'
import {
    YMaps,
    Map,
    Placemark,
    FullscreenControl,
    TypeSelector,
    ZoomControl,
    Clusterer
} from 'react-yandex-maps'
let MapPage =({data,setObjectSelect}) =>{
    let [selectObject,setSelectObject] = useState(0)
    useEffect(()=>{
        if (data.length>0){
            setObjectSelect(data[0])
            setSelectObject(data[0].id)
        }
    },[data])
    return(
        <div className='map' >
            <YMaps
                query={{
                    ns: 'use-load-option',
                    load:
                        'Map,Placemark,geoObject.addon.balloon,geoObject.addon.hint',
                }}

            >
                <Map
                    width="100%"
                    height={512}

                    defaultState={{
                        // type:"yandex#hybrid",
                        center: [51.150849, 71.419652],  zoom: 4.5,
                        controls: [],

                    }}
                    options={
                        {
                            autoFitToViewport: "Always"

                        }
                    }

                >
                    <Clusterer
                        options={{
                            preset: 'islands#invertedVioletClusterIcons',
                            groupByCoordinates: false,
                            maxZoom: 15
                        }}
                    >
                        {data.map(el=>{
                            return(
                                <Placemark
                                    onClick={() => setObjectSelect(el)}
                                    key={el.id}

                                    defaultGeometry={[el.Latitude, el.Longitude]}
                                    options={
                                        {
                                            preset:  'islands#darkGreenDotIcon',

                                        }
                                    }
                                    properties={{
                                        balloonContentHeader:el.Name,
                                        balloonContent: el.Address,

                                    }}
                                />
                            )
                        })}
                    </Clusterer>

                    <FullscreenControl  />

                    <TypeSelector  />
                    <ZoomControl />

                </Map>

            </YMaps>
        </div>
    )
}
export default MapPage