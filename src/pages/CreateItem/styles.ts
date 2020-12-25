import styled from 'styled-components';

export const Container = styled.article`
  height: 800px;
  width: 400px;
  background: red;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
export const Form = styled.form`
  background: blue;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Label = styled.label`
  color: black;
  font-size: 20px;
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  background: brown;
`;
export const Select = styled.select`
  height: 50px;
  background: yellow;
`;
export const Submit = styled.button`
  background: green;
  width: 100%;
  font-size: 30px;
`;
