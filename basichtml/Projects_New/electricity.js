function calculateBill() {
  let units = parseInt(document.getElementById("units").value);

  if (isNaN(units) || units < 0) {
    alert("Enter valid units");
    return;
  }

  let remaining = units;

  let s1 = Math.min(remaining, 50);
  let c1 = s1 * 0.5;
  remaining -= s1;

  let s2 = Math.min(Math.max(remaining, 0), 150);
  let c2 = s2 * 0.75;
  remaining -= s2;

  let s3 = Math.min(Math.max(remaining, 0), 250);
  let c3 = s3 * 1.2;
  remaining -= s3;

  let s4 = Math.max(remaining, 0);
  let c4 = s4 * 1.5;

  let subtotal = c1 + c2 + c3 + c4;
  let surcharge = subtotal * 0.2;
  let total = subtotal + surcharge;

  document.getElementById("slab1").innerText = `${s1} units = ₹${c1.toFixed(2)}`;
  document.getElementById("slab2").innerText = `${s2} units = ₹${c2.toFixed(2)}`;
  document.getElementById("slab3").innerText = `${s3} units = ₹${c3.toFixed(2)}`;
  document.getElementById("slab4").innerText = `${s4} units = ₹${c4.toFixed(2)}`;

  document.getElementById("subtotal").innerText = subtotal.toFixed(2);
  document.getElementById("surcharge").innerText = surcharge.toFixed(2);
  document.getElementById("total").innerText = total.toFixed(2);

  document.getElementById("resultCard").style.display = "block";
}

function resetForm() {
  document.getElementById("units").value = "";
  document.getElementById("resultCard").style.display = "none";
}