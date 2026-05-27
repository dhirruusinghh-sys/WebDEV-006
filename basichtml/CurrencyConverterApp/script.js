const flags = {
  usd:"https://flagcdn.com/w80/us.png",
  inr:"https://flagcdn.com/w80/in.png",
  eur:"https://flagcdn.com/w80/eu.png",
  gbp:"https://flagcdn.com/w80/gb.png"
};

const names = {
  usd:"US Dollar",
  inr:"Indian Rupee",
  eur:"Euro",
  gbp:"British Pound"
};

const symbols = {
  usd:"$",
  inr:"₹",
  eur:"€",
  gbp:"£"
};

function updateUI(){

  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  document.getElementById("fromFlag").src = flags[from];
  document.getElementById("toFlag").src = flags[to];

  document.getElementById("fromName").innerText = names[from];
  document.getElementById("toName").innerText = names[to];
}

async function convertCurrency(){

  const amount = document.getElementById("amount").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  const URL =
  `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;

  try{

    const response = await fetch(URL);
    const data = await response.json();

    const rate = data[from][to];

    const finalAmount = amount * rate;

    document.getElementById("result").innerHTML =
    `${symbols[to]}${finalAmount.toFixed(2)}`;

    document.getElementById("rate").innerHTML =
    `1 ${from.toUpperCase()} = ${rate.toFixed(2)} ${to.toUpperCase()}`;

    document.getElementById("time").innerHTML =
    "Updated : " + new Date().toLocaleString();

  }

  catch(error){

    document.getElementById("result").innerHTML =
    "Error";

  }

}

function swapCurrency(){

  const from = document.getElementById("from");
  const to = document.getElementById("to");

  let temp = from.value;
  from.value = to.value;
  to.value = temp;

  updateUI();
  convertCurrency();
}

document.getElementById("from").addEventListener("change",()=>{
  updateUI();
});

document.getElementById("to").addEventListener("change",()=>{
  updateUI();
});

convertCurrency();