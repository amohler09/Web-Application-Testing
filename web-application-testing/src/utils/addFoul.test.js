import {addFoul} from './addFoul'

test('keeps track of fouls', () => {
    expect(addFoul(0)).strike.toBe(0);
    expect(addFoul(1)).strike.toBe(1);
    expect(addFoul(2)).strike.toBe(2);
    expect(addFoul(3)).strike.toBe(2)
  })