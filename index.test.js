const hello = require('./index');

test('says hello to Zen', () => {
  expect(hello('Zen')).toBe('Hello, Zen');
});

