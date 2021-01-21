import styled from 'styled-components';
import ReactLoading from 'react-loading';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const Loader = styled(ReactLoading).attrs({
  type: 'bubbles',
  height: 40,
  width: 40,
})``;
