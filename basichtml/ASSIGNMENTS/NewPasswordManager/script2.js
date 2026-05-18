const table = document.getElementById("passwordData");
const data = JSON.parse(localStorage.getItem("Passwords")) || [];

if (data.length === 0) {
    table.innerHTML = "<tr><td colspan='3'>No Data 😢</td></tr>";
}

data.forEach(item => {
    const row = `
        <tr>
            <td>${item.webSiteName}</td>
            <td>${item.userName}</td>
            <td>${item.password}</td>
        </tr>
    `;
    table.innerHTML += row;
});