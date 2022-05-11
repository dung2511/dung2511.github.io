// Bài 1:
function printContent(str, num) {
    let ls1 = "";
    for (let i = 1; i <= num; i++){
        ls1 += `${str}-`; // tương đương với ls1 += str + "-"; 
    }
    return ls1.slice(0, -1);
}
//  cách khác
function lesson1(stri) {
    let les1 = stri;
    for (let i = 2; i <= 10; i++){
        les1 += `-${stri}`;
    }
    return les1;
}
// Bài 2:
function factorial(n){
    let factorial = 1;
    for( let i = 2; i <= n; i++ ){
        factorial *=i // vì factorial = 1 rồi 
    }
    return factorial;
}

// Bài 3:
function reverse(str) {
    return str.split("").reverse().join("")
}
// vòng lặp ngược
function reverse2(string){
    let result = "";
    for (let i = string.length - 1; i >= 0; i--){
        result += string[i];
    }
    return result;
}
// Bài 6
function oddEven(number) {
    let k = 0;
    for(let i = 1; i <= number; i += 2 ){
    document.write('<h1 style="color:red;">' + i + '</h1>'+'<h1 style="color:blue;">' + (k += 2) +'</h1>') ;
    }
}   
// cách khác
function oddEven() {
    for(let i = 1; i <= 100; i += 2 ){
    document.write('<h1 style="color:red;">' + i + '</h1>', '<h1 style="color:blue;">' + (i + 1) +'</h1>') ;
    }
}   
function giaiThua(n, number) {
    let fact = 1;
    for( let i = 2; i <= number; i++){
        if( n >= 0){
            fact *=i;
        }
        if( n < 0) {
            console.log('Tham số không phù hợp')
        }
        return fact;
    }
}