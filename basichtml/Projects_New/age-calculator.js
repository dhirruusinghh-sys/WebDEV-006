document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const dob = document.getElementById("DOB").value;
    const curDate = document.getElementById("CurrentDate").value;

    if (!dob || !curDate) {
        alert("Please select both dates.");
        return;
    }

    const birthDate = new Date(dob);
    const currentDate = new Date(curDate);

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    const monthDiff = currentDate.getMonth() - birthDate.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 &&
            currentDate.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    document.getElementById("MyAge").innerText = age;

    document.getElementById("DOB").value = "";
    document.getElementById("CurrentDate").value = "";
});