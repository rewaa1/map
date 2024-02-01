// GoogleMapComponent.js
import React from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
  height: '100vh',
};

const center = {
  lat: 30.049163818359375,
  lng: 31.274309158325195,
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAYS52j1HWDYmpzxofh9AvnD3ys7PROAdU">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14} className="rounded-lg overflow-hidden shadow-lg">
        <Marker position={center} title="My location" />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
