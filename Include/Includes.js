function onClickCheck(){
    debugger;
    let name=document.getElementById("txtEmail").value;
 let name1=document.getElementById("txtAlp").value;
 let result=name.includes(name1);
 document.getElementById("pResultCheck").innerHTML=result;
}