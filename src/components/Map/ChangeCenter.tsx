import React from 'react';
import { useMap } from 'react-leaflet';
import { Position } from '../../models/Position';

const ChangeCenter: React.FC<{
  position: Position;
}> = ({ position }) => {
  const map = useMap();
  map.setView([position.latitude, position.longitude], 16);

  return null;
};

export default ChangeCenter;
