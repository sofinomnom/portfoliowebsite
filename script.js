window.onload = function() {
  console.log("сайт загружен!");
};

function sayHello() {
  const greetings = [
    "привет 🎉",
    "привет читатель!",
    "спасибо что тыкнул!",
    "😎"
  ];
  const random = Math.floor(Math.random() * greetings.length);
  alert(greetings[random]);
}