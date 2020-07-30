export const isValidLength = (
  input: string,
  min: number,
  max: number
): boolean => {
  return input.length >= min && input.length <= max;
};

export const isValidCharacters = (input: string, regex: RegExp): boolean => {
  for (let i = 0; i < input.length; i++) {
    if (!input[i].match(regex)) return false;
  }
  return true;
};
