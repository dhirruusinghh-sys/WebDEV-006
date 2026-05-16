
const form = document.querySelector("form");


form.addEventListener("submit", function (event) {
  event.preventDefault();


  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }

  const data = {
    fullName: form[0].value,
    email: form[1].value,
    phone: form[2].value,
    dob: form[3].value,
    qualification: form[4].value,
    marks: form[5].value,
    course: form[6].value,
    timing: form[7].value,
    address: form[8].value,
    city: form[9].value,
    pin: form[10].value,
    guardianName: form[11].value,
    guardianContact: form[12].value,
    source: form[13].value,
    special: form[14].value
  };

  console.log("Form Data:", data);

  alert("Registration Successful!");


  showData(data);


  form.reset();
  form.classList.remove("was-validated");
});


function showData(data) {
  let output = `
    <div class="card mt-4 p-3">
      <h4 class="text-success">Submitted Details</h4>
      <p><b>Name:</b> ${data.fullName}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>DOB:</b> ${data.dob}</p>
      <p><b>Course:</b> ${data.course}</p>
      <p><b>City:</b> ${data.city}</p>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", output);
}

form.addEventListener("reset", function () {
  location.reload();
});

form[0].addEventListener("input", function () {
  this.value = this.value.toUpperCase();
});