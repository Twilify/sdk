import { test, expect, beforeAll } from 'vitest';
import { fetchPage, initializeTwilify } from '../src/main';

beforeAll(() => {
  initializeTwilify({
    apiKey: process.env.TEST_KEY,
  });
});

test('Fetch page', async () => {
  const result = await fetchPage('/');

  expect(result).toBeTypeOf('object');
});
