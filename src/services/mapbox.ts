import Axios from 'axios';
import { Position } from '../models/Position';

const getFormattedString = (text: string) => text.replace(/\s/g, '%20');

export default {
  searchByAddress: async (
    houseNumber: string,
    street: string,
    city: string,
    state: string,
  ): Promise<Position> => {
    const formattedLocationData = `${houseNumber}%20${getFormattedString(
      street,
    )}%20${getFormattedString(city)}%20${state}`;

    const result = await Axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${formattedLocationData}.json?types=address&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`,
    );

    return {
      latitude: result.data.features[0].center[1].toFixed(4),
      longitude: result.data.features[0].center[0].toFixed(4),
    };
  },
};
