import React, { useState } from 'react';
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
  ListIcon,
} from '../../shared/styles/formStyles';
import {
  Content,
  Input,
  ImageContainer,
  ImageLabel,
  Image,
  XIcon,
  Label,
  DetailsInput,
  Select,
} from './styles';

import Header from '../../components/Header';
import FormTextInput from '../../components/FormTextInput';
import Button from '../../components/Button';
import ErrorPopup from '../../components/ErrorPopup';

import firebase from '../../services/firebase';
import { useLoading } from '../../contexts/Loading';

const CreateItem: React.FC = () => {
  const history = useHistory();

  const { setLoading } = useLoading();

  const [name, setName] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [details, setDetails] = useState('');
  const [price, setPrice] = useState('0');
  const [type, setType] = useState('burger');

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [textAreaSelected, setTextAreaSelected] = useState(false);
  const [typeSelected, setTypeSelected] = useState(false);
  const [error, setError] = useState({ shown: false, message: '' });

  const isButtonDisabled = !name || !image || !details || !price || !type;

  const handleCreateItem = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    // it will set error messages in a near future
    if (name === '') {
      setLoading(false);
      setError({ shown: true, message: 'You must type a valid name.' });
      setTimeout(() => setError({ shown: false, message: '' }), 4000);
      return;
    }
    if (!image) {
      setLoading(false);
      setError({ shown: true, message: 'You must insert a valid image.' });
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
    if (type === '') {
      setLoading(false);
      setError({ shown: true, message: 'You must select a valid type' });
      setTimeout(() => setError({ shown: false, message: '' }), 4000);
      return;
    }

    const response = await firebase.createItem(
      name,
      details,
      Number(price),
      type,
      image,
    );

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

  const handleSetImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const selectedImage = event.target.files[0];
    setImage(selectedImage);
    setPreviewImage(URL.createObjectURL(selectedImage));
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewImage(null);
  };

  return (
    <Container>
      <Header />
      <ErrorPopup error={error} />
      <Wrapper>
        <Content>
          <Title>Create a new item</Title>
          <Form onSubmit={handleCreateItem}>
            <FormTextInput
              Icon={FoodIcon}
              text={name}
              setText={setName}
              placeholder="Name"
              type="text"
            />

            <ImageLabel htmlFor="image" hasImage={!!image}>
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
                <Image src={previewImage} alt="Item" />
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

            <Label
              htmlFor="type"
              onFocus={() => setTypeSelected(true)}
              onBlur={() => setTypeSelected(false)}
              selected={typeSelected}
              height="60px"
            >
              <ListIcon selected={typeSelected} />
              <Select
                id="type"
                selected={typeSelected}
                value={type}
                onChange={e => setType(e.target.value)}
              >
                <option value="burger">Burger</option>
                <option value="sideDish">Side Dish</option>
                <option value="drink">Drink</option>
              </Select>
            </Label>

            <Button message="Create item" disabled={isButtonDisabled} />
          </Form>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default CreateItem;
