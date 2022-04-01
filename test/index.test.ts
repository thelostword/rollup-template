/*
 * @Author: losting
 * @Date: 2022-04-01 18:11:39
 * @LastEditTime: 2022-04-01 18:48:33
 * @LastEditors: losting
 * @Description: 
 * @FilePath: \rollup-template\__test__\index.test.ts
 */
import { getPerson } from '../src/index'

test('get person', () => {
  expect(getPerson('1')).toEqual({
    name: '123',
    age: 18,
    sex: 1,
    email: '123',
    avatar: {
      mini: 'https://avatar.png',
      small: 'https://avatar.png',
      medium: 'https://avatar.png',
      large: 'https://avatar.png',
    },
  })
})
