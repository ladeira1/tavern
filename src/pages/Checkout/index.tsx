import React, { useLayoutEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {
  Container,
  Wrapper,
  LeftColumn,
  Form,
  ItemContainer,
  Subtitle,
  OptionsContainer,
  Option,
  // MapContainer,
  PaymentOptionsContainer,
  PaymentOption,
  PaymentInformation,
  Text,
  Price,
  CheckoutButton,
  CheckoutTitle,
  RightColumn,
} from './styles';
import { useBag } from '../../contexts/Bag';

import Header from '../../components/Header';
import Bag from '../../components/Bag';
import MobileBag from '../../components/MobileBag';
import ZipCodeForm from '../../components/ZipCodeForm';

import mapIcon from '../../assets/mapIcon';

type Destination = 'CURRENT_LOCATION' | 'ZIPCODE';
type PaymentMethod = 'CASH' | 'CREDIT_CARD';

const Checkout: React.FC = () => {
  const { readStoragedItems, totalPrice } = useBag();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [destinationOption, setDestinationOption] = useState<Destination>(
    'ZIPCODE',
  );
  const [paymentMethodOption, setPaymentMethodOption] = useState<PaymentMethod>(
    'CASH',
  );
  const [change, setChange] = useState(totalPrice);

  const handleDestinationChange = (option: Destination) => {
    if (option === destinationOption) {
      return;
    }
    setDestinationOption(option);
  };

  const handlePaymentMethodChange = (option: PaymentMethod) => {
    if (option === paymentMethodOption) {
      return;
    }

    setPaymentMethodOption(option);
  };

  useLayoutEffect(() => {
    const getUserLocation = async () => {
      navigator.geolocation.getCurrentPosition(location => {
        const { latitude, longitude } = location.coords;
        setPosition({ latitude, longitude });
      });
    };

    getUserLocation();
    readStoragedItems();
  }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        <LeftColumn>
          <Form>
            <h1>Finish your request</h1>
            <ItemContainer>
              <Subtitle>Select destination</Subtitle>
              <OptionsContainer>
                <Option
                  isCurrent={destinationOption === 'ZIPCODE'}
                  onClick={() => handleDestinationChange('ZIPCODE')}
                >
                  Zip code
                </Option>
                <Option
                  isCurrent={destinationOption === 'CURRENT_LOCATION'}
                  onClick={() => handleDestinationChange('CURRENT_LOCATION')}
                >
                  Current location
                </Option>
              </OptionsContainer>
              {destinationOption === 'CURRENT_LOCATION' && (
                <MapContainer
                  center={[position.latitude, position.longitude]}
                  zoom={16}
                  scrollWheelZoom={false}
                  style={{ width: '100%', height: 247, borderRadius: '5px' }}
                >
                  <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                  />
                  <Marker
                    interactive={false}
                    icon={mapIcon}
                    position={[position.latitude, position.longitude]}
                  />
                </MapContainer>
              )}
              {destinationOption === 'ZIPCODE' && <ZipCodeForm />}
            </ItemContainer>
            <ItemContainer>
              <Subtitle>Payment method</Subtitle>
              <PaymentOptionsContainer>
                <PaymentOption
                  className="left"
                  isCurrent={paymentMethodOption === 'CASH'}
                  onClick={() => handlePaymentMethodChange('CASH')}
                >
                  <span>Cash</span>
                </PaymentOption>
                <PaymentOption
                  className="right"
                  isCurrent={paymentMethodOption === 'CREDIT_CARD'}
                  onClick={() => handlePaymentMethodChange('CREDIT_CARD')}
                >
                  <span>Credit card</span>
                </PaymentOption>
              </PaymentOptionsContainer>
              {paymentMethodOption === 'CREDIT_CARD' && (
                <PaymentInformation>
                  <Text>Value: {totalPrice}</Text>
                </PaymentInformation>
              )}
              {paymentMethodOption === 'CASH' && (
                <PaymentInformation>
                  <Text>Value: {totalPrice}</Text>
                  <Text>
                    Change for:
                    <Price
                      className="editable"
                      type="number"
                      value={change.toFixed(2)}
                      onChange={e => setChange(Number(e.target.value))}
                    />
                  </Text>
                  <Text>
                    Change:{' '}
                    <Price
                      readOnly
                      value={(change - totalPrice).toFixed(2)}
                      type="number"
                      contentEditable={false}
                    />
                  </Text>
                </PaymentInformation>
              )}
            </ItemContainer>
            <CheckoutButton type="submit">
              <CheckoutTitle>Checkout</CheckoutTitle>
            </CheckoutButton>
          </Form>
        </LeftColumn>
        <RightColumn>
          <Bag />
        </RightColumn>
      </Wrapper>
      <MobileBag />
    </Container>
  );
};

export default Checkout;
