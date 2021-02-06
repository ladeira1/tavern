/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useLayoutEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Wrapper,
  Title,
  Form,
  FoodIcon,
  DollarIcon,
  ImageIcon,
  EditIcon,
  Label,
} from '../../shared/styles/formStyles';
import {
  Content,
  Input,
  ImageContainer,
  ImageLabel,
  ImageItem,
  XIcon,
  DetailsInput,
  DeleteButton,
} from './styles';

import Header from '../Header';
import FormTextInput from '../FormTextInput';
import FormSelectInput from '../FormSelectInput';
import Button from '../Button';
import ErrorPopup from '../ErrorPopup';

import { createItem, updateItem, deleteItem } from '../../services/firebase';
import { useLoading } from '../../contexts/Loading';
import ItemInterface from '../../models/ItemInterface';
import ItemResponse from '../../models/ItemResponse';

interface ItemForm {
  text: string;
  buttonText: string;
  item?: ItemInterface;
}

const selectOptions = [
  { type: 'burger', text: 'Burger' },
  { type: 'sideDish', text: 'Side dish' },
  { type: 'drink', text: 'Drink' },
];

const ItemForm: React.FC<ItemForm> = ({ text, buttonText, item }) => {
  const history = useHistory();

  const { setLoading } = useLoading();

  const [name, setName] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [details, setDetails] = useState('');
  const [price, setPrice] = useState('0');
  const [type, setType] = useState('burger');

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [textAreaSelected, setTextAreaSelected] = useState(false);
  const [error, setError] = useState({ shown: false, message: '' });

  const isButtonDisabled = !name || !details || !price;

  const handleCreateItem = async (): Promise<ItemResponse> => {
    // it will set error messages in a near future
    if (!image) {
      setLoading(false);
      setError({ shown: true, message: 'You must insert a valid image.' });
      setTimeout(() => setError({ shown: false, message: '' }), 4000);
      return { type: 'ERROR', message: 'Invalid image' };
    }

    return createItem(name, details, Number(price), type, image);
  };

  const handleUpdateItem = async (): Promise<ItemResponse> => {
    const updatedItem: ItemInterface = {
      id: item!.id,
      name,
      price: Number(price),
      details,
      imageUrl: item!.imageUrl,
      type,
    };

    return updateItem(updatedItem, image);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (name === '') {
      setLoading(false);
      setError({ shown: true, message: 'You must type a valid name.' });
      setTimeout(() => setError({ shown: false, message: '' }), 4000);
      return;
    }
    if (details === '') {
      setLoading(false);
      setError({ shown: true, message: 'Details must not be empty' });
      setTimeout(() => setError({ shown: false, message: '' }), 4000);
      return;
    }
    if (price === '' || Number(price) <= 0) {
      setLoading(false);
      setError({ shown: true, message: 'You must type a valid price.' });
      setTimeout(() => setError({ shown: false, message: '' }), 4000);
      return;
    }
    if (!type) {
      setLoading(false);
      setError({ shown: true, message: 'You must select a valid type' });
      setTimeout(() => setError({ shown: false, message: '' }), 4000);
      return;
    }

    const response = item ? await handleUpdateItem() : await handleCreateItem();

    if (response.type === 'ERROR') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setError({ shown: true, message: response.message! });
      setTimeout(() => setError({ shown: false, message: '' }), 4000);
    }

    setLoading(false);

    if (response.type === 'SUCCESS') {
      history.push('/');
    }
  };

  const handleSetImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const selectedImage = event.target.files[0];

    setImage(selectedImage);
    setPreviewImage(URL.createObjectURL(selectedImage));
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewImage(null);
  };

  const handleDeleteItem = async () => {
    if (item) {
      const response = await deleteItem(item.id);

      if (response.type === 'error') {
        setError({ shown: true, message: response.message });
        setTimeout(() => setError({ shown: false, message: '' }), 4000);
        return;
      }

      history.push('/');
    }
  };

  useLayoutEffect(() => {
    if (item) {
      setName(item.name);
      setDetails(item.details);
      setPrice(String(item.price));
      setType(item.type);
      setPreviewImage(item.imageUrl);
    }
  }, []);

  return (
    <Container>
      <Header />
      <ErrorPopup error={error} />
      <Wrapper>
        <Content>
          <Title>{text}</Title>
          <Form onSubmit={handleSubmit}>
            <FormTextInput
              Icon={FoodIcon}
              text={name}
              setText={setName}
              placeholder="Name"
              type="text"
            />

            <ImageLabel htmlFor="image" hasImage={!!previewImage}>
              <ImageIcon />
              <span>Image</span>
              <Input
                type="file"
                id="image"
                onChange={handleSetImage}
                accept=".png, .jpg, .jpeg"
              />
            </ImageLabel>
            {previewImage && (
              <ImageContainer>
                <ImageItem src={previewImage} alt="Item" />
                <XIcon onClick={handleRemoveImage} />
              </ImageContainer>
            )}
            <Label
              htmlFor="details"
              onFocus={() => setTextAreaSelected(true)}
              onBlur={() => setTextAreaSelected(false)}
              selected={textAreaSelected}
              height="100px"
            >
              <EditIcon selected={textAreaSelected} />
              <DetailsInput
                id="details"
                value={details}
                onChange={e => setDetails(e.target.value)}
                selected={textAreaSelected}
                placeholder="Details"
              />
            </Label>

            <FormTextInput
              Icon={DollarIcon}
              text={price}
              setText={setPrice}
              placeholder="Price"
              type="number"
            />
            <FormSelectInput
              placeholder={type}
              options={selectOptions}
              value={type}
              setValue={setType}
            />
            <Button message={buttonText} disabled={isButtonDisabled} />
            {item && (
              <DeleteButton onClick={handleDeleteItem}>
                Delete item
              </DeleteButton>
            )}
          </Form>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default ItemForm;
