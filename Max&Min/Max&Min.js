function onClickMax() {
    debugger;
    let a = Number(document.getElementById("txtNum1").value);
    let b = Number(document.getElementById("txtNum2").value);
    let c = Number(document.getElementById("txtNum3").value);
    let max = Math.max(a, b, c);
    alert(max);
}
function onClickMin() {
    debugger;
    let a = Number(document.getElementById("txtNum1").value);
    let b = Number(document.getElementById("txtNum2").value);
    let c = Number(document.getElementById("txtNum3").value);
    let min = Math.min(a, b, c);
    alert(min);
}