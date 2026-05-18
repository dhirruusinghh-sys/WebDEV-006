const form = document.getElementById("passForm");
const toggle = document.getElementById("togglePass");
const passwordField = document.getElementById("password");

toggle.addEventListener("click", () => {
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
        webSiteName: siteName.value,
        userName: userName.value,
        password: password.value
    };

    let old = JSON.parse(localStorage.getItem("Passwords")) || [];
    old.push(data);

    localStorage.setItem("Passwords", JSON.stringify(old));

    form.reset();
    alert("Saved 🔥");
});