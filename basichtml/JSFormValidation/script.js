function validateForm() {
  let fullname = document.getElementById("fullname").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (fullname === "") {
    alert("Please enter your name");
    return;
  }

  if (phone === "") {
    alert("Please enter your phone number");
    return;
  }

  if (email === "") {
    alert("Please enter your email");
    return;
  }

  if (password === "") {
    alert("Please enter your password");
    return;
  }

  alert("Form submitted successfully!");
}

// function submit(){
//     const fullname = document.getElementById("fullname").value;
//     const phone = document.getElementById("phone").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     if(!/^[a-zA-Z\s]+$/.test(fullname)){
//         document.getElementById("nameError").innerText = "Please enter a valid name";
//         // alert("Please enter a valid name");

//          if(!/^[a-zA-Z\s]+$/.test(phone)){
//         document.getElementById("phoneError").innerText = "Please enter a valid phone number";

//          if(!/^[a-zA-Z\s]+$/.test(email)){
//         document.getElementById("emailError").innerText = "Please enter a valid email";
//         return;
//     };

//      if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
//         document.getElementById("passwordError").innerText = "Please enter a valid password";
//         return;
//     };