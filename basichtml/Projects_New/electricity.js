function calculateBill(){
    let units = parseInt(document.getElementById("units").value);

    if(isNaN(units)|| units<0){
        alert("Please enter valid positive units");
        return;

    }
    let remaining = units;

    let slab1Units = Math.min (remaining,50);
    let slab1charge = slab1Units * 0.5;
    remaining -= slab1Units;

    let slab2Units = Math.min (Math.max(remaining,100), 150);
    let slab2charge = slab2Units * 0.75;
    remaining -= slab2Units;

    let slab3Units = Math.min (Math.max(remaining,150), 250);
    let slab3charge = slab3Units * 1.2;
    remaining -= slab3Units;

    let slab4Units = Math.max(remaining,0);
    let slab4charge = slab4Units * 1.5;

    let totalCharge = slab1charge + slab2charge + slab3charge + slab4charge;
    let surcharge = totalCharge * 0.2;
    let total = totalCharge + surcharge;

    document.getElementById("slab1").innerText = `${slab1Units} units = ₹${slab1Charge.toFixed(2)}`;
      document.getElementById("slab2").innerText = `${slab2Units} units = ₹${slab2Charge.toFixed(2)}`;
      document.getElementById("slab3").innerText = `${slab3Units} units = ₹${slab3Charge.toFixed(2)}`;
      document.getElementById("slab4").innerText = `${slab4Units} units = ₹${slab4Charge.toFixed(2)}`;

      document.getElementById("subtoatl").innerText = totalCharge.toFixed(2);
      document.getElementById("surcharge").innerText = surcharge.toFixed(2);    
        document.getElementById("total").innerText = total.toFixed(2);

        document.getElementById("resultCard").style.display = "block";
}
function resetform(){
    document.getElementById("units").value = "";
    document.getElementById("resultCard").style.display = "none";
}