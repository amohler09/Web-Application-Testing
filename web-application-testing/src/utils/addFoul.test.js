import {addFoul} from './addFoul'

test('keeps track of fouls', () => {
    expect(addFoul(0)).toBe(1);
})