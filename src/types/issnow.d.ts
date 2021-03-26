import { LatLngExpression } from "leaflet"

type Coordinates = {
    latitude : number
    longitude: number
}

type StatsProps = {
    coords : [number, number]
    altitude: number
    velocity: number
}
