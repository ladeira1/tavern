/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { StyledComponent } from 'styled-components';
import { InputWrapper, Input } from './styles';

const handleInputFocus = (
  setState: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  setState(true);
};

const handleInputBlur = (
  setState: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  setState(false);
};

interface PropsInterface {
  Icon: StyledComponent<any, any, any>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  type: string;
}

const FormTextInput: React.FC<PropsInterface> = ({
  Icon,
  text,
  setText,
  placeholder,
  type,
}) => {
  const [selected, setSelected] = useState(false);

  return (
    <InputWrapper
      htmlFor={text}
      onFocus={() => handleInputFocus(setSelected)}
      onBlur={() => handleInputBlur(setSelected)}
      selected={selected}
    >
      <Icon selected={selected} />
      <Input
        id={text}
        type={type}
        placeholder={placeholder}
        selected={selected}
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </InputWrapper>
  );
};

export default FormTextInput;
