import { useMap } from "react-leaflet";

import {useEffect} from 'react';
import axiosInstance from '../Utils/axios'
import { LatLngExpression } from "leaflet";

const MapInitPose: React.FC  = () => {
    const map = useMap();

    useEffect(()=>{
      axiosInstance.get('/api/pose/', {
          headers: {
            "Content-Type": "application/json"
          },
        }).then(response => {
          const initialPose : LatLngExpression = [response.data.latitude, response.data.longitude]
          const zoom = response.data.above_water ? 4 : 8;
          map.setView(initialPose, zoom, {animate: true})
        })
      }, [])

    return null
}

export default MapInitPose;