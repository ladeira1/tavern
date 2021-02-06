import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Wrapper,
  Title,
  FilterContainer,
  FilterWrapper,
  ItemsWrapper,
  ItemWrapper,
} from './styles';
import { FoodIcon } from '../../shared/styles/formStyles';

import { getItems, getFilteredByTextItems } from '../../services/firebase';

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
  const history = useHistory();
  const [filterText, setFilterText] = useState('');
  const [filterType, setFilterType] = useState('burger');
  const [items, setItems] = useState<ItemInterface[]>({} as ItemInterface[]);

  const handleSelectItem = (id: string) => {
    history.push(`/update/item/${id}`);
  };

  const handleSearchForTextFilteredItem = async () => {
    const result = await getFilteredByTextItems(filterText, filterType);
    if (result) {
      setItems(result);
    }
  };

  const getDatabaseItems = async () => {
    const result = await getItems(filterType);

    if (result.length) {
      setItems(result);
    }
  };

  useLayoutEffect(() => {
    getDatabaseItems();
  }, [filterType]);

  useEffect(() => {
    handleSearchForTextFilteredItem();
  }, [filterText]);

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
              <ItemWrapper
                key={item.id}
                onClick={() => handleSelectItem(item.id)}
              >
                <NewItem item={item} addToCart={false} />
              </ItemWrapper>
            ))}
        </ItemsWrapper>
      </Wrapper>
    </Container>
  );
};

export default SelectItem;
