

const bgPicker = document.getElementById("bgPicker");
const headingPicker = document.getElementById("headingPicker");
const paraPicker = document.getElementById("paraPicker");

const contentArea = document.getElementById("contentArea");
const mainHeading = document.getElementById("mainHeading");
const mainPara = document.getElementById("mainPara");

const resetBtn = document.getElementById("resetBtn");




bgPicker.addEventListener("input", function () {
    contentArea.style.backgroundColor = bgPicker.value;
});




headingPicker.addEventListener("input", function () {
    mainHeading.style.color = headingPicker.value;
});




paraPicker.addEventListener("input", function () {
    mainPara.style.color = paraPicker.value;
});



resetBtn.addEventListener("click", function () {

    contentArea.style.backgroundColor = "white";
    mainHeading.style.color = "black";
    mainPara.style.color = "black";

    bgPicker.value = "#ffffff";
    headingPicker.value = "#000000";
    paraPicker.value = "#000000";

});