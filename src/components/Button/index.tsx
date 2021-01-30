import React from 'react';
import { useLoading } from '../../contexts/Loading';
import BubbleLoader from '../BubbleLoader';
import { SubmitButton } from '../../shared/styles/formStyles';

const Button: React.FC<{ message: string; disabled: boolean }> = ({
  message,
  disabled,
}) => {
  const { loading } = useLoading();

  return (
    <SubmitButton type="submit" disabled={disabled}>
      {loading ? (
        <BubbleLoader color="#000" />
      ) : (
        <h3 className="buttonText">{message}</h3>
      )}
    </SubmitButton>
  );
};

export default Button;
