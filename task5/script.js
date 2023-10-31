let inputUserId = document.querySelector("#user_id");
let btnGetList = document.querySelector("#get_list");
let listToDo = document.querySelector(".list-to-do");

btnGetList.addEventListener("click", async function(){
    listToDo.innerHTML = "";
    await fetch("https://jsonplaceholder.typicode.com/users/" + inputUserId.value + "/todos")
        .then((response) => response.json())
        .then((json) => handleJSON(json))
        .catch((error) => console.log("error " + error))

})

function handleJSON(json) {

    if (json == "") {
        listToDo.innerHTML += "<p>Пользователь с указанным <i>id</i> не найден</p>";
    }

    let list = document.createElement('ol');

    for (let elem of json) {
        let item = document.createElement('li');

        if (elem.completed) {
            let sText = document.createElement('s');
            sText.textContent = elem.title;
            item.appendChild(sText);
        } else {
            item.textContent = elem.title;
        }

        list.appendChild(item);
    }

    listToDo.appendChild(list);
}
