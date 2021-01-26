import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Container, Title, Text } from './styles';
import Error from '../../models/Error';

const ErrorPopup: React.FC<{ error: Error }> = ({ error }) => (
  <AnimatePresence initial={false}>
    {error.shown && (
      <Container
        initial={{ opacity: 0, y: 90, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      >
        <Title>An error has occured!</Title>
        <Text>- {error.message}</Text>
      </Container>
    )}
  </AnimatePresence>
);

export default ErrorPopup;
