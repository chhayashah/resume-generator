function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "eqField", "mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function generateCV() {
    let nameField = document.getElementById("nameField").value;
    document.getElementById("nameT1").innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = nameField;

    document.getElementById("contactT").innerHTML = document.getElementById(
        "contactField").value;
    document.getElementById("addressT").innerHTML = document.getElementById(
        "addressField").value;
    document.getElementById("linkedinT").innerHTML = document.getElementById(
        "lkField").value;
    document.getElementById("githubT").innerHTML = document.getElementById(
        "gbField").value;
    document.getElementById("fbT").innerHTML = document.getElementById(
        "fbField").value;

    document.getElementById("objectiveT2").innerHTML = document.getElementById(
        "objectiveField").value;

    let wes = document.getElementsByClassName("weField");
    let weStr = "";
    for (let we of wes) {
        weStr += `<li>${we.value}</li>`;
    }
    document.getElementById("weT").innerHTML = weStr;

    let aqs = document.getElementsByClassName("eqField");
    let aqStr = "";
    for (let aq of aqs) {
        aqStr += `<li>${aq.value}</li>`;
    }
    document.getElementById("aqT").innerHTML = aqStr;

    // code for setting image
    let file = document.getElementById('imgField').files[0];
    console.log(file);

    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    // set the image to template
    reader.onloadend = function () {
        document.getElementById("imgTemplate").src = reader.result;

    };

    document.getElementById("cv-form").style.display = 'none';
    document.getElementById("cv-template").style.display = 'block';
}

function printCV() {
    window.print();
}
