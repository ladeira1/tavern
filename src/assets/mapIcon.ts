import Leaflet from 'leaflet';
import icon from './images/map-pin.svg';

const mapIcon = Leaflet.icon({
  iconUrl: icon,
  iconSize: [30, 30],
  iconAnchor: [10, 30],
});

export default mapIcon;
