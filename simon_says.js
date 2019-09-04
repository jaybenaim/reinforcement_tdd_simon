const echo = string => {
  return string;
};

const shout = string => {
  return string.toUpperCase();
};

const repeat = (string, num) => {
  let addSpace = string.concat(" ");
  let newString = addSpace.repeat(num);
  newString = newString.substring(0, newString.length - 1);

  return newString;
};

const startOfWord = (string, num) => {
  let newString = string.slice(0, num);
  return newString;
};

const firstWord = string => {
  let newString = string.split(" ");
  return newString[0];
};
console.log(firstWord("hello world"));

module.exports = {
  echo: echo,
  shout: shout,
  repeat: repeat,
  startOfWord: startOfWord,
  firstWord: firstWord
};
