import data from './data';

export const splitAndReverse = (full: string): string[] => {
  const result = [];
  for (let x = 0; x < full.length; x = x + 8) {
    const part = full.substring(x, x + 8);
    result.push(part.split('').reverse().join(''));
  }
  return result;
};

export const bin2dec = (binary: string): number => parseInt(binary, 2);

export const extractInvalid = (numbers: number[]): number => {
  const elementCount = numbers.length;
  let start = 99999;
  let index = 0;
  do {
    start = numbers[index];
    index++;
  } while (start > elementCount);
  do {
    index = numbers[index - 1];
  } while (index <= elementCount);
  return index;
};

/*
 * The array can contain invalid numbers, which means following their pointer would cause an overflow off the stream.
 * Start reading data from the beginning of the array, and ignore any numbers bytes until you encounter the first valid number.
 * After this, follow valid number pointers until you reach another invalid number.
 * This invalid number contributes one character to the password.
 */
const solveOne = (row: string): number => {
  const numbers = splitAndReverse(row).map(bin2dec);
  const result = extractInvalid(numbers);
  return result;
};

export const number2Character = (code: number): string => {
  return String.fromCodePoint(code);
};

export const solvePuzzle = (): string => {
  const numbers = data.map(solveOne);
  console.log(numbers.join());
  const characters = numbers.map(number2Character).join('');
  return characters;
};
