import React from 'react';
import { useLoading } from '../../contexts/Loading';
import BubbleLoader from '../BubbleLoader';
import { SubmitButton } from '../../shared/styles/formStyles';

interface Button {
  message: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Button> = ({
  message,
  disabled = false,
  type = 'submit',
}) => {
  const { loading } = useLoading();

  return (
    <SubmitButton type={type} disabled={disabled}>
      {loading ? (
        <BubbleLoader color="#000" />
      ) : (
        <h3 className="buttonText">{message}</h3>
      )}
    </SubmitButton>
  );
};

export default Button;
