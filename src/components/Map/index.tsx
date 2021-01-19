import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Position } from '../../models/Position';
import mapIcon from '../../assets/mapIcon';

import ChangeCenter from './ChangeCenter';

const Map: React.FC<{ position: Position }> = ({ position }) => (
  <MapContainer
    center={[position.latitude, position.longitude]}
    zoom={16}
    dragging={false}
    scrollWheelZoom={false}
    style={{ width: '100%', height: 247, borderRadius: '5px', zIndex: 3 }}
  >
    <ChangeCenter position={position} />
    <TileLayer
      url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
    />
    <Marker
      interactive={false}
      icon={mapIcon}
      position={[position.latitude, position.longitude]}
    />
  </MapContainer>
);

export default Map;
