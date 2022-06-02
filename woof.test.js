const woof = require('./woof');
test('should return numbers of woofs', function () {
  const result = woof('Hello');
  //expect(result).not.toBe('woof!');
  expect(result).toMatch(/\dwoof!/i);
  expect(['a', 'b', 'c']).toContain('c');
});

test.skip('should return null when not a given string', () => {
  woof();
  //expect(woof()).toBeNull();
  expect(() => woof()).toThrow('Must');
});

test.todo('should not allow numbers to be passed');
