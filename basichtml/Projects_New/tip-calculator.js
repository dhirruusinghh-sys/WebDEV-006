function calculateTip() {
  let bill = parseFloat(document.getElementById("billAmount").value);
  let service = parseFloat(document.getElementById("service").value);
  let people = parseInt(document.getElementById("people").value);

  if (isNaN(bill) || bill <= 0) {
    alert("Enter valid bill amount");
    return;
  }

  if (isNaN(service)) {
    alert("Select service quality");
    return;
  }

  if (isNaN(people) || people <= 0) {
    alert("Enter valid number of people");
    return;
  }

  let tip = bill * service;
  let total = bill + tip;
  let perPerson = total / people;

  document.getElementById("result").innerText =
    "Each person should pay ₹" + perPerson.toFixed(2);
}