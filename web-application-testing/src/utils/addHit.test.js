import {addHit} from './addHit'

test('keeps track of hits', () => {
    expect(addHit(0)).toBe(1);
    expect(addHit(1)).toBe(2);
    expect(addHit(2)).toBe(3);
  })