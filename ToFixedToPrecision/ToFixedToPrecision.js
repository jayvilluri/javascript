
function onClickToFixed(){
    debugger;
    var inputno=Number(document.getElementById("txtNum").value);
    var digits=Number(document.getElementById("txtDigits").value);
    alert(inputno.toFixed(digits));
}
function onClickToPrecision(){
    debugger;
    var inputno=Number(document.getElementById("txtNum").value);
    var digits=Number(document.getElementById("txtDigits").value);
    alert(inputno.toPrecision(digits));
}