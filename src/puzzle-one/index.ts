import data from './data';

/**
 * split string by every 8 characters and return values as new array
 */
export const split = (full: string): string[] => {
  const result = [];
  for (let x = 0; x < full.length; x = x + 8) {
    const part = full.substring(x, x + 8);
    result.push(part.split('').join(''));
  }
  return result;
};

/**
 * convert binary string to decimal number
 */
export const bin2dec = (binary: string): number => parseInt(binary, 2);

/**
 * start from the beginning and find first value that references
 * a valid element index. Than follow the value of that index to the next value
 * and so on, until you reach an invalid index. Return this invalid index.
 */
export const extractInvalid = (numbers: number[]): number => {
  const elementCount = numbers.length;
  let start = 99999;
  let index = -1;
  do {
    index++;
    start = numbers[index];
  } while (start > elementCount);

  do {
    index = numbers[index];
  } while (!!numbers[index] && index !== numbers[index]);
  return index;
};

/*
 * The array can contain invalid numbers, which means following their pointer would cause an overflow off the stream.
 * Start reading data from the beginning of the array, and ignore any numbers bytes until you encounter the first valid number.
 * After this, follow valid number pointers until you reach another invalid number.
 * This invalid number contributes one character to the password.
 */
const solveOne = (row: string): number => {
  const numbers = split(row).map(bin2dec);
  const result = extractInvalid(numbers);
  return result;
};

export const number2Character = (code: number): string => {
  return String.fromCodePoint(code);
};

export const solvePuzzle = (): string => {
  const numbers = data.map(solveOne);
  const characters = numbers.map(number2Character).join('');
  return characters;
};
