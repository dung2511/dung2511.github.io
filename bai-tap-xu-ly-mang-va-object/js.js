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
