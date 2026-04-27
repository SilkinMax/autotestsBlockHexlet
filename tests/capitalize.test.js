import capitalize from '../src/capitalize.js'

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает неверно!')
}

if (capitalize('') !== '') {
  throw new Error('Функция работает неверно!')
}
//Неправильный вызов capitalize
// console.log(capitalize(0))

console.log('Все тесты пройдены!')