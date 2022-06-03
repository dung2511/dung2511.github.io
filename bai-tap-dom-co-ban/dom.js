function lesson1() {
  const fruitList = [
    "apple",
    "banana",
    "tomato",
    "watermelon",
    "strawberry",
    "cherry",
    "coconut",
  ];
  let list = document.createElement("li");
  for (let i = 0; i <= fruitList.length; i++) {
    let textnode = document.createTextNode(fruitList[i]);
    list.append(textnode);
  }
  document.getElementsByClassName("fruit-list").append(list);
}
// cách 2 bài 1
const fruitList = [
        "apple",
        "banana",
        "tomato",
        "watermelon",
        "strawberry",
        "cherry",
        "coconut",
      ];
      const ul = document.querySelector(".fruit-list");
      for (let fruit of fruitList) {
        ul.innerHTML += `<li>${fruitList[fruit]}</li>`
      }

function lesson2() {
  var elem = document.createElement("img");
elem.setAttribute("src", "https://lh3.googleusercontent.com/-oauOGfRGLBU/YkayObi8ECI/AAAAAAAA6uU/6hJIvhjz_74WHTMNvD7XRFdfiFK60tO1gCNcBGAsYHQ/s0/avatar-anime.jpg");
elem.setAttribute("height", "768");
elem.setAttribute("width", "1024");
elem.setAttribute("alt", "Flower");
document.getElementById("avatar-box").appendChild(elem);
}
const img = document.createElement('img');
img.src = "https://lh3.googleusercontent.com/-oauOGfRGLBU/YkayObi8ECI/AAAAAAAA6uU/6hJIvhjz_74WHTMNvD7XRFdfiFK60tO1gCNcBGAsYHQ/s0/avatar-anime.jpg"
// Bài 2: DOM Basic
const avatarBox = document.querySelector(".avatar-box");
            const avatarSrc = 'https://f58-zpg-r.zdn.vn/9040405725369332814/e71d602e5b189b46c209.jpg'
            avatarBox.innerHTML = `<img src ="${avatarSrc}" alt="Bài trước" />`;
