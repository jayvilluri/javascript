function onClickCheck(){
    debugger;
    let name=document.getElementById("txtName").value;
    let name1=document.getElementById("txtTimes").value;
    let result=name.repeat(name1);
    document.getElementById("pResult").innerHTML=result;
}