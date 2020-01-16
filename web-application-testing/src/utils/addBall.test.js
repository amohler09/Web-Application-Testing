import {addBall} from './addBall'

test('keeps count of balls', () => {
    expect(addBall(0)).toBe(0);
    expect(addBall(1)).toBe(1);
    expect(addBall(2)).toBe(2);
    expect(addBall(3)).toBe(3);
    expect(addBall(4)).toBe(0);
  })