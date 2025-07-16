<!DOCTYPE html>
<html>
<head>
  <title>Employee Form Validation</title>
  <style>
    label { display: block; margin-top: 10px; }
    .error { color: red; font-size: 0.9em; }
  </style>
  <script>
    function validateForm() {
      // Get form values
      const name = document.forms["empForm"]["name"].value.trim();
      const email = document.forms["empForm"]["email"].value.trim();
      const mobile = document.forms["empForm"]["mobile"].value.trim();
      const address = document.forms["empForm"]["address"].value.trim();
      const salary = document.forms["empForm"]["salary"].value.trim();

      let isValid = true;
      let errorMessages = "";

      // Clear all error messages
      document.querySelectorAll(".error").forEach(el => el.innerHTML = "");

      // Name validation
      if (name === "") {
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email.";
        isValid = false;
      }

      // Mobile number validation (10 digits)
      const mobileRegex = /^[0-9]{10}$/;
      if (!mobileRegex.test(mobile)) {
        document.getElementById("mobileError").innerText = "Enter a valid 10-digit mobile number.";
        isValid = false;
      }

      // Address validation
      if (address.length < 5) {
        document.getElementById("addressError").innerText = "Address must be at least 5 characters.";
        isValid = false;
      }

      // Salary validation (must be a positive number)
      if (isNaN(salary) || salary <= 0) {
        document.getElementById("salaryError").innerText = "Enter a valid positive salary.";
        isValid = false;
      }

      return isValid; // Submit only if valid
    }
  </script>
</head>
<body>
  <h2>Employee Registration Form</h2>
  <form name="empForm" onsubmit="return validateForm()">
    <label>Name: <input type="text" name="name" /></label>
    <div id="nameError" class="error"></div>

    <label>Email: <input type="text" name="email" /></label>
    <div id="emailError" class="error"></div>

    <label>Mobile No: <input type="text" name="mobile" /></label>
    <div id="mobileError" class="error"></div>

    <label>Address: <textarea name="address"></textarea></label>
    <div id="addressError" class="error"></div>

    <label>Salary: <input type="text" name="salary" /></label>
    <div id="salaryError" class="error"></div>

    <br/>
    <input type="submit" value="Submit" />
  </form>
</body>
</html>
