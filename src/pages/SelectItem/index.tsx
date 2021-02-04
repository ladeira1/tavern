import React, { useState } from 'react';
import {
  Container,
  Wrapper,
  Title,
  FilterContainer,
  FilterWrapper,
} from './styles';
import { FoodIcon } from '../../shared/styles/formStyles';

import Header from '../../components/Header';
import FormTextInput from '../../components/FormTextInput';
import FormSelectInput from '../../components/FormSelectInput';

const selectOptions = [
  { type: 'allItems', text: 'All items' },
  { type: 'burger', text: 'Burger' },
  { type: 'sideDish', text: 'Side dish' },
  { type: 'drink', text: 'Drink' },
];

const SelectItem: React.FC = () => {
  const [filterText, setFilterText] = useState('');
  const [filterType, setFilterType] = useState('allItems');

  return (
    <Container>
      <Header />
      <Wrapper>
        <Title>Select the item you want to update</Title>
        <FilterContainer>
          <FilterWrapper className="first">
            Filter by name
            <FormTextInput
              Icon={FoodIcon}
              text={filterText}
              setText={setFilterText}
              placeholder="Item name"
              type="text"
            />
          </FilterWrapper>
          <FilterWrapper className="second">
            Filter by type
            <FormSelectInput
              placeholder="All items"
              options={selectOptions}
              value={filterType}
              setValue={setFilterType}
            />
          </FilterWrapper>
        </FilterContainer>
      </Wrapper>
    </Container>
  );
};

export default SelectItem;
