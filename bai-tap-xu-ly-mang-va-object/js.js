// Bài 2:
function findLongestString(arr) {
  let newArr = [],
    maxLength = 0;
  arr.forEach((str) => {
    if (str.length > maxLength) {
      newArr = [];
      newArr.push(str);
      maxLength = str.length;
    } else if (str.length === maxLength) {
      newArr.push(str);
    }
  });
  return newArr;
}
function longestString(arr) {
  let max = [],
    maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    if (maxLength < arr[i].length) {
      max = [];
      max.push(arr[i]);
      maxLength === arr[i].length;
    }
    for (let i = 0; i < arr.length; i++) {
      if (maxLength === arr[i].length) {
        max.push(arr[i]);
      }
    }
  }
  return max;
}
