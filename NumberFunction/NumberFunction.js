
function onClickNumber() {
    debugger;
    var a = document.getElementById("txtEnter").value;
    number = Number(a);
    document.getElementById("pResult").innerHTML=number;
    alert(number);
}
function onClickParseInt() {
    debugger;
    var a = document.getElementById("txtEnter").value;
    number = parseInt(a);
    document.getElementById("pResult").innerHTML=number;
    alert(number);
}
function onClickParseFloat() {
    debugger;
    var a = document.getElementById("txtEnter").value;
    number = parseFloat(a);
    document.getElementById("pResult").innerHTML=number;
    alert(number);
}