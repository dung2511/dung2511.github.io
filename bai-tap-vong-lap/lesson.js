// Bài 1:
function printContent(str, num) {
    let ls1 = "";
    for (let i = 1; i <= num; i++){
        ls1 += `${str}-`; 
    }
    document.write('<p>' + ls1.slice(0, -1) + '</p>')
}

// Bài 2:
function factorial(n){
    let factorial = 1
    for( let i = 1; i <= n; i++ ){
        factorial *=i
    }
    return factorial
}

// Bài 3:
function reverse(str) {
    return str.split("").reverse().join("")
}

// Bài 6
function oddEven(number) {
    let k = 0
    for(let i = 1; i <= number; i += 2 ){
    document.write('<h1 style="color:red;">' + i + '</h1>'+'<h1 style="color:blue;">' + (k += 2) +'</h1>') 
    }
}   