import Axios from 'axios';
import PositionResponse from '../models/PositionResponse';

const getFormattedString = (text: string) => text.replace(/\s/g, '%20');

export default {
  searchByAddress: async (
    houseNumber: string,
    street: string,
    city: string,
    state: string,
  ): Promise<PositionResponse> => {
    const formattedLocationData = `${houseNumber}%20${getFormattedString(
      street,
    )}%20${getFormattedString(city)}%20${state}`;

    const result = await Axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${formattedLocationData}.json?types=address&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`,
    );

    const position = result.data.features[0];

    if (!position) {
      return { type: 'ERROR', message: 'Invalid place' };
    }

    return {
      type: 'SUCCESS',
      body: {
        latitude: position.center[1].toFixed(4),
        longitude: position.center[0].toFixed(4),
      },
    };
  },
};
