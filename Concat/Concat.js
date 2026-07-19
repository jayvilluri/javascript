function onClickCheck(){
    debugger;
    let name=document.getElementById("txtName").value;
    let index=document.getElementById("txtIndex").value;
    let result=name.concat(" , ",index);
    document.getElementById("pResult").innerHTML=result;
}