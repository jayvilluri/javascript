flowers=["rose","lily","marygold","bulebull"]
function onClickSubmit(){
    debugger;
    var index=document.getElementById("txtFlowers").value;
    document.getElementById("pResult").innerHTML=flowers[index];
}