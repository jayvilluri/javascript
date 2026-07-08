function onClickCheck(){
    debugger;
    let a=document.getElementById("txtLength").value;
    alength=a.length;
    document.getElementById("ponClickCheck").innerHTML=alength+"/200";

    if(alength > 200){
        document.getElementById("ponClickCheck").style.color="red";
        a=a.substring(0,200);
        document.getElementById("txtLength").value=a;
        document.getElementById("ponClickCheck").innerHTML=a.length + "/200";
    }
}