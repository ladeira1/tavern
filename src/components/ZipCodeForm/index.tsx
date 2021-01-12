import React, { useState } from 'react';
import {
  Container,
  Row,
  MapPinIcon,
  Button,
  InputWrapper,
  Text,
} from './styles';

import FormTextInput from '../FormTextInput';

const ZipCodeForm: React.FC = () => {
  const [zipcode, setZipcode] = useState('');
  const [state, setState] = useState('');
  const [street, setStreet] = useState('');
  const [cityName, setCityName] = useState('');
  const [houseNumber, setHouseNumber] = useState('');

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
        <Button>Search</Button>
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
      <Text>
        * If the zipcode search does not work, please add the information
        manually
      </Text>
    </Container>
  );
};

export default ZipCodeForm;
