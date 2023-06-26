import {
  PHOTOS,
  MIN_LIKES,
  MAX_LIKES,
  COMMENTS,
  MIN_COMMENTS,
  MAX_COMMENTS,
  MIN_AVATAR,
  MAX_AVATAR,
  DESCRIPTIONS,
  MESSAGES,
  NAMES
} from './constants.js';

import {
  getRandomInteger,
  createRandomIdFromRangeGenerator
} from './utils.js';

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

export { getPhotos };
