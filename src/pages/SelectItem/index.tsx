import React, { useLayoutEffect, useState } from 'react';
import {
  Container,
  Wrapper,
  Title,
  FilterContainer,
  FilterWrapper,
  ItemsWrapper,
} from './styles';
import { FoodIcon } from '../../shared/styles/formStyles';

import { getItems } from '../../services/firebase';

import Header from '../../components/Header';
import FormTextInput from '../../components/FormTextInput';
import FormSelectInput from '../../components/FormSelectInput';
import NewItem from '../../components/NewItem';
import ItemInterface from '../../models/ItemInterface';

const selectOptions = [
  { type: 'burger', text: 'Burger' },
  { type: 'sideDish', text: 'Side dish' },
  { type: 'drink', text: 'Drink' },
];

const SelectItem: React.FC = () => {
  const [filterText, setFilterText] = useState('');
  const [filterType, setFilterType] = useState('burger');
  const [items, setItems] = useState<ItemInterface[]>({} as ItemInterface[]);

  const getDatabaseItems = async () => {
    const result = await getItems();

    if (result.length) {
      setItems(result);
    }
  };

  useLayoutEffect(() => {
    getDatabaseItems();
  }, []);

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
        <ItemsWrapper>
          {items.length &&
            items.map(item => (
              <NewItem key={item.id} item={item} addToCart={false} />
            ))}
        </ItemsWrapper>
      </Wrapper>
    </Container>
  );
};

export default SelectItem;
