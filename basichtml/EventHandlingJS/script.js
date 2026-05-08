document.getElementById("redbox").addEventListener("mouseover", fillRedColor);
document.getElementById("redbox").addEventListener("mouseout", fillBaseColor);

document
    .getElementById("Greenbox")
    .addEventListener("mouseover", fillGreenColor);
document.getElementById("Greenbox").addEventListener("mouseout", fillBaseColor);

document.getElementById("Bluebox").addEventListener("mouseover", fillBlueColor);
document.getElementById("Bluebox").addEventListener("mouseout", fillBaseColor);

function fillRedColor() {
    document.getElementById("bulb1").style.backgroundColor = "red";
}
function fillGreenColor() {
    document.getElementById("bulb1").style.backgroundColor = "green";
}
function fillBlueColor() {
    document.getElementById("bulb1").style.backgroundColor = "blue";
}
function fillBaseColor() {
   
}


document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const  fn = document.getElementById
});


















document.addEventListener ("keydown", () =>{
    let keypress = event.key;

    keypress === "Escape" &&
    console.log(keypress);


});