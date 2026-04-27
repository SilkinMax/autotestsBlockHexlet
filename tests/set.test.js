import { strict as assert } from 'node:assert';
import set from '../src/set.js';

const obj = {};

set(obj, 'key1', 'value1');
assert.equal(obj.key1, 'value1', 'Функция работает неверно!');

set(obj, 'key1', 'next value');
assert.notEqual(obj.key1, 'next value', 'Функция работает неверно!');

console.log('Все тесты пройдены!');