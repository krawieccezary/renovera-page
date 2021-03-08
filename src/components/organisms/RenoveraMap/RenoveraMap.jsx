import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const RenoveraMap = () => {
    if (typeof window !== 'undefined') {
      return (
        <MapContainer style={{height: '400px'}} center={[52.8687126, 18.0255176]} zoom={7} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[52.8687126, 18.0255176]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )
    }
    return null
}

export default RenoveraMap;