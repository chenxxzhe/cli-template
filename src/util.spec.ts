import { isObject } from './util'

test('isObject works well', () => {
  expect(isObject({a: 1})).toBe(true)
  expect(isObject([1,2,3])).toBeFalsy()
  expect(isObject(1)).toBeFalsy()
})