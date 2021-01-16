import React, { useState, useLayoutEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import Axios from 'axios';
import {
  Container,
  Row,
  MapPinIcon,
  Button,
  InputWrapper,
  Text,
} from './styles';

import FormTextInput from '../FormTextInput';
import mapIcon from '../../assets/mapIcon';

interface Position {
  latitude: number;
  longitude: number;
}

const ChangeCenter: React.FC<{ position: Position }> = ({ position }) => {
  const map = useMap();
  map.setView([position.latitude, position.longitude], 16);

  return null;
};

const ZipCodeForm: React.FC<{
  position: Position;
}> = ({ position }) => {
  const [zipcode, setZipcode] = useState('');
  const [state, setState] = useState('');
  const [street, setStreet] = useState('');
  const [cityName, setCityName] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [customPosition, setCustomPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  const handleSearchByZipCode = () => {
    // eslint-disable-next-line no-console
    console.log('todo');
  };

  const handleSetDestinationPosition = async () => {
    // eslint-disable-next-line no-console
    console.log('todo');

    const temp = await Axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Francisco.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`,
    );

    const temp2 = temp.data.features[0].center;

    setCustomPosition({
      latitude: temp2[1].toFixed(4),
      longitude: temp2[0].toFixed(4),
    });
  };

  useLayoutEffect(() => {
    setCustomPosition({
      latitude: position.latitude,
      longitude: position.longitude,
    });
  }, []);

  return (
    <Container>
      <Row>
        <FormTextInput
          Icon={MapPinIcon}
          text={zipcode}
          setText={setZipcode}
          placeholder="Put your zip code here"
          type="number"
        />
        <Button width="30%" onClick={handleSearchByZipCode}>
          Search
        </Button>
      </Row>
      <Row>
        <InputWrapper width="40%">
          <FormTextInput
            text={state}
            setText={setState}
            placeholder="State abbr."
            type="text"
          />
        </InputWrapper>
        <InputWrapper width="57%">
          <FormTextInput
            text={street}
            setText={setStreet}
            placeholder="Street name"
            type="text"
          />
        </InputWrapper>
      </Row>
      <Row>
        <InputWrapper width="70%">
          <FormTextInput
            text={cityName}
            setText={setCityName}
            placeholder="City name"
            type="text"
          />
        </InputWrapper>
        <InputWrapper width="27%">
          <FormTextInput
            text={houseNumber}
            setText={setHouseNumber}
            placeholder="House nº"
            type="number"
          />
        </InputWrapper>
      </Row>
      <Row style={{ marginBottom: 15 }}>
        <Text>
          * If the zipcode search does not work, please add the information
          manually
        </Text>
        <Button width="70%" onClick={handleSetDestinationPosition}>
          Confirm
        </Button>
      </Row>
      {customPosition.latitude !== 0 && customPosition.longitude !== 0 && (
        <MapContainer
          center={[customPosition.latitude, customPosition.longitude]}
          zoom={16}
          scrollWheelZoom={false}
          dragging={false}
          style={{ width: '100%', height: 247, borderRadius: '5px' }}
        >
          <ChangeCenter position={customPosition} />
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
          <Marker
            interactive={false}
            icon={mapIcon}
            position={[customPosition.latitude, customPosition.longitude]}
          />
        </MapContainer>
      )}
    </Container>
  );
};

export default ZipCodeForm;
