// Add Data Function
function addData() {
  let website = document.getElementById("website").value.trim();
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();

  if (!website || !username || !password) {
    alert("Please fill all fields!");
    return;
  }

  let newEntry = {
    website: website,
    username: username,
    password: password
  };

  let storedData = localStorage.getItem("passwords");
  let dataArray = storedData ? JSON.parse(storedData) : [];

  dataArray.push(newEntry);

  localStorage.setItem("passwords", JSON.stringify(dataArray));

  // Clear fields
  document.getElementById("website").value = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

  alert("Data added successfully!");
}


// Download Data Function
function downloadData() {
  let storedData = localStorage.getItem("passwords");

  if (!storedData) {
    alert("No data available to download!");
    return;
  }

  let dataArray = JSON.parse(storedData);

  if (dataArray.length === 0) {
    alert("No data available to download!");
    return;
  }

  // Convert to table-like text
  let content = "Website\tUsername\tPassword\n";

  dataArray.forEach(entry => {
    content += `${entry.website}\t${entry.username}\t${entry.password}\n`;
  });

  // Create file
  let blob = new Blob([content], { type: "text/plain" });
  let link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "passwords.txt";
  link.click();

  // Clear storage after download
  localStorage.removeItem("passwords");

  alert("Download complete & data cleared!");
}