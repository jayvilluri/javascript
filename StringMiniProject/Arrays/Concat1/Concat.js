flowers=[ ]
function onClickPush(){
    debugger;
    var flower=document.getElementById("txtFlowers").value;
    document.getElementById("txtFlowers").value=" ";
    flowers.push(flower)
    document.getElementById("pResult").innerHTML=flowers;
}

function onClickPop(){
    debugger;
    var flower=document.getElementById("txtFlowers").value;
    document.getElementById("txtFlowers").value=" ";
    flowers.pop(flower)
    document.getElementById("pResult").innerHTML=flowers;
}

function onClickUnshift(){
    debugger;
    var flower=document.getElementById("txtFlowers").value;
    document.getElementById("txtFlowers").value=" ";
    flowers.unshift(flower)
    document.getElementById("pResult").innerHTML=flowers;
}

function onClickShift(){
    debugger;
    var flower=document.getElementById("txtFlowers").value;
    document.getElementById("txtFlowers").value=" ";
    flowers.shift(flower)
    document.getElementById("pResult").innerHTML=flowers;
}

fruits=[ ]
function onClickFruitsPush(){
    debugger;
    var fruit=document.getElementById("txtFruits").value;
    document.getElementById("txtFruits").value=" ";
    fruits.push(fruit)
    document.getElementById("pFruitsResult").innerHTML=fruits;
}

function onClickFruitsPop(){
    debugger;
    var fruit=document.getElementById("txtFruits").value;
    document.getElementById("txtFruits").value=" ";
    fruits.pop(fruit)
    document.getElementById("pFruitsResult").innerHTML=fruits;
}

function onClickFruitsUnshift(){
    debugger;
    var fruit=document.getElementById("txtFruits").value;
    document.getElementById("txtFruits").value=" ";
    fruits.unshift(fruit)
    document.getElementById("pFruitsResult").innerHTML=fruits;
}

function onClickFruitsShift(){
    debugger;
    var fruit=document.getElementById("txtFruits").value;
    document.getElementById("txtFruits").value=" ";
    fruits.shift(fruit)
    document.getElementById("pFruitsResult").innerHTML=fruit;
}

function onClickAdd(){
    debugger;
    let all=flowers.concat(fruits);
    document.getElementById("pResultAll").innerHTML=all.join("&");
    document.getElementById("pResultAll").style="color:red";
    alert(all);
}