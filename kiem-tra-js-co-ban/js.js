// Bài 2: cách ngắn hơn
function numbers(num) {
  // Dùng hàm sort để sắp xếp vị trí mảng
  num.sort(function (a, b) {
    return b - a;
  });
  // dùng vòng lặp chạy qua từng phần tử trong mảng đã sắp xếp
  for (let i = 0; i < num.length; i++) {
    if (num[0] > num[i + 1]) {
      return num[i + 1];
    }
  }
}
