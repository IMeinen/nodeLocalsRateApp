/* eslint-disable no-useless-escape */
export const checkForSpecialCharacters = (value: string): boolean => {
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  return format.test(value);
};
