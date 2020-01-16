import {addStrike} from './addStrike';

test('keeps count of strikes', () => {
    expect(addStrike(0)).toBe(0);
    expect(addStrike(1)).toBe(1);
    expect(addStrike(2)).toBe(2);
    expect(addStrike(3)).toBe(0);
  })