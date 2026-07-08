function onClickIndexof() {
    debugger;
    let name = document.getElementById("txtName").value;
    let name1 = document.getElementById("txtAlp").value;
    let result = name.indexOf(name1);
    document.getElementById("pResultIndexOf").innerHTML = result;
}

function onClickLastindex() {
    debugger;
    let name = document.getElementById("txtName").value;
    let name1 = document.getElementById("txtAlp").value;
    let result = name.lastIndexOf(name1);
    document.getElementById("pResultLastindex").innerHTML = result;
}