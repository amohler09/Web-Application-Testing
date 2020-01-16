import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {strike, ball, fould} from './components/utils'



test('keeps count of strikes', () => {
  expect(strike(0)).toBe(0);
  expect(strike(1)).toBe(1);
  expect(strike(2)).toBe(2);
  expect(strike(3)).toBe(0);
})

test('keeps count of balls', () => {
  expect(ball(0)).toBe(0);
  expect(ball(1)).toBe(1);
  expect(ball(2)).toBe(2);
  expect(ball(3)).toBe(3);
  expect(ball(4)).toBe(0);
})

test('keeps track of fouls', () => {
  expect(foul(0)).strike.toBe(0);
  expect(foul(1)).strike.toBe(1);
  expect(foul(2)).strike.toBe(2);
  expect(foul(3)).strike.toBe(2)
})

test('keeps track of hits', () => {
  expect(hit(0)).toBe(0);
  expect(hit(1)).toBe(1);
  expect(hit(2)).toBe(2);
})