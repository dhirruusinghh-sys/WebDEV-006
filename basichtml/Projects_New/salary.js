
    function calculateSalary(){

      const monthly =
        parseFloat(document.getElementById("monthlySalary").value) || 0;

      const bonus =
        parseFloat(document.getElementById("bonus").value) || 0;

      const annual = (monthly * 12) + bonus;

      document.getElementById("annualSalary").innerHTML =
        "₹" + annual.toLocaleString();

      document.getElementById("monthlyResult").innerHTML =
        "Monthly: ₹" + monthly.toLocaleString();

      // Animation Effect
      const result = document.querySelector(".result");

      result.style.transform = "scale(1.06)";

      setTimeout(()=>{
        result.style.transform = "scale(1)";
      },300);
    }  function calculateSalary(){

      const monthly =
        parseFloat(document.getElementById("monthlySalary").value) || 0;

      const bonus =
        parseFloat(document.getElementById("bonus").value) || 0;

      const tax =
        parseFloat(document.getElementById("tax").value) || 0;

      const annual = (monthly * 12) + bonus;

      const taxAmount = annual * (tax / 100);

      const afterTax = annual - taxAmount;

      document.getElementById("annualSalary").innerHTML =
        "₹" + annual.toLocaleString();

      document.getElementById("monthlyResult").innerHTML =
        "Monthly: ₹" + monthly.toLocaleString();

      document.getElementById("afterTax").innerHTML =
        "₹" + afterTax.toLocaleString();

      document.getElementById("bonusResult").innerHTML =
        "₹" + bonus.toLocaleString();

      // Animation
      const result = document.querySelector(".result");

      result.style.transform = "scale(1.05)";

      setTimeout(()=>{
        result.style.transform = "scale(1)";
      },300);
    }