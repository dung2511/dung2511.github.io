// Bài 1:
function century(year) {
    alert("Thế kỉ thứ " +  Math.ceil(year/100));
}

// Bài 2:
function string(name){
    let slicename = name.slice(0, 10);
    let dotdot = " ...";
    alert (slicename + dotdot);
}

// Bài 3: 
function capitalizeLetter(letter) {
    let firstletter = letter.slice(0, 1);
    let rest = letter.slice(1);
    alert (firstletter.toUpperCase() + rest.toLowerCase());
}

// Bài 4: cắt chuỗi linh động ko cố định 
    function string(name, number) {
        let slicename = name.slice(0, number);  
        let dotdot = " ...";
        return slicename + dotdot
    }
// 'Xin chào các bạn' => "Xin-Chào-Các-Bạn"
    function string(str) {
        str = str.replace(/ /g, "-"); // muốn replace nhiều kí tự thì //g, còn replace 1 kí tự thì ""
        return str;
    }
    function word(str) {
        cutstr = str.split(" "-3);
        return str;
    }
    //function printContent() {
        //for (let i = 1; i <= 100; i++)
        //document.write(`<h1>${i}</h1>`) // dùng dấu `
    //}
    // không dùng `
    function printContent() {
        for (let i = 1; i <= 100; i++)
        document.write('<h1>'+i+'</h1>')// cộng chuỗi
    }
    function sum(){
        let result = 0;
        for (let i = i; i <= 10; i++)   
        result += i;
        return sum;
        // có biến sum = 0, có vòng lặp i = 1, i <=10;
        // sum = 0 + 1 = 1; cứ lặp lại cho đến khi giá trị i đến 10;
    }
    // tính tổng với a, b linh động
    function sum(a, b){
        let result = 0;
        for (let i = a; i <= b; i++)
        result += i;
        return sum;
    }