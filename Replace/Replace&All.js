function onClickReplace(){
    debugger;
    let name=document.getElementById("txtName").value;
    let alp=document.getElementById("txtReplace").value;
    let result=name.replace("Jay",alp);
    document.getElementById("pResult").innerHTML=result;
}
function onClickReplaceAll(){
    debugger;
    let name=document.getElementById("txtName").value;
    let alp=document.getElementById("txtReplace").value;
    let result=name.replaceAll(name,alp);
    document.getElementById("pResult1").innerHTML=result;
}