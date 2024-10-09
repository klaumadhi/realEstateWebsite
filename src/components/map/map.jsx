import { MapContainer } from "react-leaflet"
import "./map.scss"
import { Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import Pin from "../pin/pin"


export default function Map({items}) {
  return (

        <MapContainer className="map" center={[ 51.5074,-0.1278]} zoom={7} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {items.map(item=> <Pin item={item} key={item.id}/>)}
        </MapContainer>
  )
}
