names=[ ]
function onClickPush(){
    debugger;
    var num=document.getElementById("txtName").value;
    document.getElementById("txtName").value=" ";
    names.push(num);
    document.getElementById("pResult").innerHTML=names;
}

function onClickSlice(){
    debugger;
    var first=document.getElementById("txtFirstNum").value;
    var second=document.getElementById("txtSecondNum").value;
    document.getElementById("pSliceResult").innerHTML=names.slice(first,second);
}