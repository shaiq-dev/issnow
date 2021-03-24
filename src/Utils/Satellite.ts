import L from "leaflet"
import satelliteIcon from '../assets/satellite.png'

const Satellite = new L.Icon({
    iconUrl: satelliteIcon,
    iconRetinaUrl: satelliteIcon,
    iconSize: new L.Point(50,50),
    iconAnchor: [25,25]
})

export default Satellite