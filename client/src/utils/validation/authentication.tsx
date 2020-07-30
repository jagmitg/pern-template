import { isValidLength, isValidCharacters } from './general';

export const usernameConstants = {
  MIN_USERNAME_LENGTH: 1,
  MAX_USERNAME_LENGTH: 15,
  ALLOWED_CHARACTERS: /^[\w\-_ ]$/,
};

export const passwordConstants = {
  MIN_PASSWORD_LENGTH: 1,
  MAX_PASSWORD_LENGTH: 15,
  ALLOWED_CHARACTERS: /^[\w\-_ !@#$%^&*.]$/,
};

export const usernameIsValid = (username: string): boolean => {
  return (
    isValidLength(
      username,
      usernameConstants.MIN_USERNAME_LENGTH,
      usernameConstants.MAX_USERNAME_LENGTH
    ) && isValidCharacters(username, usernameConstants.ALLOWED_CHARACTERS)
  );
};

export const passwordIsValid = (password: string): boolean => {
  return (
    isValidLength(
      password,
      passwordConstants.MIN_PASSWORD_LENGTH,
      passwordConstants.MAX_PASSWORD_LENGTH
    ) && isValidCharacters(password, passwordConstants.ALLOWED_CHARACTERS)
  );
};

export const emailIsValid = (email: string): boolean => {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email);
};
