import { test, beforeAll, expect } from 'vitest';
import { fetchPage, initializeTwilify } from '../src/main';

test('Guard for missing instance', () => {
  let errored: Error;

  try {
    fetchPage('', {
      version: 'production',
    });
  } catch (err) {
    errored = err;
  }

  expect(errored).instanceOf(Error);
  expect(errored.message).toBe(
    'Twilify instance is not initialized, use "initializeTwilify" first'
  );
});
