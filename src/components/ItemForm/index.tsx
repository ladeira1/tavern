/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useLayoutEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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
  ImageWrapper,
  ImageItem,
  XIcon,
  DetailsInput,
  DeleteButton,
  ConfirmMessage,
  Message,
  ImageLabel,
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

type ActionName = 'create' | 'update' | 'delete';

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
  const [price, setPrice] = useState('');
  const [type, setType] = useState('burger');

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [textAreaSelected, setTextAreaSelected] = useState(false);
  const [error, setError] = useState({ shown: false, message: '' });

  const [actionName, setActionName] = useState<ActionName>('create');
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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

    let response;

    if (item) {
      if (!confirmSubmit) {
        setConfirmSubmit(true);
        setActionName('update');
        setTimeout(() => setConfirmSubmit(false), 2000);
        return;
      }

      setLoading(true);
      response = await handleUpdateItem();
    } else {
      if (!confirmSubmit) {
        setConfirmSubmit(true);
        setActionName('create');
        setTimeout(() => setConfirmSubmit(false), 2000);
        return;
      }

      setLoading(true);
      response = await handleCreateItem();
    }

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

  const handleDeleteItem = async () => {
    if (item) {
      if (!confirmDelete) {
        setConfirmDelete(true);
        setActionName('delete');
        setTimeout(() => setConfirmDelete(false), 2000);
        return;
      }

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

            <ImageWrapper hasImage={!!previewImage}>
              <ImageLabel htmlFor="image">
                <ImageIcon />
                <Input
                  type="file"
                  id="image"
                  onChange={handleSetImage}
                  accept=".png, .jpg, .jpeg"
                />
                Image
              </ImageLabel>

              {previewImage && <XIcon onClick={handleRemoveImage} />}
            </ImageWrapper>
            {previewImage && (
              <ImageContainer>
                <ImageItem src={previewImage} alt="Item" />
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
              <DeleteButton onClick={handleDeleteItem} type="button">
                Delete item
              </DeleteButton>
            )}
            <AnimatePresence initial={false}>
              <ConfirmMessage>
                {(confirmDelete || confirmSubmit) && (
                  <Message
                    initial={{ opacity: 0, y: 90, scale: 0.3 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{
                      opacity: 0,
                      scale: 0.5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    Press it again to {actionName} item
                  </Message>
                )}
              </ConfirmMessage>
            </AnimatePresence>
          </Form>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default ItemForm;
