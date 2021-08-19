import ArrayBufferConverter from '../app';
import getBuffer from '../getbuffer';

test('main case', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const result = new ArrayBufferConverter(getBuffer());
  expect(`${result}`).toBe(data);
});
