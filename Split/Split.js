function onClickCheck(){
    debugger;
    let name=document.getElementById("txtName").value;
    let result=name.split(",");
    document.getElementById("pResult").innerHTML=JSON.stringify(result);
}