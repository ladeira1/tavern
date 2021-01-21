import React from 'react';
import { useLoading } from '../../contexts/Loading';
import BubbleLoader from '../BubbleLoader';
import { SubmitButton } from '../../shared/styles/formStyles';

const Button: React.FC<{ message: string }> = ({ message }) => {
  const { loading } = useLoading();

  return (
    <SubmitButton type="submit">
      {loading ? (
        <BubbleLoader color="#000" />
      ) : (
        <h3 className="buttonText">{message}</h3>
      )}
    </SubmitButton>
  );
};

export default Button;
