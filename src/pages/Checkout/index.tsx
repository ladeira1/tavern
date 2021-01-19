/* eslint-disable prettier/prettier */
import React, { useLayoutEffect, useState } from 'react';
import {
  Container,
  Wrapper,
  LeftColumn,
  Form,
  ItemContainer,
  Subtitle,
  OptionsContainer,
  Option,
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
import Map from '../../components/Map';
import ZipCodeForm from '../../components/ZipCodeForm';
import Popup from '../../components/Popup';
import { Position } from '../../models/Position';

type Destination = 'CURRENT_LOCATION' | 'ADDRESS';
type PaymentMethod = 'CASH' | 'CREDIT_CARD';

const Checkout: React.FC = () => {
  const { readStoragedItems, totalPrice } = useBag();

  const [destinationOption, setDestinationOption] = useState<Destination>(
    'ADDRESS',
  );
  const [paymentMethodOption, setPaymentMethodOption] = useState<PaymentMethod>(
    'CASH',
  );
  const [popupVisible, setPopupVisible] = useState(false);

  const [position, setPosition] = useState<Position>({ latitude: 0, longitude: 0 });
  const [change, setChange] = useState(totalPrice);

  const getUserLocation = async () => {
    navigator.geolocation.getCurrentPosition(location => {
      const { latitude, longitude } = location.coords;
      setPosition({ latitude, longitude });
    });
  };

  const handleDestinationChange = (option: Destination) => {
    if (option === destinationOption) {
      return;
    }

    if (option === 'CURRENT_LOCATION') {
      getUserLocation();
    }
    setDestinationOption(option);
  };

  const handlePaymentMethodChange = (option: PaymentMethod) => {
    if (option === paymentMethodOption) {
      return;
    }

    setPaymentMethodOption(option);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPopupVisible(true);
  };

  useLayoutEffect(() => {
    getUserLocation();
    readStoragedItems();
  }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        <LeftColumn>
          <Form onSubmit={handleSubmit}>
            <h1>Finish your request</h1>
            <ItemContainer>
              <Subtitle>Select destination</Subtitle>
              <OptionsContainer>
                <Option
                  isCurrent={destinationOption === 'ADDRESS'}
                  onClick={() => handleDestinationChange('ADDRESS')}
                >
                  Address
                </Option>
                <Option
                  isCurrent={destinationOption === 'CURRENT_LOCATION'}
                  onClick={() => handleDestinationChange('CURRENT_LOCATION')}
                >
                  Current location
                </Option>
              </OptionsContainer>
              {destinationOption === 'CURRENT_LOCATION' &&
                position.latitude !== 0 &&
                position.longitude !== 0 && (
                  <Map position={position} />
              )}
              {destinationOption === 'ADDRESS' && (
                <ZipCodeForm position={position} setPosition={setPosition}/>
              )}
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
          <Bag action={() => setPopupVisible(true)} />
        </RightColumn>
      </Wrapper>
      <MobileBag />
      {popupVisible && <Popup setPopupVisible={setPopupVisible} />}
    </Container>
  );
};

export default Checkout;
