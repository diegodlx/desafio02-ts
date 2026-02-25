import { Center, Input, Box } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { Button } from './Button';
import { login } from '../services/login';

export const Card = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    login(email);
  };

  return (
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
      <Center>
        <h1>Faca o login</h1>
      </Center>
      <Input
        placeholder='email'
        value={email}
        onChange={handleEmailChange}
        marginBottom='8px'
      />
      <Input
        placeholder='password'
        type='password'
        value={password}
        onChange={handlePasswordChange}
      />
      <Center>
        <Button onClick={handleLogin} label='Entrar' />
      </Center>
    </Box>
  );
};
