function onClickMax(){
    debugger;
   let a=document.getElementById("txtSdt1").value;
   let b=document.getElementById("txtSdt2").value;
   let c=document.getElementById("txtSdt3").value;
   let d=document.getElementById("txtSdt4").value;
   let e=document.getElementById("txtSdt5").value;
   let max=Math.max(a,b,c,d,e);
   alert(max);
}
function onClickMin(){
    let a=document.getElementById("txtSdt1").value;
   let b=document.getElementById("txtSdt2").value;
   let c=document.getElementById("txtSdt3").value;
   let d=document.getElementById("txtSdt4").value;
   let e=document.getElementById("txtSdt5").value;
   let min=Math.min(a,b,c,d,e);
   alert(min);
}