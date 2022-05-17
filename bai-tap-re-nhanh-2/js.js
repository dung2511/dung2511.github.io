// Bài 2: 
function student(students) {
    let count = 0;
    let restudents = students.sort();// nếu để restudents trong vòng lặp thì nó sẽ lặp nhiều lần nó sẽ sắp xếp nhiều lần sẽ ko đạt hiệu năng cao, nên để hàm sắp xếp ở ngoài
    for (i = 0; i < students.length; i++) {
        count++; // count + 1 ko cần giống như i vì count tăng thêm 1 mới in ra i xong i++ mới tiếp tục vòng lặp tiếp theo
      document.write("<p>" + count + ". " + restudents[i] + "</p>");
    }
  }

  // Bài 4: cách khác dùng vòng lặp tìm ra số nhỏ nhất
  function numberMin(num){
    let min = num[0];
    for ( let i in num){
        if ( min > num[i]){
            min = num[i];
        }
    } return min;
}
