import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { MapContainer, TileLayer, Marker, Popup, Circle, Icon } from 'react-leaflet';
import Leaflet from 'leaflet';


const circleCenter = [52.8687126, 18.0255176];
const fillBlueOptions = { 
  fillColor: 'hsl(49, 100%, 49%)', 
  color: 'hsl(49, 100%, 49%)'
};

const RenoveraMap = () => {
  const { file: {childImageSharp: {fixed: {src: image}}}} = useStaticQuery(graphql`
      {
      file(name: {regex: "/logo/i"}) {
        childImageSharp {
          fixed(height: 100, quality: 90){
            src
          }
        }
      }
    }
  `);
  console.log(image);
  // const MyIcon = Leaflet.Icon({
  //   iconUrl: image,
  //   iconSize: [38, 95],
  //   iconAnchor: [22, 94],
  //   popupAnchor: [-3, -76],
  // });

  

  if (typeof window !== 'undefined') {
    return (
      <MapContainer 
        style={{height: '400px'}} 
        center={[52.8687126, 18.0255176]} 
        zoom={7} 
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={circleCenter} pathOptions={fillBlueOptions} radius={100000} />
        <Marker position={[52.8687126, 18.0255176]}>
          <Popup>
            Renovera
          </Popup>
        </Marker>
      </MapContainer>
    )
  }
  return null
}

export default RenoveraMap;