import { login } from './login';

describe('login', () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it('Deve exibir um alert com boas vindas e o e-mail informado', () => {
    login('teste@dio.com');
    expect(mockAlert).toHaveBeenCalledWith('Bem Vindo teste@dio.com');
  });
});
