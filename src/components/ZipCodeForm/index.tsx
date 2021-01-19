import React, { useState, useLayoutEffect } from 'react';
import { Container, Row, Button, InputWrapper, Text } from './styles';

import FormTextInput from '../FormTextInput';
import Map from '../Map';

import mapbox from '../../services/mapbox';

import { Position } from '../../models/Position';

const ZipCodeForm: React.FC<{
  position: Position;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
}> = ({ position, setPosition }) => {
  const [state, setState] = useState('');
  const [street, setStreet] = useState('');
  const [cityName, setCityName] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [customPosition, setCustomPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  const handleSetDestinationPosition = async () => {
    if (!houseNumber || !street || !cityName || !state) {
      return;
    }

    const result = await mapbox.searchByAddress(
      houseNumber,
      street,
      cityName,
      state,
    );
    setCustomPosition(result);
    setPosition(result);
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
      <Row>
        <Text>
          * Please inform the address you want your food to be delivered at
        </Text>
        <Button onClick={handleSetDestinationPosition}>Confirm</Button>
      </Row>
      {customPosition.latitude !== 0 && customPosition.longitude !== 0 && (
        <Map position={customPosition} />
      )}
    </Container>
  );
};

export default ZipCodeForm;
