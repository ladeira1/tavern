import React, { useState } from 'react';
import { InputWrapper, Input } from './styles';

const handleInputClick = (
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
  Icon: any;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const FormTextInput: React.FC<PropsInterface> = ({ Icon, text, setText }) => {
  const [selected, setSelected] = useState(false);

  return (
    <InputWrapper
      onClick={() => handleInputClick(setSelected)}
      onBlur={() => handleInputBlur(setSelected)}
      selected={selected}
    >
      <Icon selected={selected} />
      <Input
        type="text"
        placeholder="Name"
        selected={selected}
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </InputWrapper>
  );
};

export default FormTextInput;
