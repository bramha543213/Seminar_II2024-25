<!DOCTYPE html>
<html>
<head>
  <title>Simple Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 50px;
    }
    input, select, button {
      padding: 8px;
      margin: 5px;
      font-size: 16px;
    }
  </style>
</head>
<body>

  <h2>Simple Calculator</h2>

  <label>First Number:</label>
  <input type="number" id="num1" /><br>

  <label>Second Number:</label>
  <input type="number" id="num2" /><br>

  <label>Operation:</label>
  <select id="operation">
    <option value="add">Sum (+)</option>
    <option value="subtract">Difference (-)</option>
    <option value="multiply">Product (×)</option>
    <option value="divide">Quotient (÷)</option>
  </select><br>

  <button onclick="calculate()">Calculate</button>

  <h3>Result: <span id="result">--</span></h3>

  <script>
    function calculate() {
      const num1 = parseFloat(document.getElementById("num1").value);
      const num2 = parseFloat(document.getElementById("num2").value);
      const operation = document.getElementById("operation").value;
      let result;

      if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
      } else {
        switch (operation) {
          case "add":
            result = num1 + num2;
            break;
          case "subtract":
            result = num1 - num2;
            break;
          case "multiply":
            result = num1 * num2;
            break;
          case "divide":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
          default:
            result = "Invalid operation";
        }
      }

      document.getElementById("result").innerText = result;
    }
  </script>

</body>
</html>
