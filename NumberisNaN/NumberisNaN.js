function onClickAdd() {
    debugger;
    let firstNumber = document.getElementById("txtFirstNumber").value;
    let secondNumber = document.getElementById("txtSecondNumber").value;
    document.getElementById("onClickAdd").innerHTML = isNaN(firstNumber);
    document.getElementById("onClickAdd").innerHTML = isNaN(secondNumber);
    alert(isNaN(firstNumber));
    alert(isNaN(secondNumber));

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        document.getElementById("onClickAdd").innerHTML = Number(firstNumber) + Number(secondNumber);
        alert(Number(firstNumber) + Number(secondNumber));
    }
    else {
        document.getElementById("onClickAdd").innerHTML = firstNumber + secondNumber;
        alert(firstNumber + secondNumber);
    }
}
