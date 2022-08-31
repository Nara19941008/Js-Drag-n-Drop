
let uploadIcon = document.querySelector(".upload-icon");
let table = document.querySelector(".table");
let dropPlace = document.querySelector(".drop-area");


uploadIcon.addEventListener("click", function () {
    this.nextElementSibling.click();
})

uploadIcon.nextElementSibling.onchange = function (e) {
    uploadImages(e.target.files);
}

dropPlace.ondragover = (e) => {
    e.preventDefault();
}

dropPlace.ondrop = (e) => {
    e.preventDefault();
    uploadImages(e.dataTransfer.files);

}

function uploadImages(files) {
    for (const file of files) {
        let reader = new FileReader();

        reader.onloadend = function (ev) {

            console.log(ev);

            table.lastElementChild.innerHTML += `<tr>
            <th><img src="${ev.target.result}" style="height:100px" alt=""></th>
            <td>${file.size / 1024} Kb</td>
            <td>${file.name}</td>
            <td>${file.type}</td>
          </tr>`

        }

        reader.readAsDataURL(file);

    }

}