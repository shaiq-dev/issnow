import React, {useEffect, useState} from 'react';
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { MapContainer,  TileLayer, Marker, Polyline } from "react-leaflet";

import GlobalStyles from './globalStyles'
import {IssNowWrapper} from './App.style'
import MapInitPose from './Components/MapInitPose'
import Satellite from './Utils/Satellite'
import Controller from './Components/Controller'
import store from './store';
import { StatsProps } from './types/issnow';

const App : React.FC = () => {

  const position : LatLngExpression = [0,0]
  const zoom = 5

  const [path, setPath] = useState<LatLngExpression[]>([]);
  const [satellitePose, setSatellitePose] = useState<LatLngExpression>([0,0]);
  const [stats, setStats] = useState<StatsProps>({
    coords: [0.0000, 0.0000],
    altitude: 421,
    velocity: 32413
  })

  useEffect(()=> {
    const source = new EventSource(store.serverURL + '/api/stream')
    
    source.onmessage = (e) => {
      const data = JSON.parse(e.data)
      const newPosition : LatLngExpression = [data.latitude, data.longitude]
      setSatellitePose(newPosition);
      setPath(prevPath => {
        return [...prevPath, newPosition];
      });
      setStats({
        coords: [data.latitude, data.longitude],
        altitude: Number.parseInt(data.altitude),
        velocity: Number.parseInt(data.velocity)
      })
    }

    source.onerror = (e) => {
      console.log(e)
    }
  }, [])

  
  return (
    <>
      <GlobalStyles />
      <IssNowWrapper>
        <Controller stats={stats} />
        <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{height: '100%'}}>
          <MapInitPose />
          <TileLayer
            attribution=""
            url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
            accessToken={store.mapBoxApi}
            maxZoom={18}
            id="shaiqkar/ckmmzh15518nu17klhwxo5efy"
            tileSize={512}
            zoomOffset={-1}
          />
          <Marker position={satellitePose} icon={Satellite} />
          <Polyline positions={path} color='red' smoothFactor={1} weight={4} />
        </MapContainer>
      </IssNowWrapper>
    </>
  );
}

export default App;
