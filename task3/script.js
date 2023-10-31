let username = localStorage.getItem("name");
let currentDate = localStorage.getItem("date");

if (!username) {
  username = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя");
  currentDate = new Date();
  localStorage.setItem("name", username);
  localStorage.setItem("date", currentDate);
} else {
  alert(
    `Добрый день, ${username}! Давно не виделись. В последний раз вы были у нас ${currentDate}`
  );
  currentDate = new Date();
  localStorage.setItem("date", currentDate);
}

let btnClearLocalStorage = document.querySelector(".j-clear-localStorage");

btnClearLocalStorage.addEventListener("click", function () {
  localStorage.clear();
});
