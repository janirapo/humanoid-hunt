import * as x from '..';

describe('puzzle two', () => {
  describe('getMostOccurringChar', () => {
    it('returns most occurring', () => {
      expect(x.getMostOccurringChar('abcda')).toEqual('a');
    });

    it('returns first when all occur same amount', () => {
      expect(x.getMostOccurringChar('bcdfhl')).toEqual('b');
    });
  });

  describe('extractFollowingChars', () => {
    it('returns characters following given single char', () => {
      expect(x.extractFollowingChars('abcdaf', 'a')).toEqual('bf');
    });

    it('returns characters following given sequence', () => {
      expect(x.extractFollowingChars('abcdgpcdrt', 'cd')).toEqual('gr');
    });

    it('does not return partial match', () => {
      expect(x.extractFollowingChars('abcdabcdfoh', 'cda')).toEqual('b');
    });

    it('returns empty array when no match', () => {
      expect(x.extractFollowingChars('abcdabcdfoh', 'l')).toEqual('');
    });
  });

  describe('extractResult', () => {
    it('extracts most occurring and the following most occurring until reaching ;', () => {
      expect(x.extractResult('aboiamf;iab;pab;')).toEqual('ab');
    });

    it('extracts most occurring and the following most occurring until reaching ;', () => {
      expect(
        x.extractResult(
          'hN6h0^ng9QHqbXDc$tPULv!9FuP!r!^ivCBvZg040ESFNjiLjPUxZO;ZRPuR9Zs%TPThwdx6^vcX9Q;^&1PUxZd@m@2oSJIddcF@tXKVR4Ft5pMZg9lo5LwQ;k',
        ),
      ).toEqual('PUxZg9Q');
    });
  });

  describe('solvePuzzle', () => {
    it('solves the puzzle', () => {
      expect(x.solvePuzzle()).toEqual('PArietalLobE');
    });
  });
});
