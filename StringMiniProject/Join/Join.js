names=[]
function onClickPush(){
    debugger;
var name=document.getElementById("txtName").value;
document.getElementById("txtName").value=" ";
names.push(name);
document.getElementById("pResult").innerHTML=names;
}

function onClickJoin(){
    debugger;
    var first=document.getElementById("txtJoin").value;
   document.getElementById("PJoinResult").innerHTML= names.join(first);
}