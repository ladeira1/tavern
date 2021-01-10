/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import colors from '../../assets/colors';

export const Container = styled.div`
  height: 100%;
  min-height: 92vh;
  max-height: 92vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export const Wrapper = styled.main`
  max-width: 1200px;
  width: 95%;
  min-height: 90%;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  margin-top: calc(8vh + 2%);
  font-size: 10px;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1144px) {
    width: 100%;
  }
`;
export const LeftColumn = styled.article`
  flex: 7;
  max-width: 70%;

  .empty {
    min-height: 80px;
  }

  @media screen and (max-width: 1144px) {
    max-width: 100%;
  }
`;
export const Form = styled.form`
  max-width: 80%;
  h1 {
    font-size: 6em;
    font-family: 'Oswald', sans-serif;
    color: ${colors.white};
    margin-bottom: 0.5em;
  }
`;
export const ItemContainer = styled.div`
  border-bottom: 1px solid ${colors.formSecondary};
  padding-bottom: 1.5em;
  margin-bottom: 1.5em;
`;
export const Subtitle = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
  font-size: 3em;
  color: ${colors.text};
  margin-bottom: 0.5em;
`;
export const OptionsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 35%;
  margin-bottom: 1.5em;
  width: 100%;
`;
export const Option = styled.span<{ isCurrent: boolean }>`
  flex: 1;
  min-width: 150px;
  font-family: 'Oswald', sans-serif;
  font-size: 2em;
  color: ${props => (props.isCurrent ? colors.text : colors.formSecondary)};
  border-bottom: 1px solid ${props => (props.isCurrent ? colors.text : 'none')};
  text-align: center;
  margin-right: 1em;
  padding-bottom: 0.2em;
  transition: all ease 0.2s;

  :hover {
    cursor: ${props => (props.isCurrent ? 'auto' : 'pointer')};
    color: ${colors.white};
  }
`;
export const MapContainer = styled.div`
  min-height: 300px;
  width: 100%;
  border-radius: 5px;
  /* will soon be changed */
  background: red;
`;
export const PaymentOptionsContainer = styled.section`
  display: flex;
  margin-bottom: 1.5em;

  .left {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .right {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
export const PaymentOption = styled.div<{ isCurrent: boolean }>`
  min-width: 50%;
  height: 60px;
  border: 1px solid ${props => (props.isCurrent ? colors.white : 'none')};
  background-color: ${props => (props.isCurrent ? 'rgb(255, 255, 255, 0.15)' : colors.paymentOptions)};

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-family: 'Roboto Slab', sans-serif;
    color: ${props => (props.isCurrent ? colors.text : colors.formSecondary)};
    font-size: 2em;
  }

  :hover {
    cursor: ${props => (props.isCurrent ? 'auto' : 'pointer')};

    span {
      color: ${colors.white};
      opacity: 0.5;
    }
  }
`;
export const PaymentInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Text = styled.span`
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
  font-size: 2em;
  color: ${colors.formSecondary};
  line-height: 3em;

  .editable:hover {
    cursor: pointer;
  }
`;
export const Price = styled.span`
  font-family: 'Oswald', sans-serif;
  font-size: 1em;
  color: ${colors.formSecondary};
  background-color: ${colors.primary};
  padding: 8px;
  border-radius: 5px;
`;
export const CheckoutButton = styled.button`
  background: ${colors.text};
  width: 100%;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.2s;
  transform: scale(0.99);

  :hover {
    transform: scale(1);
  }
`;
export const CheckoutTitle = styled.h2`
  color: ${colors.black};
  font-family: 'Oswald', sans-serif;
  font-size: 2em;
  font-weight: 400;
`;
export const RightColumn = styled.article`
  flex: 2;
  padding-top: 2%;
  @media screen and (max-width: 1144px) {
    display: none;
  }
`;
