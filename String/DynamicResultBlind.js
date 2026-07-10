function onClickSubmit(){
    debugger;
    let name=document.getElementById("txtName").value;
    let age=document.getElementById("txtAge").value;
    let gender=document.getElementById("txtGender").value;
    let content= `My name is: ${name} <br> My age is: ${age} <br> i am :${gender}`;
    document.getElementById("onClickSubmit").innerHTML= content;
}