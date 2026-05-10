document.querySelector ("form").addEventListener("submit",(event) => {
    event.preventDefault();

    const dob = document.getElementById("DOB").value;
    const curDate = document.getElementById("CurrentDate").value;

    if (!dob || !curDate){
        alert("Please select both dates.");
        return;
    }

    const Age = Number(curDate.split("-")[0]) - Number (dob.split("-")[0]);
    console.log(Age);
    document.getElementById("MyAge").innerText = Age;

    document.getElementById("DOB").value = "";
    document.getElementById("CurrentDate").value = "";

})