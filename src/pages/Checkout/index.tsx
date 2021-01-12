import React, { useEffect, useState } from 'react';
import {
  Container,
  Wrapper,
  LeftColumn,
  Form,
  ItemContainer,
  Subtitle,
  OptionsContainer,
  Option,
  MapContainer,
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

type Destination = 'CURRENT_LOCATION' | 'ZIPCODE';
type PaymentMethod = 'CASH' | 'CREDIT_CARD';

const Checkout: React.FC = () => {
  const { readStoragedItems } = useBag();

  const [destinationOption, setDestinationOption] = useState<Destination>(
    'CURRENT_LOCATION',
  );
  const [paymentMethodOption, setPaymentMethodOption] = useState<PaymentMethod>(
    'CASH',
  );

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

  useEffect(() => {
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
                  isCurrent={destinationOption === 'CURRENT_LOCATION'}
                  onClick={() => handleDestinationChange('CURRENT_LOCATION')}
                >
                  Current location
                </Option>
                <Option
                  isCurrent={destinationOption === 'ZIPCODE'}
                  onClick={() => handleDestinationChange('ZIPCODE')}
                >
                  Zip code
                </Option>
              </OptionsContainer>
              {destinationOption === 'CURRENT_LOCATION' && <MapContainer />}
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
                  <Text>Value: 45.90</Text>
                </PaymentInformation>
              )}
              {paymentMethodOption === 'CASH' && (
                <PaymentInformation>
                  <Text>Value: 50.00</Text>
                  <Text>
                    Change for: <Price className="editable">100.00</Price>
                  </Text>
                  <Text>
                    Change: <Price>50.00</Price>
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
