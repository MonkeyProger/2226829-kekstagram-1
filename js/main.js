function getRandomIntInRange(left, right){
  if (left < 0 || right < 0){
    return;
  }
  if (left > right) {
    [left, right] = [right, left];
  }
  return left + Math.floor(Math.random() * (right - left + 1));
}

function isStringLengthPermitted(string, maxLength){
  return string.length <= maxLength;
}
getRandomIntInRange(9,3);
isStringLengthPermitted('abcdef', 8);

