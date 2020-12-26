import React, { useState } from 'react';
import { Container, Form, Label, Input, Select, Submit } from './styles';

import firebase from '../../services/firebase';

const CreateItem: React.FC = () => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [price, setPrice] = useState(0);
  const [type, setType] = useState('burger');
  const [image, setImage] = useState<File | null>(null);

  const handleCreateItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (image !== null) {
      firebase.createItem(name, details, price, type, image);
    }
  };

  const handleSetImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    setImage(event.target.files[0]);
  };

  return (
    <Container>
      <Form onSubmit={handleCreateItem}>
        <Label>
          Image
          <Input type="file" id="image" onChange={handleSetImage} />
        </Label>
        <Label>
          Name
          <Input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Label>
        <Label>
          Details
          <Input
            type="text"
            id="details"
            value={details}
            onChange={e => setDetails(e.target.value)}
          />
        </Label>
        <Label>
          Price
          <Input
            type="number"
            id="price"
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
          />
        </Label>
        <Label>
          Type
          <Select
            id="type"
            value={type}
            onChange={e => setType(e.target.value)}
          >
            <option value="burger">Burger</option>
            <option value="sideDish">Side dish</option>
            <option value="drink">Drink</option>
          </Select>
        </Label>

        <Submit type="submit" value="submit">
          Create
        </Submit>
      </Form>
    </Container>
  );
};

export default CreateItem;
