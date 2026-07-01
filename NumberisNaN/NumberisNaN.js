function onClickAdd() {
    debugger;
    let firstNumber = document.getElementById("txtFirstNumber").value;
    let secondNumber = document.getElementById("txtSecondNumber").value;
    alert(isNaN(firstNumber));
    alert(isNaN(secondNumber));

if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
   alert(Number(firstNumber)+Number(secondNumber));
}
else{
    alert(firstNumber+secondNumber);
}
}
