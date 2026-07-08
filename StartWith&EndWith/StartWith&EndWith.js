function onClickStart(){
    debugger;
    let name=document.getElementById("txtName").value;
    let name1=document.getElementById("txtAlp").value;
    let result=name.startsWith(name1);
    document.getElementById("pResultCheck").innerHTML=result
}
function onClickEndWith(){
    debugger;
    let name=document.getElementById("txtName").value;
    let name1=document.getElementById("txtAlp").value;
    let result=name.endsWith(name1);
    document.getElementById("pResultCheck1").innerHTML=result
}