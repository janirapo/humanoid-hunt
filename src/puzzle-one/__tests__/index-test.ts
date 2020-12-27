import * as x from '..';

describe('puzzle one', () => {
  describe('split', () => {
    it('splits given string into arrays of 8 characters', () => {
      const result = x.split('1234567891234567');
      expect(result).toHaveLength(2);
      expect(result[0]).toHaveLength(8);
      expect(result[1]).toHaveLength(8);
    });
  });

  describe('bin2dec', () => {
    it('converts binary string to decimal number one', () => {
      expect(x.bin2dec('00000001')).toEqual(1);
    });

    it('converts binary string to decimal number 128', () => {
      expect(x.bin2dec('10000000')).toEqual(128);
    });
  });

  describe('extractInvalid', () => {
    it("returns last element's value", () => {
      const value = [1, 2, 3, 4];
      expect(x.extractInvalid(value)).toEqual(4);
    });

    it('works when second value is out of bounds', () => {
      const value = [13, 3, 4, 5];
      expect(x.extractInvalid(value)).toEqual(5);
    });

    it('works when first and seconde values are out of bounds', () => {
      const value = [13, 6, 1, 7, 9];
      expect(x.extractInvalid(value)).toEqual(6);
    });

    it('works when second match is out of bounds', () => {
      const value = [13, 2, 34, 5];
      expect(x.extractInvalid(value)).toEqual(34);
    });

    it('works with real life example', () => {
      const value = [
        103,
        4,
        102,
        214,
        14,
        70,
        206,
        78,
        46,
        174,
        102,
        174,
        70,
        198,
        198,
        54,
        238,
        150,
        102,
        134,
        246,
        238,
        182,
        182,
        14,
        246,
        142,
        150,
        78,
        214,
        22,
        230,
        54,
        80,
        46,
        78,
        38,
        46,
        70,
        240,
      ];
      expect(x.extractInvalid(value)).toEqual(198);
    });
  });

  describe('number2Character', () => {
    it('converts given number to corresponding character', () => {
      expect(x.number2Character(102)).toMatch('f');
    });
  });

  describe('solveAll', () => {
    it('print result', () => {
      expect(x.solvePuzzle()).toEqual('left-ventricle');
    });
  });
});
