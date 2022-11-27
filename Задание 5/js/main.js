let userLocal = localStorage.getItem("myKey");
const inputNum = document.querySelector("#number");
const inputQuo = document.querySelector("#quota");
const btn = document.querySelector(".btn");
const div = document.querySelector(".div");

btn.addEventListener("click", async () => {
  if (valid(inputNum.value) === true && valid(inputQuo.value) === true) {
    const requestResult = await userRequest();
    imgDiv(requestResult);
    localStorage.setItem("myKey", JSON.stringify(requestResult));
  } else if (
    valid(inputNum.value) === false &&
    valid(inputQuo.value) === false
  ) {
    console.log("Номер страницы и лимит вне диапазона от 1 до 10");
    imgDiv(JSON.parse(userLocal));
  } else if (valid(inputNum.value) === false) {
    console.log("Номер страницы вне диапазона от 1 до 10");
    imgDiv(JSON.parse(userLocal));
  } else if (valid(inputQuo.value) === false) {
    console.log("Лимит вне диапазона от 1 до 10");
    imgDiv(JSON.parse(userLocal));
  }
});

function valid(n) {
  if (n >= 1 && n <= 10) {
    return true;
  } else {
    return false;
  }
}

function userRequest() {
  return fetch(
    `https://picsum.photos/v2/list?page=${inputNum.value}&limit=${inputQuo.value}`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
}

function imgDiv(collection) {
  let divImg = "";
  for (const key in collection) {
    const url = collection[key].download_url;
    const author = collection[key].author;
    const inner = `<div class="div_img">
    <img src="${url}" alt="">
    <p>${author}</p>
  </div>`;
    divImg = divImg + inner;
  }
  div.innerHTML = divImg;
}
