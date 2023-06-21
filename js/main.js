//сколько объектов нужно сгенерировать в массиве photos
const PHOTOS = 25;

//минимальное и максимальное значение лайков для генерации числа лайков под фото
const MIN_LIKES = 15;
const MAX_LIKES = 200;

//общее количество комментариев
const COMMENTS = 100;
//минимальное количестко комментариев под фото
const MIN_COMMENTS = 0;
//максимальное количестко комментариев под фото
const MAX_COMMENTS = 30;

//для генерации аватара коментирующего
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

//массив, с описаниями к фото
const DESCRIPTIONS = [
  'На море',
  'Котик',
  'Путешествуем',
  'Моя ласточка',
  'На концерте',
  'Пальчики оближешь',
];

//массив, с комментариями к фото
const MESSAGES = [
  'Красиво',
  'Наверно вкусно',
  'А это где?',
  'Вот это аппарат',
  'Что за группа?',
  'Это можно есть?',
];

//массив, с именами коментирующих фото
const NAMES = [
  'Оля',
  'Никита',
  'Света',
  'Роман',
  'Тоня',
  'Олег',
];

//функции общего пользования
//генерация случайного числа без контроля повторений
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// генерация случайного числа с контролем повторений,
// функция с использованием замыкания( функция возвращает функцию, которая написана с лексическим окружением)
const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

//генерация id у getOnePhoto от 1 до 25
const getId = createRandomIdFromRangeGenerator(1, PHOTOS);

//генерация пути к фото от 1 до 25
const getIdUrl = createRandomIdFromRangeGenerator(1, PHOTOS);

//генерация id комментария в функцию getOneCommet
const getCommentId = createRandomIdFromRangeGenerator(1, COMMENTS);

// функция возвращает один объект(коментарий под фото), из которых, состоит массив comments
const getOneComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

// функция генерирует массив из функций getOneComment, count раз
const getComments = (count) => {
  const comments = [];
  for (let i = 1; i <= count; i++) {
    comments.push(getOneComment());
  }
  return comments;
};

// функция возвращает один объект(описание фото), из которых, состоит массив photos
const getOnePhoto = () => ({
  id: getId(),
  url: `photos/${getIdUrl()}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: getComments(getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)),
});

// функция генерирует массив из функций getOnePhoto, count раз
const getPhotos = (count) => {
  const photos = [];
  for (let i = 1; i <= count; i++) {
    photos.push(getOnePhoto());
  }
  return photos;
};

//выводит массив console.log
getPhotos(PHOTOS);


