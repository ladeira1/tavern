import React, { useState } from 'react';
import Header from '../../components/Header';
import FormTextInput from '../../components/FormTextInput';
import {
  Container,
  Title,
  Form,
  SubmitButton,
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
import firebase from '../../services/firebase';

const CreateItem: React.FC = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [details, setDetails] = useState('');
  const [price, setPrice] = useState('0');
  const [type, setType] = useState('burger');

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [textAreaSelected, setTextAreaSelected] = useState(false);
  const [typeSelected, setTypeSelected] = useState(false);

  const handleCreateItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (image !== null) {
      firebase.createItem(name, details, Number(price), type, image);
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
    <>
      <Header />
      <Container>
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
              <Input type="file" id="image" onChange={handleSetImage} />
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

            <SubmitButton type="submit">
              <h2 className="buttonText">Create item</h2>
            </SubmitButton>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default CreateItem;
