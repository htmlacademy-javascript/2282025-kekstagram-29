//Функция для проверки длины строки
const checkLineLength = (line, maxLine) => line.length <= maxLine;


checkLineLength('проверяемая строка', 20);
console.log(checkLineLength('проверяемая строка', 20));

// Cтрока короче 20 символов: true
// Длина строки ровно 18 символов: true
// Строка длиннее 10 символов: false

//Функция для проверки, является ли строка палиндромом
const checkPolindrom = (line) => {
  const lineNorm = line.replaceAll(' ', '').toLowerCase();
  let lineNew = '';

  for (let i = lineNorm.length - 1; i >= 0; i--) {
    lineNew += lineNorm.at(i); //Можно записать lineNew += lineNorm[i]
  }
  return lineNorm === lineNew;
};
console.log(checkPolindrom('Лёша на полке клопа нашёл '));

// Строка является палиндромом 'топот': true
// Несмотря на разный регистр, тоже палиндром 'ДовОд':true
// Это не палиндром 'Кекс': false
// Это палиндром 'Лёша на полке клопа нашёл ': true

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
const takeNumber = (line) => {
  line = line.toString();

  let number = '';

  for (let i = 0; i < line.length; i++) {
    number += !Number.isNaN(parseInt(line[i], 10)) ? (parseInt(line[i], 10)) : '';
    // number += Number.isNaN(parseInt(line[i], 10)) ? '' : (parseInt(line[i], 10));
  }
  return parseInt(number, 10);
};
console.log(takeNumber('а я томат'));

// '2023 год') // 2023
// ('ECMAScript 2022') // 2022
// ('1 кефир, 0.5 батона') // 105
// ('агент 007') // 7
// ('а я томат') // NaN
// (2023) // 2023
// (-1) // 1
// (1.5) // 15
