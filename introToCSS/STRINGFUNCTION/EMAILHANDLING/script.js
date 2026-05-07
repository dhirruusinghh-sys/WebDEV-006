function Bulb1on(){
    document.getElementById("bulb1").style.backgroundColor = "yellow";

}
function Bulb1off(){
    document.getElementById("bulb1").style.backgroundColor = "";
}
function Bulb1red(){
    document.getElementById("bulb1").style.backgroundColor = "red";
}
function Bulb1blue(){
    document.getElementById("bulb1").style.backgroundColor = "blue";
}
function Bulb1green(){
    document.getElementById("bulb1").style.backgroundColor = "green";
}
function Bulb1white(){
    document.getElementById("bulb1").style.backgroundColor = "white";
}
function Bulb1black(){
    document.getElementById("bulb1").style.backgroundColor = "black";
}
function Bulb1pink(){
    document.getElementById("bulb1").style.backgroundColor = "pink";
}
function Bulbpurple(){
    document.getElementById("bulb1").style.backgroundColor = "purple";
}

document.getElementById("Bulb1red").addEventListener("click", Bulb1red);
document.getElementById("Bulb1blue").addEventListener("click", Bulb1blue);
document.getElementById("Bulb1green").addEventListener("click", Bulb1green);
document.getElementById("Bulb1white").addEventListener("click", Bulb1white);
document.getElementById("Bulb1black").addEventListener("click", Bulb1black);        
document.getElementById("Bulb1pink").addEventListener("click", Bulb1pink);
document.getElementById("Bulb1purple").addEventListener("click", Bulbpurple);

document.getElementById ("Bulb1on")
.addEventListener("change", ChangeBulbColor);

function ChangeBulbColor(){
    const color = document.getElementById("Bulb1on").value;
    document.getElementById("bulb1").style.backgroundColor = color;
    
}

function resetBulbColor(){
    window.location.reload();
}

