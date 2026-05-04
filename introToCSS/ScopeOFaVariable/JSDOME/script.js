function Submit() {
    console.log("submit button clicked");


const fn = document.getElementById("fullname").value;
console.log(fn);

document.getElementById("mydata").innerText =  fn;
document.getElementById("mydata2").innerText =  fn;
document.getElementById("mydata3").innerText =  fn;
document.getElementById("fullname").value = "";

document.getElementById("datacard").classList.add("divshow");
document.getElementById("datacard").classList.remove("divhide");

}