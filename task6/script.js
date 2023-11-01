let inputNumPage = document.querySelector("#num_page");
let inputLimit = document.querySelector("#limit");
let btnRequest = document.querySelector("#request");
let listPics = document.querySelector(".list-pics");

let imagesData = localStorage.getItem("img_data");

if (imagesData) {
    displayImages(JSON.parse(imagesData));
}

btnRequest.addEventListener("click", async function(){
    listPics.textContent = "";

    if ((inputNumPage.value < 1 || inputNumPage.value > 10 || isNaN(inputNumPage.value)) &&
        (inputLimit.value < 1 || inputLimit.value > 10 || isNaN(inputLimit.value))) {
        listPics.textContent += "Номер страницы и лимит вне диапазона от 1 до 10";
    } else if (inputNumPage.value < 1 || inputNumPage.value > 10 || isNaN(inputNumPage.value)) {
        listPics.textContent += "Номер страницы вне диапазона от 1 до 10";
    } else if (inputLimit.value < 1 || inputLimit.value > 10 || isNaN(inputLimit.value)) {
        listPics.textContent += "Лимит вне диапазона от 1 до 10";
    } else {
        await fetch("https://picsum.photos/v2/list?page=" + inputNumPage.value + "&limit=" + inputLimit.value)
            .then((value) => value.json())
            .then((json) => {
                saveImages(JSON.stringify(json));
                displayImages(json);
            })
            .catch((error) => console.log(error))
    }
})

function saveImages(imagesJSON) {
    localStorage.setItem("img_data", imagesJSON);
}

function displayImages(data) {

    for (let elem of data) {
        let card = document.createElement("div");
        card.classList.add("card")
        let img = document.createElement("img");
        img.setAttribute("src", elem.download_url)
        img.classList.add("card-img");
        let author = document.createElement("p");
        author.textContent = elem.author;
        card.appendChild(img);
        card.appendChild(author);
        listPics.appendChild(card);
    }
}
