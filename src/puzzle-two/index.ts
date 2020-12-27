import data from './data';

export const getMostOccurringChar = (input: string): string => {
  let max = 0;
  let maxChar = '';
  input.split('').forEach(function (char) {
    if (input.split(char).length > max) {
      max = input.split(char).length;
      maxChar = char;
    }
  });
  return maxChar;
};

/**
 * Find occurrances of sequence in input and return every character following that sequence, combined to a single string
 */
export const extractFollowingChars = (input: string, sequence: string): string => {
  let result = '';

  const sequenceLen = sequence.length;
  if (sequenceLen == 0) {
    return '';
  }
  let startIndex = 0;

  let index = 0;
  while ((index = input.indexOf(sequence, startIndex)) > -1) {
    result += input[index + sequenceLen];
    startIndex = index + sequenceLen;
  }
  return result;
};

export const extractResult = (input: string): string => {
  let result = getMostOccurringChar(input);
  let search = result;
  while (result.indexOf(';') === -1 && result.length < 100) {
    const following = extractFollowingChars(input, search);
    search = getMostOccurringChar(following);
    result += search;
  }

  // remove last semicolon
  return result.slice(0, -1);
};

export const solvePuzzle = (): string => extractResult(data);
