// Bài 1:
function century(x) {
    alert("Thế kỉ thứ " +  Math.ceil(x/100));
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