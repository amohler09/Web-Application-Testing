import {addBall} from './addBall'

test('keeps count of balls', () => {
    expect(addBall(0)).toBe(1);
  })