let name = document.getElementById("name"),
    surname = document.getElementById("surname"),
    age = document.querySelector("#age"),
    nameInput = document.getElementsByTagName("input")[0],
    surnameInput = document.querySelectorAll("input")[1],
    ageInput = document.querySelectorAll("input")[2];

nameInput.addEventListener('input', function () {
    name.innerHTML = `My Name: ${nameInput.value}`;
});

surnameInput.addEventListener('input', function () {
    surname.innerHTML = `My Surname: ${surnameInput.value}`;
});

ageInput.addEventListener("input", () => {
    if (ageInput.value.length > 2) {
        age.innerHTML = 'Its Not Really YEAR';
    } else {
        age.innerHTML = `Mine: ${ageInput.value} Age`
    }
});