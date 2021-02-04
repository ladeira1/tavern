import React, { useState } from 'react';
import { Label, ListIcon, Select } from '../../shared/styles/formStyles';

interface Option {
  type: string;
  text: string;
}

interface FormSelectInput {
  placeholder?: string;
  options: Option[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const FormSelectInput: React.FC<FormSelectInput> = ({
  placeholder = '',
  options,
  value,
  setValue,
}) => {
  const [selected, setSelected] = useState(false);

  return (
    <Label
      htmlFor="type"
      onFocus={() => setSelected(true)}
      onBlur={() => setSelected(false)}
      selected={selected}
      height="60px"
    >
      <ListIcon selected={selected} />
      <Select
        id="type"
        selected={selected}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
      >
        {options.map(currentOption => (
          <option value={currentOption.type}>{currentOption.text}</option>
        ))}
      </Select>
    </Label>
  );
};

export default FormSelectInput;
